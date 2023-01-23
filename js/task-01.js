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



// Write a script that:
// Will count and display in the console the number of categories in 
// ul#categories, that is, li.item elements.
// For each li.item element in the ul#categories list, will find and 
// display in the console the element header text (<h2> tag) and the 
//     number of elements in the category (all nested <li>).
// As a result, the following messages will be displayed in the console.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
