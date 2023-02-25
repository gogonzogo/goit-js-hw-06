const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ref = {
  emptyUl: document.querySelectorAll('#ingredients'),
}

ingredients.forEach(i => {
    const newLi = document.createElement('li');
    newLi.textContent = i;
    newLi.classList.add("item");
    ref.emptyUl[0].append(newLi);
});

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