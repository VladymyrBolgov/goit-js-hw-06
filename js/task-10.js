const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('#controls')
const containerEl = document.querySelector('#boxes')

createButton.addEventListener('click', () => createBoxes(inputEl.value));
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let size = 20;
  const boxEl = [];

  for (let i = 0; i < amount; i += 1) {
    size = size + 10;
    const box = document.createElement('div');
    box.style.backgroundColor = `${getRandomHexColor()}`
    box.style.width = size + 'px'
    box.style.height = size + 'px'
    box.classList.add('box-item')
    boxEl.push(box)
  }
  containerEl.append(...boxEl)
  return containerEl
}

function destroyBoxes() {
  containerEl.innerHTML = "";
  inputEl.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



/**Напиши скрипт создания и очистки коллекции элементов.
   Пользователь вводит количество элементов в input и 
  нажимает кнопку Создать, после чего рендерится коллекция.
   При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Создай функцию createBoxes(amount), которая принимает 
один параметр - число. Функция создает столько <div>, 
сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего 
на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. 
Используй готовую функцию getRandomHexColor для получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Создай функцию destroyBoxes(), которая очищает содержимое 
div#boxes, тем самым удаляя все созданные элементы. */