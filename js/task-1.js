'use strict';
const categoriesEl = document.querySelectorAll("#categories > .item");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((category) => {
    const titleEl = category.querySelector('h2').textContent;
    const itemsScore = category.querySelectorAll('ul > li').length;

    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${itemsScore}`);
});