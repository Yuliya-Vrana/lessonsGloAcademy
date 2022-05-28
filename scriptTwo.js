const title = "LearnWithGloAcademy";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = "999";
const rollback = "99";
const fullPrice = "10000";
const adaptive = true;

console.log(title + ', ' + fullPrice + ', ' + adaptive);
console.log(screens.length);
console.log("Стоимость вёрстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

newScreens = screens.toLowerCase();
console.log(newScreens.split(", "));

console.log(fullPrice * (rollback/100));