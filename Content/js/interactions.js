import { state } from './state.js';
import { t, applyLanguage } from './i18n.js';
import { loadReactions } from './data.js';
import {
  addItemToProduction, populateMaterialsList, updateProductionList,
  updateReagentsList, updateBaseReagentsList, updateDetailedList, updateFavoritesList,
  isMaterialValid
} from './calculations.js';

export function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.classList.add('show'), 100);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function highlightError(element) {
  element.classList.add('error-highlight');
  setTimeout(() => element.classList.remove('error-highlight'), 3000);
}

export function addMaterial() {
  const materialInput = document.getElementById('material').value.trim();
  const quantity = parseFloat(document.getElementById('quantity').value);
  if (!materialInput) {
    const input = document.getElementById('material');
    highlightError(input);
    showNotification(t('inputMaterial'));
    return;
  }
  if (isNaN(quantity) || quantity <= 0) {
    const input = document.getElementById('quantity');
    highlightError(input);
    showNotification(t('inputQuantity'));
    return;
  }
  localStorage.setItem('lastQuantity', quantity);
  const materialName = Object.keys(state.materials).find(name =>
    name.toLowerCase() === materialInput.toLowerCase() ||
    (state.translations[name] || name).toLowerCase() === materialInput.toLowerCase()
  );
  if (!materialName || !isMaterialValid(materialName)) {
    const input = document.getElementById('material');
    highlightError(input);
    showNotification(t('materialNotFound'));
    return;
  }
  addItemToProduction(materialName, quantity);
  document.getElementById('material').value = '';
  document.getElementById('material').focus();
}

export function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
    document.getElementById('themeToggle').textContent = '☀️';
  } else {
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
    document.getElementById('themeToggle').textContent = '🌙';
  }
}

export function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    document.getElementById('themeToggle').textContent = '🌙';
  } else {
    document.getElementById('themeToggle').textContent = '☀️';
  }
}

function refreshAllViews() {
  populateMaterialsList();
  updateProductionList();
  updateReagentsList();
  updateBaseReagentsList();
  updateDetailedList();
  updateFavoritesList();
}

export function initInteractions() {
  initTheme();
  document.getElementById('languageSelect').value = state.currentLanguage;
  document.getElementById('languageSelect').addEventListener('change', async event => {
    state.currentLanguage = event.target.value;
    localStorage.setItem('language', state.currentLanguage);
    try {
      await loadReactions();
      refreshAllViews();
    } catch (error) {
      console.error('ChemHelper language loading failed:', error);
    }
  });
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  const lastQuantity = localStorage.getItem('lastQuantity');
  if (lastQuantity) document.getElementById('quantity').value = lastQuantity;
  updateProductionList();
  updateFavoritesList();
  loadReactions().then(refreshAllViews).catch(error => {
    console.error('ChemHelper data loading failed:', error);
    showNotification(t('loadError'));
  });
  document.getElementById('addBtn').addEventListener('click', addMaterial);
  document.getElementById('material').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addMaterial();
    }
  });
  document.getElementById('quantity').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (document.getElementById('material').value) addMaterial();
      else document.getElementById('material').focus();
    }
  });
}