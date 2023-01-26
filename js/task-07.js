"use strict";
// HMTL REFERENCES
const ref = {
    content: document.querySelector('#text'),
    controller: document.querySelector('#font-size-control'),
}
// VARIABLE REFRENCES
ref.content.style.fontSize = ref.controller.value + 'px';
// INPUT EVENT LISTENER
ref.controller.addEventListener("input", (handleController));
// HANDLE INPUT EVENT FUNCTION
function handleController() {
        const sliderValue = ref.controller.value;
        ref.content.style.fontSize = sliderValue + "px";
    };

// Write a script that responds to changes in the value 
// of input#font-size-control (input event) and changes 
// the inline style of span#text by updating the 
// font-size property. As a result, the text size will 
// change responding to scrollbar dragging.