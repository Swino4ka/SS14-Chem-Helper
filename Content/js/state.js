export const state = {
  materials: {},
  reactionTemps: {},
  translations: {},
  uiTranslations: {},
  craftingExceptions: new Set(),
  currentLanguage: localStorage.getItem('language') || 'en',
  productionItems: [],
  favoriteItems: JSON.parse(localStorage.getItem('favoriteItems')) || []
};

export const reactionFiles = [
  'biological.yml', 'botany.yml', 'chemicals.yml', 'cleaning.yml',
  'drinks.yml', 'food.yml', 'fun.yml', 'gas.yml', 'medicine.yml',
  'pyrotechnic.yml', 'single_reagent.yml', 'corvaxDrinks.yml'
];