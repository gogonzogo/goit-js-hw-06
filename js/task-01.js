"use strict";

console.log(document);

const body = document.body;
console.log(body);

const categoriesParent = 
document.querySelectorAll('#categories');
console.log(categoriesParent);

// NUMBER OF CATEGORIES: 3
const categoryCount = 
document.querySelectorAll('.item').length;
console.log(`Number of categories: ${categoryCount}`);
// ---------------
// CATEGORY: ANIMAL
const animalHeader = document.querySelector('h2');
console.log(`Category: ${animalHeader.textContent}`);
// ELEMENTS: 4
const animalCategory = document.querySelector('#categories .item');
const animalsList = animalCategory.lastElementChild;
const animals = animalsList.children.length;
console.log(`Elements: ${animals}`);
// ---------------
// CATEGORY: PRODUCTS
const productsCategory = animalCategory.nextElementSibling;
const productsHeader = productsCategory.firstElementChild;
console.log(`Category: ${productsHeader.textContent}`);
// ELEMENTS: 3
const productsList = productsCategory.lastElementChild;
const products = productsList.children.length;
console.log(`Elements: ${products}`);
// ---------------
// CATEGORY: TECHNOLOGIES
const siblingTechnologies = productsCategory.nextElementSibling;
const technologiesHeader = siblingTechnologies.firstElementChild;
console.log(`Category: ${technologiesHeader.textContent}`);
// ELEMENTS: 5
const technologiesList = siblingTechnologies.lastElementChild;
const technologies = technologiesList.children.length;
console.log(`Elements: ${technologies}`);
