"use strict";

const ref = {
    inputField: document.querySelector('#name-input'),
    outputField: document.querySelector('#name-output'),
};    

ref.inputField.addEventListener("input", handleInput);
    function handleInput(e) {
        ref.outputField.innerHTML =`${e.target.value}`;
    }

console.log(ref.inputValue)






// Write a script that, when typing in the input#name-input 
// input (input event), substitutes its current value into 
// span#name-output. If the input is empty, the span should 
// display the "Anonymous" string.
