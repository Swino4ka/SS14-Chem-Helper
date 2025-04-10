// Словарь материалов
const materials = {
  "Алоксадон": { "Криоксадон": 0.25, "Алое": 0.5, "Сигинат": 0.5 },
  "Амбузол": { "Диловен": 0.25, "Аммиак": 0.25, "Кровь Зомби": 0.5 },
  "Амбузол Плюс": { "Амбузол": 0.5, "Омнизин": 0.5 },
  "Аммиак": { "Водород": 0.75, "Азот": 0.25 },
  "Аритразин": { "Хироналин": 0.5, "Водород": 0.5 },
  "Ацетон": { "Масло": 0.5, "Сварочное Топливо": 0.5, "Кислород": 0.5 },
  "Бензол": { "Водород": 1, "Углерод": 1 },
  "Бикаридин": { "Инапровалин": 0.5, "Углерод": 0.5 },
  "Бритвиум": { "Лацеринол": 1, "Бикаридин": 1 },
  "Бруизин": { "Бикаридин": 0.5, "Литий": 0.45, "Сахар": 0.5 },
  "Вестин": { "Плазма": 0.5 },
  "Галоперидол": { "Алюминий": 0.2, "Хлор": 0.2, "Фтор": 0.2, "Сварочное Топливо": 0.2, "Йодид Калия": 0.2 },
  "Гидроксид": { "Кислород": 0.5, "Водород": 0.5 },
  "Гидроксид Натрия": { "Гидроксид": 0.5, "Натрий": 0.5 },
  "Гиперзин": { "Вестин": 0.5, "Эфедрин": 0.5, "Кислород": 1 },
  "Дезоксиэфедрин": { "Эфедрин": 0.25, "Углерод": 0.25, "Йод": 0.25, "Фосфор": 0.25 },
  "Дексалин": { "Кислород": 0.66667, "Плазма": 0.33333 },
  "Дексалин Плюс": { "Дексалин": 0.33333, "Углерод": 0.33333, "Железо": 0.33333 },
  "Дермалин": { "Келотан": 0.33333, "Кислород": 0.33333, "Фосфор": 0.33333 },
  "Диловен": { "Кремний": 0.33333, "Азот": 0.33333, "Калий": 0.33333 },
  "Дифенгидрамин": { "Диэтиламин": 0.33333, "Масло": 0.33333, "Столовая Соль": 0.33333, "Углерод": 0.33333, "Этанол": 0.33333 },
  "Дифенилметиламин": { "Этилоксиэфедрин": 0.33333, "Карбонат Натрия": 0.33333, "Кофе": 0.33333 },
  "Диэтиламин": { "Аммиак": 0.5, "Этанол": 0.5 },
  "Доксарубиксадон": { "Криоксадон": 0.5, "Нестабильный Мутаген": 0.5 },
  "Импедрезен": { "Ртуть": 1, "Кислород": 1, "Вода": 1 },
  "Инапровалин": { "Кислород": 0.33333, "Углерод": 0.33333, "Сахар": 0.33333 },
  "Инсузин": { "Лепоразин": 0.33333, "Келотан": 0.33333, "Кремний": 0.33333 },
  "Ипекак": { "Калий": 0.5, "Азот": 0.5, "Аммиак": 0.5 },
  "Карбонат Натрия": { "Аммиак": 0.25, "Столовая Соль": 0.25, "Углерод": 0.25, "Кислород": 0.25 },
  "Келотан": { "Кремний": 0.5, "Углерод": 0.5 },
  "Когнизин": { "Карпотоксин": 1, "Сидерлак": 1, "Ацетон": 1 },
  "Космические Наркотики": { "Ртуть": 0.33333, "Сахар": 0.33333, "Литий": 0.33333 },
  "Криоксадон": { "Дексалин": 0.33333, "Вода": 0.33333, "Кислород": 0.33333 },
  "Криптобиолин": { "Калий": 0.33333, "Кислород": 0.33333, "Сахар": 0.33333 },
  "Лацеринол": { "Бикаридин": 0.5, "Бензол": 0.5 },
  "Лексорин": { "Токсин Хартбрейкер": 0.5, "Плазма": 0.5, "Вестин": 0.5 },
  "Лепозин": { "Столовая Соль": 0.33333, "Этанол": 0.33333, "Радиум": 0.33333 },
  "Лепоразин": { "Медь": 0.5, "Силицид Железа": 0.5, "Плазма": 0.5 },
  "Липолицид": { "Эфедрин": 0.33333, "Диэтиламин": 0.33333, "Ртуть": 0.33333 },
  "Маннитол": { "Водород": 0.33333, "Вода": 0.33333, "Сахар": 0.33333 },
  "Некросол": { "Кровь": 1.5, "Омнизин": 0.5, "Криоксадон": 1 },
  "Нестабильный Мутаген": { "Радий": 0.33333, "Фосфор": 0.33333, "Хлор": 0.33333 },
  "Масло": { "Сварочное Топливо": 0.33333, "Водород": 0.33333, "Углерод": 0.33333 },
  "Ноктюрин": { "Импедрезен": 2, "Вестин": 1 },
  "Норэпинефриновая Кислота": { "Уран": 0.5, "Эпинефрин": 0.5 },
  "Окулин": { "Столовая Соль": 0.25, "Кровь": 0.25, "Гидроксид": 0.5 },
  "Оппорозидон": { "Когнизин": 0.33333, "Плазма": 0.66667, "Доксарубиксадон": 0.33333 },
  "Отбеливатель": { "Гидроксид Натрия": 0.2, "Космический Очиститель": 0.4, "Столовая Соль": 0.4 },
  "Пакс": { "Токсин Майндбрейкер": 0.33333, "Синаптизин": 0.33333, "Вода": 0.33333 },
  "Пенообразователь": { "Литий": 0.5, "Водород": 0.5 },
  "Пиразин": { "Лепоразин": 0.33333, "Дермалин": 0.33333, "Углерод": 0.33333 },
  "Пунктураз": { "Бикаридин": 0.5, "Гидроксид": 0.5 },
  "Псикодин": { "Маннитол": 0.5, "Импедрезен": 0.25, "Вода": 0.5 },
  "Поликарбонат Натрия": { "Кислород": 0.5, "Натрий": 0.25, "Азот": 0.25 },
  "Политриниковая Кислота": { "Серная Кислота": 0.33333, "Плазма": 0.33333, "Калий": 0.33333 },
  "Серная Кислота": { "Водород": 0.33333, "Сера": 0.33333, "Кислород": 0.66667 },
  "Сидерлак": { "Алое": 0.5, "Стеллибинин": 0.5 },
  "Сигинат": { "Карбонат Натрия": 0.25, "Гидроксид Натрия": 0.25, "Келотан": 0.25, "Вода": 0.25, "Сахар": 0.25 },
  "Синаптизин": { "Литий": 0.33333, "Сахар": 0.33333, "Вода": 0.33333 },
  "Силицид Железа": { "Железо": 0.5, "Кремний": 0.5 },
  "Столовая Соль": { "Натрий": 1, "Хлор": 1 },
  "Физраствор": { "Вода": 0.8, "Столовая Соль": 0.2 },
  "Счастье": { "Смех": 0.5, "Эпинефрин": 0.25, "Этанол": 0.25, "Плазма": 1.25 },
  "Стимуляторы": { "Эфедрин": 0.5, "Вестин": 0.5, "Кислород": 1 },
  "Тазинид": { "Ликоксид": 1, "Вестин": 1 },
  "Термит": { "Железо": 0.33333, "Алюминий": 0.33333, "Кислород": 0.33333 },
  "Токсин Немоты": { "Уран": 0.5, "Вестин": 1, "Космический Клей": 1 },
  "Токсин Майндбрейкер": { "Кремний": 0.33333, "Водород": 0.33333, "Диловен": 0.33333 },
  "Токсин Хартбрейкер": { "Дексалин Плюс": 0.5, "Токсин Майндбрейкер": 0.5 },
  "Транексамовая Кислота": { "Инапровалин": 0.33333, "Серная Кислота": 0.33333, "Сахар": 0.33333 },
  "Трикордразин": { "Инапровалин": 0.5, "Диловен": 0.5 },
  "Уголь": { "Углерод": 1, "Зола": 1 },
  "Ультраваскулярин": { "Гистамин": 1, "Плазма": 0.5 },
  "Фенол": { "Гидроксид": 0.5, "Бензол": 0.5 },
  "Фторосерная Кислота": { "Фтор": 0.25, "Водород": 0.25, "Калий": 0.25, "Серная Кислота": 0.25 },
  "Фторсурфактант": { "Углерод": 0.4, "Фтор": 0.4, "Серная Кислота": 0.2 },
  "Хироналин": { "Диловен": 0.5, "Радий": 0.5 },
  "Хлоральгидрат": { "Хлор": 3, "Этанол": 1, "Вода": 1 },
  "Эпинефрин": { "Фенол": 0.25, "Ацетон": 0.25, "Хлор": 0.25, "Гидроксид": 0.25 },
  "Этилоксиэфедрин": { "Дезоксиэфедрин": 0.5, "Стеллибинин": 0.5 },
  "Эфедрин": { "Масло": 0.25, "Водород": 0.25, "Сахар": 0.25, "Диэтиламин": 0.25 }
};

const reactionTemps = {
  "Сигинат": 370,
  "Инсузин": 433,
  "Пиразин": 540,
  "Дифенгидрамин": 377.59,
  "Некросол": 370,
  "Оппорозидон": 400,
  "Пунктураз": 325,
  "Лацеринол": 335,
  "Импедрезен": 370,
  "Гиперзин": 370,
  "Токсин Немоты": 370,
  "Дезоксиэфедрин": 370,
  "Токсин Майндбрейкер": 370,
  "Столовая Соль": 370,
  "Бензол": 310,
  "Силицид Железа": 310,
  "Гидроксид": 310
};

const productionItems = [];

// Добавляем массив для хранения избранных рецептов
const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
const materialInput = document.getElementById('material');
const materialsListElem = document.getElementById('materialsList');
const productionListElem = document.getElementById('productionList');
const reagentsListElem = document.getElementById('reagentsList');
const baseReagentsListElem = document.getElementById('baseReagentsList');
const detailedListElem = document.getElementById('detailedList');
const favoritesListElem = document.getElementById('favoritesList');

// Заполняем datalist опциями для поиска материалов
function populateMaterialsList() {
  materialsListElem.innerHTML = '';
  const sortedMaterials = Object.keys(materials).sort();
  
  for (let material of sortedMaterials) {
    const option = document.createElement('option');
    option.value = material;
    materialsListElem.appendChild(option);
  }
}

// Проверка валидности выбранного материала
function isMaterialValid(materialName) {
  return materials.hasOwnProperty(materialName);
}

function updateProductionList() {
  productionListElem.innerHTML = "";
  
  if (productionItems.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = "Список пуст. Добавьте материалы для расчета.";
    emptyMessage.classList.add('empty-message');
    productionListElem.appendChild(emptyMessage);
    return;
  }
  
  productionItems.forEach((item, index) => {
    const li = document.createElement('li');
    
    const itemText = document.createElement('span');
    itemText.textContent = `${item.quantity} u ${item.name}`;
    li.appendChild(itemText);
    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('item-buttons');
    
    const favBtn = document.createElement('button');
    favBtn.textContent = '★';
    favBtn.title = 'Добавить в избранное';
    favBtn.classList.add('fav-btn');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Предотвращаем всплытие события
      addToFavorites(item.name, item.quantity);
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Предотвращаем всплытие события
      removeItem(index);
    });
    
    buttonsContainer.appendChild(favBtn);
    buttonsContainer.appendChild(deleteBtn);
    li.appendChild(buttonsContainer);
    productionListElem.appendChild(li);
  });
}

// Функция для добавления рецепта в избранное
function addToFavorites(name, quantity) {
  const exists = favoriteItems.some(item => item.name === name && item.quantity === quantity);
  if (!exists) {
    favoriteItems.push({ name, quantity });
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    updateFavoritesList();
  }
}

// Функция для удаления рецепта из избранного
function removeFromFavorites(index) {
  const item = favoriteItems[index];
  favoriteItems.splice(index, 1);
  localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  updateFavoritesList();
}

// Функция для обновления списка избранного
function updateFavoritesList() {
  favoritesListElem.innerHTML = "";
  
  if (favoriteItems.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = "Список избранного пуст. Добавьте часто используемые рецепты.";
    emptyMessage.classList.add('empty-message');
    favoritesListElem.appendChild(emptyMessage);
    return;
  }
  
  favoriteItems.forEach((item, index) => {
    const li = document.createElement('li');
    
    const itemText = document.createElement('span');
    itemText.textContent = `${item.quantity} u ${item.name}`;
    li.appendChild(itemText);
    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('fav-buttons');
    
    const useBtn = document.createElement('button');
    useBtn.textContent = 'Использовать';
    useBtn.classList.add('use-btn');
    useBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Предотвращаем всплытие события
      addItemToProduction(item.name, item.quantity);
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Предотвращаем всплытие события
      removeFromFavorites(index);
    });
    
    buttonsContainer.appendChild(useBtn);
    buttonsContainer.appendChild(deleteBtn);
    li.appendChild(buttonsContainer);
    favoritesListElem.appendChild(li);
  });
}

// Функция для добавления избранного рецепта в список производства
function addItemToProduction(name, quantity) {
  productionItems.push({
    name: name,
    quantity: quantity
  });

  updateProductionList();
  updateReagentsList();
  updateBaseReagentsList();
  updateDetailedList();
}

function removeItem(index) {
  productionItems.splice(index, 1);
  updateProductionList();
  updateReagentsList();
  updateBaseReagentsList();
  updateDetailedList();
}

function updateReagentsList() {
  const reagentsTotal = {};
    
  productionItems.forEach(item => {
    const composition = materials[item.name];
    for (let reagent in composition) {
      const amount = Math.round(item.quantity * composition[reagent]);
      reagentsTotal[reagent] = (reagentsTotal[reagent] || 0) + amount;
    }
  });
  
  reagentsListElem.innerHTML = "";
  
  if (Object.keys(reagentsTotal).length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = "Добавьте материалы для расчета необходимых реагентов.";
    emptyMessage.classList.add('empty-message');
    reagentsListElem.appendChild(emptyMessage);
    return;
  }
  
  // Сортируем реагенты по алфавиту
  const sortedReagents = Object.keys(reagentsTotal).sort();
  
  for (let reagent of sortedReagents) {
    const li = document.createElement('li');
    li.textContent = `${reagentsTotal[reagent]} u ${reagent}`;
    reagentsListElem.appendChild(li);
  }
}

function getBaseReagents(materialName, quantity) {
  if (!materials.hasOwnProperty(materialName)) {
    return { [materialName]: quantity };
  }
  
  const composition = materials[materialName];
  let result = {};
  
  for (let reagent in composition) {
    const reagentQuantity = quantity * composition[reagent];
    if (materials.hasOwnProperty(reagent)) {
      const subReagents = getBaseReagents(reagent, reagentQuantity);
      for (let sub in subReagents) {
        result[sub] = (result[sub] || 0) + subReagents[sub];
      }
    } else {
      result[reagent] = (result[reagent] || 0) + reagentQuantity;
    }
  }
  
  return result;
}

function updateBaseReagentsList() {
  const baseTotal = {};
  
  productionItems.forEach(item => {
    const baseForItem = getBaseReagents(item.name, item.quantity);
    for (let reagent in baseForItem) {
      const amount = Math.round(baseForItem[reagent]);
      baseTotal[reagent] = (baseTotal[reagent] || 0) + amount;
    }
  });
  
  baseReagentsListElem.innerHTML = "";
  
  if (Object.keys(baseTotal).length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = "Добавьте материалы для расчета базовых реагентов.";
    emptyMessage.classList.add('empty-message');
    baseReagentsListElem.appendChild(emptyMessage);
    return;
  }
  
  // Сортируем базовые реагенты по алфавиту
  const sortedBaseReagents = Object.keys(baseTotal).sort();
  
  for (let reagent of sortedBaseReagents) {
    const li = document.createElement('li');
    li.textContent = `${baseTotal[reagent]} u ${reagent}`;
    baseReagentsListElem.appendChild(li);
  }
}

function updateDetailedList() {
  detailedListElem.innerHTML = "";
  
  if (productionItems.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = "Добавьте материалы для отображения подробного состава.";
    emptyMessage.classList.add('empty-message');
    detailedListElem.appendChild(emptyMessage);
    return;
  }
  
  // Реверсируем массив, чтобы новые элементы были сверху
  const reversedItems = [...productionItems].reverse();
  
  reversedItems.forEach(item => {
    const header = document.createElement('h3');
    header.textContent = `Пошаговый гайд: ${item.name}`; 
    detailedListElem.appendChild(header);
    
    // Получаем шаги для изготовления препарата
    const craftingSteps = generateCraftingSteps(item.name, item.quantity);
    
    // Создаём контейнер для шагов
    const stepsContainer = document.createElement('div');
    stepsContainer.classList.add('crafting-steps');
    
    // Добавляем шаги в правильном порядке (от базовых к сложным)
    craftingSteps.forEach((step, index) => {
      const stepElement = document.createElement('div');
      stepElement.classList.add('crafting-step');
      
      const stepNumber = document.createElement('div');
      stepNumber.classList.add('step-number');
      stepNumber.textContent = index + 1 + '.';
      
      const stepContent = document.createElement('div');
      stepContent.classList.add('step-content');
      
      // Добавляем название основного продукта в шаге
      const stepTitle = document.createElement('div');
      stepTitle.classList.add('step-title');
      
      // Проверяем, нужна ли для этого шага особая температура
      if (reactionTemps[step.product]) {
        stepTitle.innerHTML = `${step.product} ${Math.round(step.quantity)}u <span class="temp-req">🔥 ${reactionTemps[step.product]}K</span>`;
      } else {
        stepTitle.textContent = `${step.product} ${Math.round(step.quantity)}u`;
      }
      
      stepContent.appendChild(stepTitle);
      
      // Добавляем ингредиенты для этого шага
      if (step.ingredients && Object.keys(step.ingredients).length > 0) {
        const ingredientsList = document.createElement('ul');
        ingredientsList.classList.add('step-ingredients');
        
        const sortedIngredients = Object.keys(step.ingredients).sort();
        
        for (let ingredient of sortedIngredients) {
          const ingredientItem = document.createElement('li');
          ingredientItem.textContent = `${ingredient} ${Math.round(step.ingredients[ingredient])}u`;
          ingredientsList.appendChild(ingredientItem);
        }
        
        stepContent.appendChild(ingredientsList);
      }
      
      stepElement.appendChild(stepNumber);
      stepElement.appendChild(stepContent);
      stepsContainer.appendChild(stepElement);
    });
    
    detailedListElem.appendChild(stepsContainer);
  });
}

// Функция для генерации шагов по изготовлению препарата
function generateCraftingSteps(materialName, quantity) {
  // Результирующий массив шагов
  const steps = [];
  // Объект для отслеживания уже добавленных шагов
  const addedMaterials = new Map();
  
  // Функция для сортировки материалов в правильном порядке
  function processMaterialHierarchy(name, amount, depth = 0) {
    if (!materials.hasOwnProperty(name)) {
      return;
    }
    
    // Для каждого составного материала сначала обрабатываем его компоненты
    const composition = materials[name];
    
    // Обрабатываем компоненты
    for (let ingredient in composition) {
      const ingredientAmount = amount * composition[ingredient];
      
      if (materials.hasOwnProperty(ingredient)) {
        processMaterialHierarchy(ingredient, ingredientAmount, depth + 1);
      }
    }
    
    // Добавляем сам материал с его ингредиентами
    if (!addedMaterials.has(name)) {
      addedMaterials.set(name, amount);
      
      const step = {
        product: name,
        quantity: amount,
        ingredients: {}
      };
      
      for (let ingredient in composition) {
        step.ingredients[ingredient] = amount * composition[ingredient];
      }
      
      steps.push(step);
    } else {
      // Если материал уже был добавлен, обновляем его количество
      const currentAmount = addedMaterials.get(name);
      if (amount > currentAmount) {
        // Находим его шаг и обновляем количество и ингредиенты
        const stepIndex = steps.findIndex(step => step.product === name);
        if (stepIndex !== -1) {
          const step = steps[stepIndex];
          step.quantity = amount;
          
          // Обновляем также количество ингредиентов
          for (let ingredient in materials[name]) {
            step.ingredients[ingredient] = amount * materials[name][ingredient];
          }
        }
        addedMaterials.set(name, amount);
      }
    }
  }
  
  // Запускаем процесс для основного материала
  processMaterialHierarchy(materialName, quantity);
  
  return steps;
}

function addMaterial() {
  const quantityInput = document.getElementById('quantity');
  const quantity = parseFloat(quantityInput.value);
  const materialName = materialInput.value.trim();

  if (!quantity || quantity <= 0) {
    return;
  }

  if (!isMaterialValid(materialName)) {
    return;
  }

  productionItems.push({
    name: materialName,
    quantity: quantity
  });

  updateProductionList();
  updateReagentsList();
  updateBaseReagentsList();
  updateDetailedList();

  quantityInput.value = "";
  materialInput.value = "";
  quantityInput.focus();
}

// Функция переключения темы
function toggleTheme() {
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

// Инициализация темы при загрузке
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    document.getElementById('themeToggle').textContent = '🌙';
  } else {
    document.getElementById('themeToggle').textContent = '☀️';
  }
}

// Инициализация и обработчики событий
document.addEventListener('DOMContentLoaded', () => {
initTheme();

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

populateMaterialsList();
updateProductionList();
updateReagentsList();
updateBaseReagentsList();
updateDetailedList();
updateFavoritesList();

document.getElementById('addBtn').addEventListener('click', addMaterial);

materialInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addMaterial();
  }
});

document.getElementById('quantity').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (materialInput.value) {
        addMaterial();
      } else {
        materialInput.focus();
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  generateParticles(80);
});

function generateParticles(count) {
  for(let i=0; i<count; i++){
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random()*100 + 'vw';
    p.style.animationDuration = (Math.random()*5+5)+'s';
    p.style.animationDelay = -(Math.random()*10)+'s';
    document.body.appendChild(p);
  }
}

document.addEventListener("click", (e)=>{
  const ripple=document.createElement("div");
  ripple.className="ripple";
  ripple.style.left=e.clientX+"px";
  ripple.style.top=e.clientY+"px";
  document.body.appendChild(ripple);
  setTimeout(()=>ripple.remove(),1000);
});
