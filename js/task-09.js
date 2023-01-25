"use strict";
// HTML REFRENCES
const ref = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  colorChanger: document.querySelector('.change-color'),
}

// BUTTON CLICK EVENT LISTENER ADDED
ref.colorChanger.addEventListener('click', (buttonClicked));
// BUTTON CLICKED FUNCTION
function buttonClicked() {
  const newColor = getRandomHexColor();
  console.log(newColor);
  // UPDATE BODY BACKGROUND COLOR
  ref.body.style.backgroundColor = newColor;
  // UPDATE SPAN TEXT TO HEX COLOR STRING
  ref.span.textContent = newColor;
}
// RANDOM HEX COLOR GENERATOR
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}





// Write a script that changes the background colors of
// the < body > element via inline style when clicking 
// on button.change - color and outputs the color value 
// to span.color. 

// Use the getRandomHexColor function to generate a random color.