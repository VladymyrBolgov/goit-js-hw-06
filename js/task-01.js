const categoriesEl = document.querySelectorAll('.item');
const numberCategoriesEl = categoriesEl.length;
console.log('Number of categories:', numberCategoriesEl);

categoriesEl.forEach((category, index) => {
    const nameOfElements = category.querySelector('h2').textContent;
    const numberOfElements = category.querySelectorAll('li').length;
        console.log(`Category: ${nameOfElements}`);
        console.log(`Elements: ${numberOfElements}`);
});

