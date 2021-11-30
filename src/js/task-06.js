// Задание 6

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// - Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// - Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

// Для добавления стилей, используй CSS - классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// Option 1

// const inputEl = document.querySelector('#validation-input');
// const inputAttributeEl = Number(inputEl.dataset.length);

// inputEl.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
//     if (event.currentTarget.value.length === inputAttributeEl) {
//         event.currentTarget.classList.add('valid');
//         event.currentTarget.classList.remove('invalid');
//     } else {
//         event.currentTarget.classList.add('invalid');
//         event.currentTarget.classList.remove('valid');
//     }
// }

// Option 2

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur({ target: { value, dataset } }) {
  value.length === Number(dataset.length)
    ? toggleClass("valid", "invalid")
    : toggleClass("invalid", "valid");
}

function toggleClass(add, remove) {
  inputEl.classList.add(add);
  inputEl.classList.remove(remove);
}
