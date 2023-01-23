"use strict";
 
const ref = {
    inputField: document.querySelector('#validation-input'),
    
};

const charRequirement = ref.inputField.getAttribute("data-length");
console.log(charRequirement);



ref.inputField.addEventListener("input", charCount => {
    let inputStr = ref.inputField.value.trim();
    console.log(inputStr.length);
});
    

ref.inputField.addEventListener("blur", () => {
    console.log(blur);
   
});

// if input vlaue length < charRequirement
// classlist invalid
// else
// class valid


// Write a script that, when focus on input is lost (blur event), 
// checks its contents for the correct number of entered characters.

// The number of characters in the input is specified in its data-length attribute.

// If the number of characters entered is correct, the input's border turns green, 
// or red with a wrong number.

// To add styles, use the valid and invalid CSS classes, which you can find 
// in the task source files.