
const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
  input.value === '' ?  nameOutput.textContent = 'Anonymous' : nameOutput.textContent = event.currentTarget.value
})

/**Напиши скрипт который, при наборе текста
 *  в инпуте input#name-input (событие input),
 *  подставляет его текущее значение в span#name-output. 
 * Если инпут пустой, в спане должна 
 * отображаться строка "Anonymous". */