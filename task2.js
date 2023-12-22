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


// 1. Map: специализация => повар
let specializations = new Map();

specializations.set("Пицца", "Виктор");
specializations.set("Суши", "Ольга");
specializations.set("Десерты", "Дмитрий");
 
// 2. Map: повар => Set блюда
let cooks = new Map();

let victor = { name: "Victor"};
let dishesVictor = ["Пицца 'Маргарита'", "Пицца 'Пепперони'"];
let victorDishes = new Set(dishesVictor);

let olga = { name: "Olga"};
let dishesOlga = ["Суши 'Филадельфия'", "Суши 'Калифорния'"];  
let olgaDishes = new Set(dishesOlga);

let dima = { name: "Dima"};
let dishesDima = ["Тирамису", "Чизкейк"];
let dimaDishes = new Set(dishesDima);

cooks.set(victor, victorDishes);
cooks.set(olga, olgaDishes);
cooks.set(dima, dimaDishes);


// 3. Map: клиент => Set блюда
let clients = new Map();

let aleksey = { name: "Aleksey"};
let dishesAleksey = ["Пицца 'Пепперони'", "Тирамису"];
let alekseyDishes = new Set(dishesAleksey);

let mariya = { name: "Mariya"};
let dishesMariya = ["Суши 'Калифорния'", "Пицца 'Маргарита'"];
let mariyaDishes = new Set(dishesMariya);

let irina = { name: "Irina"};
let dishesIrina = ["Чизкейк"];
let irinaDishes = new Set(dishesIrina);

clients.set(aleksey, alekseyDishes);
clients.set(mariya, mariyaDishes);
clients.set(irina, irinaDishes);


console.log(`Повар со специализацией "пицца": ${specializations.get("Пицца")}`); 

console.log(`Блюда, которые готовит Дмитрий: ${[...cooks.get(dima)]}`); 

console.log(`Клиент Мария заказала блюда: ${[...clients.get(mariya)]}`); 

