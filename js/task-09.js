"use strict";
// HTML REFRENCES
const ref = {
  body: document.querySelector('body'),
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
  // UPDATE WIDGET BACKGROUND COLOR
  ref.body.style.backgroundColor = getRandomHexColor();
  // UPDATE SPAN TEXT TO HEX COLOR STRING
 
  ref.span.textContent = `${ref.body.style.backgroundColor}`;
  let bodyBackgroundColor = ref.body.style.backgroundColor;
  console.log(bodyBackgroundColor);


  // CREATE OBJECT FROM RGB()
  function getRGB(str) {
    var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    return match ? {
      red: match[1],
      green: match[2],
      blue: match[3]
    } : {};
  }
  let bodyBgObject = getRGB(bodyBackgroundColor);
  console.log(bodyBgObject);

  // EXTRACT R, G, B VALUES
  const bodyRgbObjectValues = Object.values(bodyBgObject);
  console.log(bodyRgbObjectValues);
  let bodyRgbInt = bodyRgbObjectValues.map(value => parseInt(value));
  console.log(bodyRgbInt);
 
  function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  // function rgbToHex(r, g, b) {
  //   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  // }
  // console.log(rgbToHex(bodyRgbInt)); 

  // CONVERT RGB TO HEX
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  console.log(rgbToHex(bodyRgbInt));
 
}






// Write a script that changes the background colors of
// the < body > element via inline style when clicking 
// on button.change - color and outputs the color value 
// to span.color. 

// Use the getRandomHexColor function to generate a random color.