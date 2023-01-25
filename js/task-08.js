"use strict";
// HTML REFRENCES
const ref = {
    form: document.querySelector('form'),
}

// SUBMIT EVENT LISTENER
ref.form.addEventListener("submit", handleSubmit);
// SUBMIT FUNCTION
function handleSubmit(submitClick) {
    // PREVENT BROWSER RELOD
    submitClick.preventDefault();
    // ADD FORM DATA TO OBJECT
    const formsData = new FormData(ref.form);
    const formDataObject = Object.fromEntries(formsData);
    // DISPLAY FORM DATA IN CONSOLE
    console.log(formDataObject);
    // SETTING TARGETS FOR EVENT
    const {
        elements: { email, password }
    } = submitClick.currentTarget;
    // CRITERIA FOR ALERT MESSAGE
    if (email.value === "" || password.value === "") {
        alert("All fields filled required for submission.");
    } 
    // FORM RESET METHOD TO CLEAR FORM POST SUBMISSION
    submitClick.currentTarget.reset();
}

// Write a script to manage the login form.

// Form submission(form.login - form) must be processed 
// on the submit event.

// The page must not reload when the form is submitted.

// If the form has empty fields, display alert saying 
// that all fields must be filled in.

// As soon as the user has filled in all the fields 
// and submitted the form, collect the field values 
// into an object, where the field name will be the 
// property name and the field value will be the 
// property value.Use the elements property to access 
// form elements.

// Display the object with the entered data in the 
// console and clear the values of the form fields 
// using the reset method.