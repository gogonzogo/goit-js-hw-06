"use strict";
// HTML REFRENCES
const ref = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  colorChanger: document.querySelector('.change-color'),
}

ref.colorChanger.addEventListener('click', (buttonClicked));

function buttonClicked() {
  const newColor = getRandomHexColor();
  console.log(newColor);
  ref.body.style.backgroundColor = newColor;
  ref.span.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



// Write a script that changes the background colors of
// the < body > element via inline style when clicking 
// on button.change - color and outputs the color value 
// to span.color. 

// Use the getRandomHexColor function to generate a random color.