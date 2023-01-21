"use strict";

// AARRAY OF DATA
const categories = 
document.querySelectorAll('.item');
// NUMBER OF CATEGORIES: 3
console.log(`Number of categories: ${categories.length}`);
// LOOP THROUGH DATA FOR NEEDED ELEMENT
categories.forEach(element => {
const categoryHeader = element.querySelector('h2');
// CATEGORY HEADERS
console.log(`Category: ${categoryHeader.innerText}`);
// ELEMENT COUNTS
const categoryLists = element.querySelectorAll('li');
console.log(`Elements: ${categoryLists.length}`);
});



// const categoryCount = 
// document.querySelectorAll('.item').length;
// // console.log(`Number of categories: ${categoryCount}`);
// // ---------------
// // CATEGORY: ANIMAL
// const animalHeader = document.querySelector('h2');
// // console.log(`Category: ${animalHeader.textContent}`);
// // ELEMENTS: 4
// const animalCategory = document.querySelector('#categories .item');
// const animalsList = animalCategory.lastElementChild;
// const animals = animalsList.children.length;
// // console.log(`Elements: ${animals}`);
// // ---------------
// // CATEGORY: PRODUCTS
// const productsCategory = animalCategory.nextElementSibling;
// const productsHeader = productsCategory.firstElementChild;
// // console.log(`Category: ${productsHeader.textContent}`);
// // ELEMENTS: 3
// const productsList = productsCategory.lastElementChild;
// const products = productsList.children.length;
// // console.log(`Elements: ${products}`);
// // ---------------
// // CATEGORY: TECHNOLOGIES
// const siblingTechnologies = productsCategory.nextElementSibling;
// const technologiesHeader = siblingTechnologies.firstElementChild;
// // console.log(`Category: ${technologiesHeader.textContent}`);
// // ELEMENTS: 5
// const technologiesList = siblingTechnologies.lastElementChild;
// const technologies = technologiesList.children.length;
// // console.log(`Elements: ${technologies}`);
