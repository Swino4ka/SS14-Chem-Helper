import { state } from './state.js';

export function displayName(materialName) {
  return state.translations[materialName] || materialName;
}

export function displayLabel(materialName) {
  const category = state.materialCategories[materialName];
  return category ? `${displayName(materialName)} (${category})` : displayName(materialName);
}

export function appendMaterialLabel(element, materialName) {
  element.appendChild(document.createTextNode(displayName(materialName)));
  const category = state.materialCategories[materialName];
  if (!category) return;
  const categoryElement = document.createElement('span');
  categoryElement.className = 'material-category';
  categoryElement.textContent = ` (${category})`;
  element.appendChild(categoryElement);
}

export function t(key) {
  return state.uiTranslations[key] || key;
}

export function applyLanguage() {
  document.documentElement.lang = state.currentLanguage === 'en' ? 'en' : 'ru';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.getElementById('languageSelect').value = state.currentLanguage;
  document.getElementById('languageSelect').setAttribute('aria-label', t('languageSelect'));
  document.getElementById('themeToggle').title = t('themeToggle');
}