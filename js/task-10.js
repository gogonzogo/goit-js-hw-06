"use strict";
// HTML REFRENCES
const ref = {
  controls: document.querySelector('#controls'),
  input: controls.firstElementChild,
  boxes: document.querySelector('#boxes'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
};



ref.input.addEventListener("change", (numSelect));

function numSelect() {
  console.log(ref.input.value);
}

// RANDOM HEX COLOR GENERATOR
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// CREATE BOXES FUNCTION
function createBoxes() {
  const boxCount = ref.input.value;
  console.log(ref.input.value);
  const box = document.createElement('div');
  box.style.backgroundColor = getRandomHexColor();
  box.style.width = "30px";
  box.style.height = "30px";
  ref.boxes.appendChild(box);

  
}
  
//   for (let i = 0; i <= boxCount; i++) {
//   }
// }

ref.createButton.addEventListener('click', createBtnClick);

  function createBtnClick() {
    createBoxes()
};




// Write a script to create and clear a collection of elements.
// The user enters the number of elements into input and clicks 
// the New button, after which a collection is rendered.When 
// you click on the Clear button, the collection is cleared.

// Create a createBoxes(amount) function that takes one
// parameter, a number.The function creates as many < div > as
// specified in amount and adds them to div#boxes.

// The dimensions of the very first < div > are 30px by 30px.

// Each element after the first one should be 10px wider and 
// higher than the previous one.

// All elements must have a random HEX background color.Use 
// the ready - made getRandomHexColor function to get a
// color.