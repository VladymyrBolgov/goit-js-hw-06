const categories = document.querySelectorAll('.item');
const numberCategories = categories.length;
console.log('Number of categories:', numberCategories);

categories.forEach((category, index) => {
    const nameOfElements = category.querySelector('h2').textContent;
    const numberOfElements = category.querySelectorAll('li').length;
        console.log(`Category: ${nameOfElements}`);
        console.log(`Elements: ${numberOfElements}`);
});
