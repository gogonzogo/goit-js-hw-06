"use strict";

const content = document.querySelector('#text');
const controller = document.querySelector('#font-size-control');

controller.addEventListener("input", (e));

function e() {
        const sliderValue = controller.value;
        content.style.fontSize = sliderValue + "px";
    };


// Write a script that responds to changes in the value 
// of input#font-size-control (input event) and changes 
// the inline style of span#text by updating the 
// font-size property. As a result, the text size will 
// change responding to scrollbar dragging.