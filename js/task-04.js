
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

/**Счетчик состоит из спана и кнопок, которые, 
 * при клике, должны увеличивать и уменьшать его
 *  значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
1. Создай переменную counterValue в которой
будет храниться текущее значение счетчика и
 инициализируй её значением 0.
2. Добавь слушатели кликов на кнопки, внутри 
которых увеличивай или уменьшай значение счетчика.
3. Обновляй интерфейс новым значением 
переменной counterValue. */

