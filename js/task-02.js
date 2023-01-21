"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const emptyUl = document.querySelectorAll('#ingredients');

ingredients.forEach(i => {
    i = document.createElement('li');
    i.textContent = "${i}";
    i.classList.add("item");
    emptyUl[0].append(i);
});

console.log(emptyUl);

// Write a script that, for each element in the ingredients array:
            // forEach Loop
// Will create a separate <li> element. 
// Be sure to use the document.createElement() method.
            // document.createElement(), .appendChild()
// Will add the ingredient name as its text content.
            // elem.innerHTML
// Will add the item class to the element.
            // elem.classList.add(cls)
// Then will insert all <li> to the ul#ingredients 
// list in a single operation.