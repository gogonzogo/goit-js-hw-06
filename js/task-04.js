const ref = {
    decrementButton: document.querySelector('[data-action="decrement"]'),
    incrementButton: document.querySelector('[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
}

ref.decrementButton.addEventListener("click", handleDecrement);
ref.incrementButton.addEventListener("click", handleIncrement);

    function handleDecrement() {
        ref.counterValue.innerHTML--;
    }

    function handleIncrement() {
        ref.counterValue.innerHTML++;
    }


// The counter consists of a span and buttons, which, when clicked, 
// should increase and decrease its value by one.

// Create a variable, counterValue, that will store the current counter value and 
// initialize it with 0.

// Add listeners for clicks on the buttons; inside them, increase or decrease 
// the value of the counter.

// Update the interface with the new value of the variable counterValue.