"use strict";

const ref = {
    content: document.querySelector('#text'),
    controller: document.querySelector('#font-size-control'),
}   
ref.controller.addEventListener("input", (e));

function e() {
        const sliderValue = ref.controller.value;
        ref.content.style.fontSize = sliderValue + "px";
    };


    
// Write a script that responds to changes in the value 
// of input#font-size-control (input event) and changes 
// the inline style of span#text by updating the 
// font-size property. As a result, the text size will 
// change responding to scrollbar dragging.