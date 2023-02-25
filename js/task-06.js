
const ref = {
    inputField: document.querySelector('#validation-input'),
};

const inputReq = ref.inputField.getAttribute("data-length");
const parsedInputReq = parseInt(inputReq);

ref.inputField.addEventListener("input", handleBlur);

    function handleBlur() {
        let inputString = ref.inputField.value.trim();
        if(inputString.length === parsedInputReq) {
            ref.inputField.classList.add("valid");
            ref.inputField.classList.remove("invalid");
        } else {
            ref.inputField.classList.add("invalid");
            ref.inputField.classList.remove("valid");
        }   
    };

    ref.inputField.style.cssText = "outline: none;"

// Write a script that, when focus on input is lost (blur event), 
// checks its contents for the correct number of entered characters.

// The number of characters in the input is specified in its data-length attribute.

// If the number of characters entered is correct, the input's border turns green, 
// or red with a wrong number.

// To add styles, use the valid and invalid CSS classes, which you can find 
// in the task source files.