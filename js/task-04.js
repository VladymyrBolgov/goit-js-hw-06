
    const decrementBtn = document.querySelector('[data-action="decrement"]')
    const incrementBtn = document.querySelector('[data-action="increment"]')
    const counterEl = document.querySelector('#value')
    let counterValue = 0;

    decrementBtn.addEventListener('click', () => {
        counterEl.textContent = counterValue -= 1;
    })

    incrementBtn.addEventListener('click', () => {
        counterEl.textContent = counterValue += 1;
    })

