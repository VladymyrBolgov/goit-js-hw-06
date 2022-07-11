const refs = {
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameOutput.textContent = event.currentTarget.value;
}

// второй способ
/*const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', onInputChange)

function onInputChange(event) {
    nameOutput.textContent = event.currentTarget.value;
}*/
