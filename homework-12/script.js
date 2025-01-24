// Elements
const figureContainer = document.getElementById("figure-container");
const circleBtn = document.getElementById("circle-btn");
const squareBtn = document.getElementById("square-btn");
const clearBtn = document.getElementById("clear-btn"); // Новая кнопка
const colorButtons = document.querySelectorAll(".color-btn");
const textInput = document.getElementById("text-input");
const addTextBtn = document.getElementById("add-text-btn");
const warningMessage = document.createElement("div"); // Для предупреждений

// Variables
let currentFigure = null;

// Functions
function createFigure(shape) {
  // Clear existing figure
  figureContainer.innerHTML = ""; // Очищаем контейнер
  warningMessage.textContent = ""; // Убираем предупреждение

  // Create new figure
  const figure = document.createElement("div");
  figure.classList.add("figure", shape); // Добавляем классы
  figureContainer.appendChild(figure); // Добавляем фигуру в контейнер

  currentFigure = figure; // Сохраняем ссылку на текущую фигуру
}

function changeColor(color) {
  if (currentFigure) {
    currentFigure.style.backgroundColor = color; // Меняем цвет фигуры
  } else {
    showWarning("Please select a figure before changing the color!");
  }
}

function addText(text) {
  if (!currentFigure) {
    showWarning("Please select a figure before adding text!");
    return;
  }

  if (!text.trim()) {
    showWarning("Please enter some text before adding it!");
    return;
  }

  currentFigure.textContent = text; // Добавляем текст внутрь фигуры
  warningMessage.textContent = ""; // Убираем предупреждение после успешного добавления текста
}

function clearFigure() {
  if (currentFigure) {
    figureContainer.innerHTML = ""; // Удаляем фигуру
    currentFigure = null; // Сбрасываем текущую фигуру
    warningMessage.textContent = ""; // Убираем предупреждение
  }
}

function showWarning(message) {
  warningMessage.textContent = message;
  warningMessage.style.color = "red";
  warningMessage.style.marginTop = "10px";
  warningMessage.style.textAlign = "center";
  document.body.appendChild(warningMessage);
}

// Event Listeners
circleBtn.addEventListener("click", () => createFigure("circle"));
squareBtn.addEventListener("click", () => createFigure("square"));
clearBtn.addEventListener("click", clearFigure); // Новый обработчик

colorButtons.forEach(button => {
  button.addEventListener("click", () => {
    const color = button.getAttribute("data-color");
    changeColor(color);
  });
});

addTextBtn.addEventListener("click", () => {
  const text = textInput.value;
  addText(text);
  textInput.value = ""; // Очищаем поле ввода
});
