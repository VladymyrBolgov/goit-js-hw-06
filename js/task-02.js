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


