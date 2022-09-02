//1
/*const changeColorBtn = document.querySelector('button')
const body = document.querySelector('body')
const spanColor = document.querySelector('span')

changeColorBtn.addEventListener('click', clickChangeColorBtn)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function clickChangeColorBtn() {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor()
}*/

//
/**Напиши скрипт, который изменяет цвета фона 
  элемента <body> через инлайн стиль при клике 
  на button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} */


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body')
const changeColorBtn = document.querySelector('button')
const spanColor = document.querySelector('span')

const clickChangeColorBtn = () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = body.style.backgroundColor;
}
changeColorBtn.addEventListener('click', clickChangeColorBtn) 



