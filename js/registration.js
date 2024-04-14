const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    $("#first_name").focus();
    $("#submit").addEventListener("click", evt => {
        evt.preventDefault();

        const firstName = $("#first_name").value;
        const lastName = $("#last_name").value;
        const country = $("#country").value;
        const phone = $("#phone").value;
        const username = $("#username").value;
        const username2 = $("#username2").value;
        const password = $("#password").value;
        const password2 = $("#password2").value;

        let errorMsg = "";

        

        if (firstName == "") {
            errorMsg += "First Name is required! \n";
        }

        if (lastName == "") {
            errorMsg += "Last Name is required! \n";
        }

        if (country == "" || country == "Select Country") {
            errorMsg += "Please select a country! \n";
        }

        if (phone == "") {
            errorMsg += "Phone Number is required! \n";
        }

        if (username == "") {
            errorMsg += "Username is required! \n";
        }

        if (username2 == "") {
            errorMsg += "Re-enter Username! \n";
        }

        if (username != username2) {
            errorMsg += "Usernames do not match! Please re-enter. \n";
        }

        if (password == "") {
            errorMsg += "Password is required! \n";
        }

        if (password2 == "") {
            errorMsg += "Re-enter Password! \n";
        }

        if (password != password2) {
            errorMsg += "Passwords do not match! Please re-enter. \n";
        }

        const passwordPattern = /^(?=.*[!@#$%^&*()_+|~-]).{8,}$/;
        if (!passwordPattern.test(password)) {
            errorMsg += "Password must be at least 8 characters long and contain a special character! \n";
        }

        if (errorMsg != "") {
            alert(errorMsg);
        } else {
            alert("Form submitted successfully!");
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

    $("#reset").addEventListener("click", () => {
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
