// Function to select elements by their CSS selector
const $ = selector => document.querySelector(selector);

// Event listener for when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Focus on the first name input field when the page loads
    $("#first_name").focus();

    // Event listener for the submit button click
    $("#submit").addEventListener("click", evt => {
        evt.preventDefault(); // Prevent the default form submission behavior

        // Get values from form fields
        const firstName = $("#first_name").value;
        const lastName = $("#last_name").value;
        const country = $("#country").value;
        const phone = $("#phone").value;
        const username = $("#username").value;
        const username2 = $("#username2").value;
        const password = $("#password").value;
        const password2 = $("#password2").value;

        let errorMsg = ""; // Initialize error message variable

        // Validation for first name
        if (firstName == "") {
            errorMsg += "First Name is required! \n";
        }

        // Validation for last name
        if (lastName == "") {
            errorMsg += "Last Name is required! \n";
        }

        // Validation for country selection
        if (country == "" || country == "Select Country") {
            errorMsg += "Please select a country! \n";
        }

        // Validation for phone number
        if (phone == "") {
            errorMsg += "Phone Number is required! \n";
        }

        // Validation for username
        if (username == "") {
            errorMsg += "Username is required! \n";
        }

        // Validation for re-entered username
        if (username2 == "") {
            errorMsg += "Re-enter Username! \n";
        }

        // Validation for matching usernames
        if (username != username2) {
            errorMsg += "Usernames do not match! Please re-enter. \n";
        }

        // Validation for password
        if (password == "") {
            errorMsg += "Password is required! \n";
        }

        // Validation for re-entered password
        if (password2 == "") {
            errorMsg += "Re-enter Password! \n";
        }

        // Validation for matching passwords
        if (password != password2) {
            errorMsg += "Passwords do not match! Please re-enter. \n";
        }

        // Regular expression pattern for password validation
        const passwordPattern = /^(?=.*[!@#$%^&*()_+|~-]).{8,}$/;
        if (!passwordPattern.test(password)) {
            errorMsg += "Password must be at least 8 characters long and contain a special character! \n";
        }

        // If any validation errors exist, display them in an alert
        if (errorMsg != "") {
            alert(errorMsg);
        } else {
            // If no validation errors, display success message in an alert
            alert("Form submitted successfully!");

            // Clear form fields and focus on the first name input field
            $("#first_name").value = "";
            $("#last_name").value = "";
            $("#country").value = "Select Country";
            $("#phone").value = "";
            $("#username").value = "";
            $("#username2").value = "";
            $("#password").value = "";
            $("#password2").value = "";
            $("#first_name").focus();
        }
    });

    // Event listener for the reset button click
    $("#reset").addEventListener("click", () => {
        // Clear form fields and focus on the first name input field
        $("#first_name").value = "";
        $("#last_name").value = "";
        $("#country").value = "Select Country";
        $("#phone").value = "";
        $("#username").value = "";
        $("#username2").value = "";
        $("#password").value = "";
        $("#password2").value = "";
        $("#first_name").focus();
    });
});
