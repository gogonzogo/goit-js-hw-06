const ref = {
    form: document.querySelector('form'),
}

ref.form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    let whiteSpaces = /^\S*$/;
    if (email.value.trim() === "" || password.value.trim() === "") {
        alert("All fields required for submission.");
        return false;
    } else {
        if (!password.value.match(whiteSpaces)) {
            alert("No spaces allowed in password.");
        return false;
        }
    }

    const formsData = new FormData(ref.form);
    const formDataObject = Object.fromEntries(formsData);
    console.log(formDataObject);

    event.currentTarget.reset();
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