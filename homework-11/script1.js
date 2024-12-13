//----------------------- Part 1 ----------------------

// Задание 1
document.title = "Nazerke Akimzhan";

// Задание 2
const header = document.getElementById("header");
const h1 = header.querySelector("h1");
h1.textContent = "Изучение JavaScript";

// Задание 3
const menuLinks = document.querySelectorAll(".menu-link");
menuLinks.forEach(link => {
    console.log(link.textContent);
  });

// Задание 4
const parent = document.querySelector(".features-list");
const children = parent.children;
parent.children[1].innerHTML = "Поддержка " + "<b>API</b>";

