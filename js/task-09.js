"use strict";
// HTML REFRENCES
const ref = {
  widget: document.querySelector('.widget'),
  span: document.querySelector('.color'),
  colorChanger: document.querySelector('.change-color'),
}

// BUTTON CLICK EVENT LISTENER ADDED
ref.colorChanger.addEventListener('click', (buttonClicked));
// BUTTON CLICKED FUNCTION
function buttonClicked() {
  // RANDOM HEX COLOR GENERATOR
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  console.log(getRandomHexColor());
  // UPDATE WIDGET BACKGROUND COLOR
  ref.widget.style.backgroundColor = getRandomHexColor();
  // UPDATE SPAN TEXT TO HEX COLOR STRING
  ref.span.textContent = `${getRandomHexColor()}`;
}


// Write a script that changes the background colors of
// the < body > element via inline style when clicking 
// on button.change - color and outputs the color value 
// to span.color. 

// Use the getRandomHexColor function to generate a random color.