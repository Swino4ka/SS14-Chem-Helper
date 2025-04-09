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
  "Дезоксиэфедрин": { "Эфедрин": 0.25, "Углерод": 0.25, "Йод": 0.25, "Фосфор": 0.25 },
  "Дексалин": { "Кислород": 0.66667, "Плазма": 0.33333 },
  "Дексалин Плюс": { "Дексалин": 0.33333, "Углерод": 0.33333, "Железо": 0.33333 },
  "Дермалин": { "Келотан": 0.33333, "Кислород": 0.33333, "Фосфор": 0.33333 },
  "Диловен": { "Кремний": 0.33333, "Азот": 0.33333, "Калий": 0.33333 },
  "Дифенгидрамин": { "Диэтиламин": 0.33333, "Масло": 0.33333, "Соль": 0.33333, "Углерод": 0.33333, "Этанол": 0.33333 },
  "Дифенилметиламин": { "Этилоксиэфедрин": 0.33333, "Карбонат Натрия": 0.33333, "Кофе": 0.33333 },
  "Диэтиламин": { "Аммиак": 0.5, "Этанол": 0.5 },
  "Доксарубиксадон": { "Криоксадон": 0.5, "Нестабильный Мутаген": 0.5 },
  "Импедрезен": { "Ртуть": 1, "Кислород": 1, "Вода": 1 },
  "Инапровалин": { "Кислород": 0.33333, "Углерод": 0.33333, "Сахар": 0.33333 },
  "Инсузин": { "Лепоразин": 0.33333, "Келотан": 0.33333, "Кремний": 0.33333 },
  "Ипекак": { "Калий": 0.5, "Азот": 0.5, "Аммиак": 0.5 },
  "Карбонат Натрия": { "Аммиак": 0.25, "Соль": 0.25, "Углерод": 0.25, "Кислород": 0.25 },
  "Келотан": { "Кремний": 0.5, "Углерод": 0.5 },
  "Когнизин": { "Карпотоксин": 1, "Сидерлак": 1, "Ацетон": 1 },
  "Космические Наркотики": { "Ртуть": 0.33333, "Сахар": 0.33333, "Литий": 0.33333 },
  "Криоксадон": { "Дексалин": 0.33333, "Вода": 0.33333, "Кислород": 0.33333 },
  "Криптобиолин": { "Калий": 0.33333, "Кислород": 0.33333, "Сахар": 0.33333 },
  "Лацеринол": { "Бикаридин": 0.5, "Бензол": 0.5 },
  "Лексорин": { "Токсин Хартбрейкер": 0.5, "Плазма": 0.5, "Вестин": 0.5 },
  "Лепозин": { "Соль": 0.33333, "Этанол": 0.33333, "Радиум": 0.33333 },
  "Лепоразин": { "Медь": 0.5, "Силицид Железа": 0.5, "Плазма": 0.5 },
  "Липолицид": { "Эфедрин": 0.33333, "Диэтиламин": 0.33333, "Ртуть": 0.33333 },
  "Маннитол": { "Водород": 0.33333, "Вода": 0.33333, "Сахар": 0.33333 },
  "Некросол": { "Кровь": 1.5, "Омнизин": 0.5, "Криоксадон": 1 },
  "Натрий": { "Соль": 2 },
  "Нестабильный Мутаген": { "Радий": 0.33333, "Фосфор": 0.33333, "Хлор": 0.33333 },
  "Масло": { "Сварочное Топливо": 0.33333, "Водород": 0.33333, "Углерод": 0.33333 },
  "Ноктюрин": { "Импедрезен": 2, "Вестин": 1 },
  "Норэпинефриновая Кислота": { "Уран": 0.5, "Эпинефрин": 0.5 },
  "Окулин": { "Соль": 0.25, "Кровь": 0.25, "Гидроксид": 0.5 },
  "Оппорозидон": { "Когнизин": 0.33333, "Плазма": 0.66667, "Доксарубиксадон": 0.33333 },
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
  "Физраствор": { "Вода": 0.8, "Соль": 0.2 },
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
  "Хлоральгидрат": { "Хлор": 3, "Этанол": 1, "Вода": 1 },
  "Эпинефрин": { "Фенол": 0.25, "Ацетон": 0.25, "Хлор": 0.25, "Гидроксид": 0.25 },
  "Этилоксиэфедрин": { "Дезоксиэфедрин": 0.5, "Стеллибинин": 0.5 },
  "Эфедрин": { "Масло": 0.25, "Водород": 0.25, "Сахар": 0.25, "Диэтиламин": 0.25 }
};

const productionItems = [];

const materialInput = document.getElementById('material');
const materialsListElem = document.getElementById('materialsList');
const productionListElem = document.getElementById('productionList');
const reagentsListElem = document.getElementById('reagentsList');
const baseReagentsListElem = document.getElementById('baseReagentsList');
const detailedListElem = document.getElementById('detailedList');


function populateMaterialsList() {
  materialsListElem.innerHTML = '';
  const sortedMaterials = Object.keys(materials).sort();
  
  for (let material of sortedMaterials) {
    const option = document.createElement('option');
    option.value = material;
    materialsListElem.appendChild(option);
  }
}


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
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      removeItem(index);
    });
    
    li.appendChild(deleteBtn);
    productionListElem.appendChild(li);
  });
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
  

  const guideHelp = document.createElement('div');
  guideHelp.classList.add('guide-help');
  guideHelp.innerHTML = `
    <p>Как использовать пошаговый гайд:</p>
    <ol>
      <li>Начните с первого шага (верхнего).</li>
      <li>Для каждого шага: сначала соберите все ингредиенты из списка, затем смешайте их для получения продукта.</li>
      <li>Переходите к следующему шагу, используя компоненты, полученные на предыдущих шагах.</li>
    </ol>
  `;
  detailedListElem.appendChild(guideHelp);
  
  productionItems.forEach(item => {
    const header = document.createElement('h3');
    header.textContent = `Пошаговый гайд: ${item.name}`; 
    detailedListElem.appendChild(header);
    

    const craftingSteps = generateCraftingSteps(item.name, item.quantity);
    

    const stepsContainer = document.createElement('div');
    stepsContainer.classList.add('crafting-steps');
    

    craftingSteps.forEach((step, index) => {
      const stepElement = document.createElement('div');
      stepElement.classList.add('crafting-step');
      
      const stepNumber = document.createElement('div');
      stepNumber.classList.add('step-number');
      stepNumber.textContent = index + 1 + '.';
      
      const stepContent = document.createElement('div');
      stepContent.classList.add('step-content');
      

      const stepTitle = document.createElement('div');
      stepTitle.classList.add('step-title');
      stepTitle.textContent = `${step.product} ${Math.round(step.quantity)}u`;
      stepContent.appendChild(stepTitle);
      

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


function generateCraftingSteps(materialName, quantity) {

  const steps = [];

  const addedMaterials = new Map();
  

  function processMaterialHierarchy(name, amount, depth = 0) {
    if (!materials.hasOwnProperty(name)) {
      return;
    }
    

    const composition = materials[name];
    

    for (let ingredient in composition) {
      const ingredientAmount = amount * composition[ingredient];
      
      if (materials.hasOwnProperty(ingredient)) {
        processMaterialHierarchy(ingredient, ingredientAmount, depth + 1);
      }
    }
    

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
      const currentAmount = addedMaterials.get(name);
      if (amount > currentAmount) {
        const stepIndex = steps.findIndex(step => step.product === name);
        if (stepIndex !== -1) {
          const step = steps[stepIndex];
          step.quantity = amount;
          
          for (let ingredient in materials[name]) {
            step.ingredients[ingredient] = amount * materials[name][ingredient];
          }
        }
        addedMaterials.set(name, amount);
      }
    }
  }
  
  processMaterialHierarchy(materialName, quantity);
  
  return steps;
}

function addMaterial() {
  const quantityInput = document.getElementById('quantity');
  const quantity = parseFloat(quantityInput.value);
  const materialName = materialInput.value.trim();

  if (!quantity || quantity <= 0) {
    alert("Введите корректное количество.");
    return;
  }

  if (!isMaterialValid(materialName)) {
    alert(`Материал "${materialName}" не найден. Пожалуйста, выберите материал из списка.`);
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


document.addEventListener('DOMContentLoaded', () => {
  populateMaterialsList();
  updateProductionList();
  updateReagentsList();
  updateBaseReagentsList();
  updateDetailedList();
  
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