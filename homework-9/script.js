// Задание 1
let timeOfDay = prompt("Какое сейчас время суток? (утро, день, вечер)").toLowerCase().trim();

if (typeof timeOfDay !== "string" || timeOfDay.trim() === "") {
    alert("Введите верные данные");
} else if (timeOfDay === "утро") {
    alert("Что может быть лучше чашки бодрящего кофе по утрам?");
} else if (timeOfDay === "день") {
    alert("Пора подкрепиться! Выпейте облепиховый чай");
} else if (timeOfDay === "вечер") {
    alert("Самое время для горячего шоколада");
} else {
    alert("Неверные данные");
};



// Задание 2
let student = {
    name: prompt("Введите имя:"),
    age: Number(prompt("Введите возраст:")),
    subject: prompt("Введите предмет:"),
    grade: prompt("Введите оценку:")
};

console.log(student);

student.age += 5;
console.log(student);




// Задание 3
const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];

console.log(movies[1].director);
console.log(movies[3].genre);



// Задание 4
groceries = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];

console.log(groceries);
groceries.unshift("яйца");
console.log(groceries);
groceries.pop();
console.log(groceries);
groceries.splice(2, 1, "курица", "авокадо");
console.log(groceries);
