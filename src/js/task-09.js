// Задание 9

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// Option 1

const bodyEl = document.querySelector('body');
const textEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  textEl.textContent = getRandomRGBColor();
  bodyEl.style.backgroundColor = getRandomRGBColor();
}

function getRandomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomRGBColor() {
  return `rgb(${getRandomIntegerFromInterval(0, 255)},
    ${getRandomIntegerFromInterval(0, 255)},
    ${getRandomIntegerFromInterval(0, 255)})`;
}
