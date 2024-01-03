// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.****

// 1. Map будет использоваться для хранения соответствия между уроком и преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент

// 1. Map: урок => преподаватель
let lessons = new Map();
// "Математика", "Смирнов"
// "История", "Иванова"

lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");

let students = new Map();
let Ivanov = {name: "Ivanov"};
let ivanovLessons = new Set();
ivanovLessons.add(["Матеметика", "История"]);
// или так
// ivanovLessons.add("Матеметика");
// ivanovLessons.add("История");
students.set(Ivanov, ivanovLessons);

let elena = {name: "elena"};
let elenalessons = new Set();
elenalessons.add(["Матеметика", "История", "Физика"]);
students.set(elena, elenalessons);
elenalessons.add("Матеметика");

// 2. Map: студент => Set уроков

// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
console.log(`Уроки Иванова: ${[...students.get(Ivanov)]}`); // Математика, История
console.log(`Уроки Елена: ${[...students.get(elena)]}`);
