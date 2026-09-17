import { state } from './state.js';
import { appendMaterialLabel, displayLabel, t } from './i18n.js';
import {
  materialsListElem, productionListElem, reagentsListElem,
  baseReagentsListElem, detailedListElem, favoritesListElem
} from './dom.js';

export function formatAmount(amount) {
  if (amount === 0) return t('catalyst');
  const roundedAmount = Number(amount.toFixed(2));
  return roundedAmount === 0 ? '<0.01' : roundedAmount;
}

export function formatIngredientAmount(amount) {
  const formattedAmount = formatAmount(amount);
  return formattedAmount === t('catalyst') ? formattedAmount : `${formattedAmount}u`;
}

export function populateMaterialsList() {
  materialsListElem.innerHTML = '';
  const sortedMaterials = Object.keys(state.materials).sort((left, right) =>
    displayLabel(left).localeCompare(displayLabel(right), 'ru')
  );
  for (const material of sortedMaterials) {
    const option = document.createElement('option');
    option.value = displayLabel(material);
    materialsListElem.appendChild(option);
  }
}

export function isMaterialValid(materialName) {
  return Object.prototype.hasOwnProperty.call(state.materials, materialName);
}

export function updateProductionList() {
  productionListElem.innerHTML = '';
  if (state.productionItems.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = t('emptyProduction');
    emptyMessage.classList.add('empty-message');
    productionListElem.appendChild(emptyMessage);
    return;
  }
  [...state.productionItems].reverse().forEach((item, index) => {
    const li = document.createElement('li');
    const itemText = document.createElement('span');
    itemText.append(`${item.quantity} u `);
    appendMaterialLabel(itemText, item.name);
    li.appendChild(itemText);
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('item-buttons');
    const favBtn = document.createElement('button');
    favBtn.textContent = '★';
    favBtn.title = 'Добавить в избранное';
    favBtn.classList.add('fav-btn');
    favBtn.addEventListener('click', event => {
      event.stopPropagation();
      addToFavorites(item.name, item.quantity);
    });
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', event => {
      event.stopPropagation();
      removeItem(state.productionItems.length - 1 - index);
    });
    buttonsContainer.append(favBtn, deleteBtn);
    li.append(itemText, buttonsContainer);
    productionListElem.appendChild(li);
  });
}

export function addToFavorites(name, quantity) {
  const exists = state.favoriteItems.some(item => item.name === name && item.quantity === quantity);
  if (!exists) {
    state.favoriteItems.push({ name, quantity });
    localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems));
    updateFavoritesList();
  }
}

export function removeFromFavorites(index) {
  state.favoriteItems.splice(index, 1);
  localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems));
  updateFavoritesList();
}

export function updateFavoritesList() {
  favoritesListElem.innerHTML = '';
  if (state.favoriteItems.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = t('emptyFavorites');
    emptyMessage.classList.add('empty-message');
    favoritesListElem.appendChild(emptyMessage);
    return;
  }
  state.favoriteItems.forEach((item, index) => {
    const li = document.createElement('li');
    const itemText = document.createElement('span');
    itemText.append(`${item.quantity} u `);
    appendMaterialLabel(itemText, item.name);
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('fav-buttons');
    const useBtn = document.createElement('button');
    useBtn.textContent = t('favoriteUse');
    useBtn.classList.add('use-btn');
    useBtn.addEventListener('click', event => {
      event.stopPropagation();
      addItemToProduction(item.name, item.quantity);
    });
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', event => {
      event.stopPropagation();
      removeFromFavorites(index);
    });
    buttonsContainer.append(useBtn, deleteBtn);
    li.append(itemText, buttonsContainer);
    favoritesListElem.appendChild(li);
  });
}

export function addItemToProduction(name, quantity) {
  state.productionItems.push({ name, quantity });
  refreshProductionViews();
}

export function removeItem(index) {
  state.productionItems.splice(index, 1);
  refreshProductionViews();
}

function refreshProductionViews() {
  updateProductionList();
  updateReagentsList();
  updateBaseReagentsList();
  updateDetailedList();
}

export function updateReagentsList() {
  const reagentsTotal = {};
  state.productionItems.forEach(item => {
    for (const reagent in state.materials[item.name]) {
      const amount = item.quantity * state.materials[item.name][reagent];
      reagentsTotal[reagent] = (reagentsTotal[reagent] || 0) + amount;
    }
  });
  renderReagentList(reagentsListElem, reagentsTotal, 'emptyReagents');
}

function getBaseReagents(materialName, quantity, visited = new Set()) {
  if (!isMaterialValid(materialName) || state.craftingExceptions.has(materialName) || visited.has(materialName)) {
    return { [materialName]: quantity };
  }
  const nextVisited = new Set(visited);
  nextVisited.add(materialName);
  const result = {};
  for (const reagent in state.materials[materialName]) {
    const reagentQuantity = quantity * state.materials[materialName][reagent];
    if (isMaterialValid(reagent)) {
      const subReagents = getBaseReagents(reagent, reagentQuantity, nextVisited);
      for (const sub in subReagents) result[sub] = (result[sub] || 0) + subReagents[sub];
    } else {
      result[reagent] = (result[reagent] || 0) + reagentQuantity;
    }
  }
  return result;
}

export function updateBaseReagentsList() {
  const baseTotal = {};
  state.productionItems.forEach(item => {
    const baseForItem = getBaseReagents(item.name, item.quantity);
    for (const reagent in baseForItem) {
      if (baseForItem[reagent] !== 0) baseTotal[reagent] = (baseTotal[reagent] || 0) + baseForItem[reagent];
    }
  });
  renderReagentList(baseReagentsListElem, baseTotal, 'emptyBase');
}

function renderReagentList(element, totals, emptyKey) {
  element.innerHTML = '';
  if (Object.keys(totals).length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = t(emptyKey);
    emptyMessage.classList.add('empty-message');
    element.appendChild(emptyMessage);
    return;
  }
  Object.keys(totals).sort().forEach(reagent => {
    const li = document.createElement('li');
    li.append(`${formatIngredientAmount(totals[reagent])} `);
    appendMaterialLabel(li, reagent);
    element.appendChild(li);
  });
}

export function updateDetailedList() {
  detailedListElem.innerHTML = '';
  if (state.productionItems.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = t('emptyDetails');
    emptyMessage.classList.add('empty-message');
    detailedListElem.appendChild(emptyMessage);
    return;
  }
  [...state.productionItems].reverse().forEach(item => {
    const tree = document.createElement('div');
    tree.classList.add('crafting-tree');
    const treeHeader = document.createElement('div');
    treeHeader.classList.add('tree-header');
    const treeKicker = document.createElement('span');
    treeKicker.classList.add('tree-kicker');
    treeKicker.textContent = t('treeKicker');
    const header = document.createElement('h3');
    appendMaterialLabel(header, item.name);
    const steps = generateCraftingSteps(item.name, item.quantity);
    const summary = document.createElement('span');
    summary.classList.add('tree-summary');
    summary.textContent = `${item.quantity}u · ${steps.length} ${t('stages')}`;
    treeHeader.append(treeKicker, header, summary);
    tree.appendChild(treeHeader);
    const stepsContainer = document.createElement('div');
    stepsContainer.classList.add('crafting-steps', 'tree-branches');
    steps.forEach((step, index) => {
      const stepElement = document.createElement('div');
      stepElement.classList.add('crafting-step');
      if (index === steps.length - 1) stepElement.classList.add('is-target');
      const stepNumber = document.createElement('div');
      stepNumber.classList.add('step-number');
      stepNumber.textContent = `${index + 1}.`;
      const stepContent = document.createElement('div');
      stepContent.classList.add('step-content');
      const stepTitle = document.createElement('div');
      stepTitle.classList.add('step-title');
      appendMaterialLabel(stepTitle, step.product);
      stepTitle.append(` ${formatIngredientAmount(step.quantity)}`);
      if (state.reactionTemps[step.product]) {
        stepTitle.innerHTML += ` <span class="temp-req">🔥 ${state.reactionTemps[step.product]}K</span>`;
      }
      stepContent.appendChild(stepTitle);
      if (Object.keys(step.ingredients).length > 0) {
        const ingredientsList = document.createElement('ul');
        ingredientsList.classList.add('step-ingredients');
        Object.keys(step.ingredients).sort().forEach(ingredient => {
          const ingredientItem = document.createElement('li');
          appendMaterialLabel(ingredientItem, ingredient);
          ingredientItem.append(` ${formatIngredientAmount(step.ingredients[ingredient])}`);
          ingredientsList.appendChild(ingredientItem);
        });
        stepContent.appendChild(ingredientsList);
      }
      stepElement.append(stepNumber, stepContent);
      stepsContainer.appendChild(stepElement);
    });
    tree.appendChild(stepsContainer);
    detailedListElem.appendChild(tree);
  });
}

function generateCraftingSteps(materialName, quantity) {
  const steps = [];
  const addedMaterials = new Map();
  function processMaterialHierarchy(name, amount, visited = new Set()) {
    if (!isMaterialValid(name) || visited.has(name)) return;
    const nextVisited = new Set(visited);
    nextVisited.add(name);
    for (const ingredient in state.materials[name]) {
      const ingredientAmount = amount * state.materials[name][ingredient];
      if (isMaterialValid(ingredient) && !state.craftingExceptions.has(ingredient)) {
        processMaterialHierarchy(ingredient, ingredientAmount, nextVisited);
      }
    }
    if (!addedMaterials.has(name)) {
      addedMaterials.set(name, amount);
      steps.push({ product: name, quantity: amount, ingredients: Object.fromEntries(
        Object.entries(state.materials[name]).map(([ingredient, value]) => [ingredient, amount * value])
      ) });
    } else if (amount > addedMaterials.get(name)) {
      const step = steps.find(candidate => candidate.product === name);
      if (step) {
        step.quantity = amount;
        for (const ingredient in state.materials[name]) step.ingredients[ingredient] = amount * state.materials[name][ingredient];
      }
      addedMaterials.set(name, amount);
    }
  }
  processMaterialHierarchy(materialName, quantity);
  return steps;
}