const registrationForm = document.getElementById('registration-form');
const clearButton = document.getElementById('clear-btn');
const exitButton = document.getElementById('exit-btn');

function displayFormData() {
    const formData = new FormData(registrationForm);
    const formObject = {};

    for (const [key, value] of formData.entries()) {
        formObject[key] = value;
    }

    console.log(formObject);
}

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for now

    // Call the function to display data in the console
    displayFormData(); 

    alert('Form submitted successfully!');
    registrationForm.reset(); // Clear the form
});

clearButton.addEventListener('click', function () {
    registrationForm.reset(); // Clear the form
});

exitButton.addEventListener('click', function () {
    if (confirm('Are you sure you want to exit?')) {
        window.close(); // Close the window/tab
    }
});
