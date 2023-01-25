"use strict";
// HTML REFRENCES
const ref = {
  controls: document.querySelector('#controls'),
  input: controls.firstElementChild,
  boxes: document.querySelector('#boxes'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
};
// CREATE BOX NUMBER INPUT LISTENER
ref.input.addEventListener("change", (numSelect));
// CREATE BOX NUMBER VALUE FUNCTION
function numSelect() {
  if (ref.input.value > 100) {
    alert("Max 100");
    ref.input.value = 100;
  }
}
// RANDOM HEX COLOR GENERATOR
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// CREATE BOXES FUNCTION
function createBoxes() {
  // CREATE BOXES REFRENCES
  const boxCount = ref.input.value;
  console.log(ref.input.value);
  // FOR LOOP TO CREATE BOXES
    for (let i = 0; i <= boxCount; i++) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = "30px";
      box.style.height = "30px";
      ref.boxes.appendChild(box);
    }
  }
// CREATE BOXES BUTTON CLICK LISTENER
ref.createButton.addEventListener('click', createBtnClick);
  // CREATE BOXES BUTTON CLICK FUNCTION
function createBtnClick() {
    // CREATE BOXES FUNCTION CALLBACK
    createBoxes()
};
// DESTROY BOXES FUNCTION
function destroyBoxes() {
  let child = ref.boxes.lastElementChild;
  while (child) {
    ref.boxes.removeChild(child);
    child = ref.boxes.lastElementChild;
  }
}
// DESRTROY BOXES BUTTON CLICK LISTENER
ref.destroyButton.addEventListener('click', destroyBtnClick);
// destroy BOXES BUTTON CLICK FUNCTION
function destroyBtnClick() {
  // destroy BOXES FUNCTION CALLBACK
  destroyBoxes()
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