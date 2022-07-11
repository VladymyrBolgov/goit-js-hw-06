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