const input = document.querySelector('input')
const length = parseInt(input.getAttribute('data-length'))

input.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === length) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    }
    else {
        event.currentTarget.classList.add('invalid')
        event.currentTarget.classList.remove('valid')
    }
})

/**Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания. */