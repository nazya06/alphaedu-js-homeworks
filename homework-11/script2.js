//----------------------- Part 2 ----------------------


// Задание 1
const infoSection = document.getElementById("info");
const ulElement = document.createElement("ul");

const listItems = [
  "Введение в DOM",
  "Создание элементов",
  "Изменение атрибутов"
];

listItems.forEach(text => {
  const liElement = document.createElement("li"); 
  liElement.textContent = text;                   
  ulElement.appendChild(liElement);               
});

infoSection.appendChild(ulElement);

// Задание 2
const header = document.querySelector("#header");
const socialLink = document.createElement("a");
socialLink.textContent = "Мой профиль в Linkedin";
socialLink.href = "https://linkedin.com/nazerke'); // Set the href attribut";
socialLink.target = "_blank"; 

header.appendChild(socialLink);


// Задание 3
const mainElement = document.getElementById("main");

const sectionElement = document.createElement("section");
sectionElement.classList.add("dynamic");

const h2Element = document.createElement("h2");
h2Element.textContent = "Обучение JavaScript";

const pElement = document.createElement("p");
pElement.textContent = "Динамическое создание элементов позволяет улучшить интерфейс пользователя";

sectionElement.appendChild(h2Element);
sectionElement.appendChild(pElement);

mainElement.prepend(sectionElement);


// Задание 4
const firstParagraph = infoSection.querySelector('p');

infoSection.removeChild(firstParagraph);


// Задание 5
const footer = document.querySelector('footer');
footer.innerHTML = '';
