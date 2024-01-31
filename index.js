// Создание массива городов
const cities = ["Саратов", "Красноярск", "Дублин", "Берлин", "Москва"];

// Пустой массив для хранения температур
const temperatures = [];

// Цикл для ввода температур для каждого города
for (let i = 0; i < cities.length; i++) {
  let temperature = prompt(`Введите температуру для ${cities[i]}`);

  // Преобразование введенного значения в число
  temperature = Number(temperature);

  // Добавление температуры в массив
  temperatures.push(temperature);
}

// Создание списка для отображения информации о каждом городе и его температуре
const list = document.createElement("ul");

// Первый элемент массива температур
let initialTemperature = temperatures[0];

// Используется для инициализации максимальной и минимальной температуры
let maxTemperature = initialTemperature;
let minTemperature = initialTemperature;

// Цикл для перебора элементов массива и добавления их в список
for (let i = 0; i < cities.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
  list.appendChild(listItem);

  // Поиск максимальной и минимальной температуры
  if (temperatures[i] > maxTemperature) {
    maxTemperature = temperatures[i];
  }
  if (temperatures[i] < minTemperature) {
    minTemperature = temperatures[i];
  }
}

// Вывод списка на странице
document.body.appendChild(list);

// Создание блока для вывода информации о максимальной и минимальной температуре
const infoBlock = document.createElement("div");

// Вывод информации о максимальной и минимальной температуре в отдельные строки
document.write("Максимальная температура: " + maxTemperature + "<br>");
document.write("Минимальная температура: " + minTemperature);

// Добавление блока с информацией на страницу
document.body.appendChild(infoBlock);
