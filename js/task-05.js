"use strict";
// HTML REFRENCES
const ref = {
    inputField: document.querySelector('#name-input'),
    outputField: document.querySelector('#name-output'),
};    
// INPUT EVENT LISTENER
ref.inputField.addEventListener("input", handleInput);
// HANDLE INPUT EVENT FUNCTION
    function handleInput() {
        let newString = ref.inputField.value.trim();
        if(newString === '') {
            ref.outputField.textContent = "Anonymous"
        } else {
            ref.outputField.textContent = newString;
        }
    }

// Write a script that, when typing in the input#name-input 
// input (input event), substitutes its current value into 
// span#name-output. If the input is empty, the span should 
// display the "Anonymous" string.
