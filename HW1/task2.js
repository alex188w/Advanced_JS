// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

// 1. Map: повар - специализация 
let specializations = new Map();

specializations.set("Виктор", "Пицца");
specializations.set("Ольга", "Суши");
specializations.set("Дмитрий", "Десерты");

// 2. Map: повар - Set блюда
let cooks = new Map();

const victor = { name: "Victor" };
let dishesVictor = ["Пицца 'Маргарита'", "Пицца 'Пепперони'"];
let victorDishes = new Set(dishesVictor);

const olga = { name: "Olga" };
let dishesOlga = ["Суши 'Филадельфия'", "Суши 'Калифорния'"];
let olgaDishes = new Set(dishesOlga);

const dima = { name: "Dima" };
let dishesDima = ["Тирамису", "Чизкейк"];
let dimaDishes = new Set(dishesDima);

cooks.set(victor, victorDishes);
cooks.set(olga, olgaDishes);
cooks.set(dima, dimaDishes);

// 3. Map: клиент - Set блюда
let clients = new Map();

const aleksey = { name: "Aleksey" };
let reservationAleksey = ["Пицца 'Пепперони'", "Тирамису"];
let alekseyReservation = new Set(reservationAleksey);

const mariya = { name: "Mariya" };
let reservationMariya = ["Суши 'Калифорния'", "Пицца 'Маргарита'"];
let mariyaReservation = new Set(reservationMariya);

const irina = { name: "Irina" };
let reservationIrina = ["Чизкейк"];
let irinaReservation = new Set(reservationIrina);

clients.set(aleksey, alekseyReservation);
clients.set(mariya, mariyaReservation);
clients.set(irina, irinaReservation);

console.log("Повар и его специализация:");
console.log(specializations.entries());

// console.log(`Специализация повара Виктор: ${specializations.get("Виктор")}`);
console.log(`Блюда, которые готовит Дмитрий: ${[...cooks.get(dima)]}`);
console.log(`Клиент Алексей заказал блюда: ${[...clients.get(aleksey)]}`);
