const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const elementsItems = arrays => arrays.map(item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = item;
  itemEl.classList.add('item');
  return itemEl;
});
const ingredientsItems = elementsItems(ingredients);
listEl.append(...ingredientsItems);
console.log(listEl);

/**Напиши скрипт, который для каждого элемента 
 * массива ingredients:

1. Создаст отдельный элемент <li>. 
Обзательно используй метод document.createElement().
2. Добавит название ингредиента как его 
текстовое содержимое.
3. Добавит элементу класс item.
4. После чего вставит все <li> за 
одну операцию в список ul#ingredients. */

