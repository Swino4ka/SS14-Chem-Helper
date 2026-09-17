import { state, reactionFiles } from './state.js';
import { applyLanguage } from './i18n.js';

export function parseYamlReactions(yaml) {
  const parsedMaterials = {};
  const parsedCategories = {};
  const parsedTemps = {};
  let defaultCategory = 'Wizden';
  let reaction = null;
  let section = null;
  let currentIngredient = null;

  function commitReaction() {
    if (!reaction || !reaction.id || Object.keys(reaction.products).length === 0) return;

    for (const [product, productAmount] of Object.entries(reaction.products)) {
      if (parsedMaterials[product]) continue;
      parsedMaterials[product] = {};
      parsedCategories[product] = reaction.category || defaultCategory;
      for (const [ingredient, details] of Object.entries(reaction.reactants)) {
        parsedMaterials[product][ingredient] = details.catalyst ? 0 : details.amount / productAmount;
      }
    }
    if (reaction.minTemp) parsedTemps[reaction.id] = reaction.minTemp;
  }

  for (const rawLine of yaml.split(/\r?\n/)) {
    const categoryComment = rawLine.trim().match(/^#\s*Default category:\s*([A-Za-z0-9_-]+)/i);
    if (categoryComment) {
      defaultCategory = categoryComment[1];
      continue;
    }
    const line = rawLine.replace(/\s+#.*$/, '');
    const trimmed = line.trim();
    const indent = line.length - line.trimStart().length;

    if (trimmed === '- type: reaction') {
      commitReaction();
      reaction = { id: null, category: null, reactants: {}, products: {}, minTemp: null };
      section = null;
      currentIngredient = null;
      continue;
    }
    if (!reaction || !trimmed || trimmed.startsWith('#')) continue;

    const idMatch = trimmed.match(/^id:\s*([A-Za-z0-9_]+)/);
    if (idMatch && indent === 2) {
      reaction.id = idMatch[1];
      continue;
    }
    const categoryMatch = trimmed.match(/^category:\s*([A-Za-z0-9_-]+)$/);
    if (categoryMatch && indent === 2) {
      reaction.category = categoryMatch[1];
      continue;
    }
    const temperatureMatch = trimmed.match(/^minTemp:\s*(-?\d+(?:\.\d+)?)$/);
    if (temperatureMatch && indent === 2) {
      reaction.minTemp = Number(temperatureMatch[1]);
      continue;
    }
    if (trimmed === 'reactants:' || trimmed === 'products:') {
      section = trimmed.slice(0, -1);
      currentIngredient = null;
      continue;
    }

    const namedValue = trimmed.match(/^([A-Za-z0-9_]+):(?:\s*(-?\d+(?:\.\d+)?))?$/);
    if (namedValue && indent === 4 && section) {
      currentIngredient = namedValue[1];
      if (section === 'products' && namedValue[2] !== undefined) {
        reaction.products[currentIngredient] = Number(namedValue[2]);
      }
      continue;
    }
    const amountMatch = trimmed.match(/^amount:\s*(-?\d+(?:\.\d+)?)$/);
    if (amountMatch && indent === 6 && section === 'reactants' && currentIngredient) {
      reaction.reactants[currentIngredient] = { amount: Number(amountMatch[1]), catalyst: false };
      continue;
    }
    if (trimmed === 'catalyst: true' && indent === 6 && section === 'reactants' && currentIngredient) {
      reaction.reactants[currentIngredient].catalyst = true;
    }
  }

  commitReaction();
  return { materials: parsedMaterials, categories: parsedCategories, reactionTemps: parsedTemps };
}

export async function loadReactions() {
  const [translationResponse, englishResponse, exceptionsResponse, ...reactionResponses] = await Promise.all([
    fetch(`Translations/${state.currentLanguage === 'en' ? 'en_us' : 'ru_ru'}.json`, { cache: 'no-store' }),
    fetch('Translations/en_us.json', { cache: 'no-store' }),
    fetch('Config/crafting_exceptions.json', { cache: 'no-store' }),
    ...reactionFiles.map(file => fetch(`Reactions/${file}`, { cache: 'no-store' }))
  ]);

  const responses = [translationResponse, englishResponse, exceptionsResponse, ...reactionResponses];
  const failedResponse = responses.find(response => !response.ok);
  if (failedResponse) throw new Error(`Failed to load ${failedResponse.url}: HTTP ${failedResponse.status}`);

  state.translations = await translationResponse.json();
  const englishTranslations = await englishResponse.json();
  state.uiTranslations = state.translations._ui || englishTranslations._ui || {};
  delete state.translations._ui;
  delete englishTranslations._ui;
  if (state.currentLanguage === 'en') state.translations = englishTranslations;
  applyLanguage();
  state.craftingExceptions = new Set(await exceptionsResponse.json());
  state.materials = {};
  state.materialCategories = {};
  state.reactionTemps = {};

  for (const response of reactionResponses) {
    const parsed = parseYamlReactions(await response.text());
    for (const [product, material] of Object.entries(parsed.materials)) {
      const category = parsed.categories[product];
      const currentCategory = state.materialCategories[product];
      const isHigherPriority = category === 'CorvaxGoob' && currentCategory !== 'CorvaxGoob';
      if (!currentCategory || isHigherPriority) {
        state.materials[product] = material;
        state.materialCategories[product] = category;
      }
    }
    Object.assign(state.reactionTemps, parsed.reactionTemps);
  }
}