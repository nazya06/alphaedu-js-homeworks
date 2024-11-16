// Задание 1
const firstName = "Nazerke";
const lastName = "Akimzhan";
const age = 28;
console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`);


// Задание 2
const city = "Almaty";
console.log("Я родом из города " + city);


// Задание 3
const password = "1nFsd5@ef3q)";
const hasAccess = !!password;
console.log("Password: " + password);
console.log("Has access: " + hasAccess);


// Задание 4
let isMember = false;
isMember = isMember.toString();
console.log(isMember, typeof isMember);


// Задание 5
let cartItems = 0;
cartItems = Boolean(cartItems);
console.log("If 0, then false:", cartItems);


// Задание 6
let averageScore = 89.75695;
console.log(averageScore.toFixed(1));


// Задание 7
let greetingMessage = "      Приветствуем вас в мире программирования!        ";
greetingMessage = greetingMessage.trim();
console.log(greetingMessage);
console.log(greetingMessage.toUpperCase());
console.log(greetingMessage.includes("программирования"))

