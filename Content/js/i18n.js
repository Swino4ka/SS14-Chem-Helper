import { state } from './state.js';

export function displayName(materialName) {
  return state.translations[materialName] || materialName;
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