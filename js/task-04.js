"use strict";

const counter = document.querySelector('#counter');
const decrementButton = counter.firstElementChild;
const incrementButton = counter.lastElementChild;
const counterLog = document.querySelector('#value');;
let counterValue = 0;

decrementButton.addEventListener("click", decrement);
    function decrement(){counterLog.innerHTML--;}

incrementButton.addEventListener("click", increment);
    function increment(){counterLog.innerHTML++;}


// The counter consists of a span and buttons, which, when clicked, 
// should increase and decrease its value by one.

// Create a variable, counterValue, that will store the current counter value and 
// initialize it with 0.

// Add listeners for clicks on the buttons; inside them, increase or decrease 
// the value of the counter.

// Update the interface with the new value of the variable counterValue.