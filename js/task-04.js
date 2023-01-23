"use strict";

const ref = {
    decrementButton: document.querySelector('[data-action="decrement"]'),
    incrementButton: document.querySelector('[data-action="increment"]'),
    counterLog: document.querySelector('#value'),
}

let counterValue = 0;

ref.decrementButton.addEventListener("click", handleDecrement);
ref.incrementButton.addEventListener("click", handleIncrement);

    function handleDecrement() {
        ref.counterLog.innerHTML--;
    }
    function handleIncrement() {
        ref.counterLog.innerHTML++;
    }


// The counter consists of a span and buttons, which, when clicked, 
// should increase and decrease its value by one.

// Create a variable, counterValue, that will store the current counter value and 
// initialize it with 0.

// Add listeners for clicks on the buttons; inside them, increase or decrease 
// the value of the counter.

// Update the interface with the new value of the variable counterValue.