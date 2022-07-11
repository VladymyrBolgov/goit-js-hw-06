const categoriesEl = document.querySelectorAll('.item');
const numberCategoriesEl = categoriesEl.length;
console.log('Number of categories:', numberCategoriesEl);

categoriesEl.forEach((category, index) => {
    const nameOfElements = category.querySelector('h2').textContent;
    const numberOfElements = category.querySelectorAll('li').length;
        console.log(`Category: ${nameOfElements}`);
        console.log(`Elements: ${numberOfElements}`);
});

/**Напиши скрипт который:

1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>). */