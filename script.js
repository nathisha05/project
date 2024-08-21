document.addEventListener('DOMContentLoaded', function() {
    // Function to validate name fields
    function validateName(input) {
        const value = input.value;
        if (/[^a-zA-Z]/.test(value)) {
            alert('Names must contain only letters.');
            input.value = ""; // Clear the input field
        }
    }

    function validateCity(input) {
        const value = input.value;
        if (/[^a-zA-Z]/.test(value)) {
            alert('City must contain only letters.');
            input.value = ""; // Clear the input field
        }
    }
    // Function to validate email
    function validateEmail(input) {
        const value = input.value;
        if (value.includes('@') && value.includes('.')) {
            // Clear any previous alert
            input.setCustomValidity('');
        } else if (value.length > 0) {
            alert('Please enter a valid Email ID with "@" and "."');
        }
    }

    // Function to validate contact number
    function validateContact(input) {
        let value = input.value;
        if (!/^\d*$/.test(value)) {
            alert('Contact Number must contain only numbers.');
            input.value = value.replace(/\D/g, ''); // Remove any non-digit characters
        } else if (value.length > 10) {
            alert('Contact Number must not exceed 10 digits.');
            input.value = value.substring(0, 10); // Truncate to 10 digits
        }
    }

    // Attach event listeners
    document.getElementById('firstName').addEventListener('input', function() {
        validateName(this);
    });

    document.getElementById('lastName').addEventListener('input', function() {
        validateName(this);
    });

    document.getElementById('email').addEventListener('blur', function() {
        validateEmail(this);
    });

    document.getElementById('contact').addEventListener('input', function() {
        validateContact(this);
    });
    document.getElementById('city').addEventListener('input', function() {
        validateCity(this);
    });

    // Form Submission
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const city = document.getElementById('city').value;
        // Final validation checks
        if (/[^a-zA-Z]/.test(firstName)) {
            alert('First Name must contain only letters.');
            return;
        }
        if (/[^a-zA-Z]/.test(lastName)) {
            alert('Last Name must contain only letters.');
            return;
        }
        if (/[^a-zA-Z\s]/.test(city)) {
            alert('City must contain only letters.');
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid Email ID with "@" and "."');
            return;
        }
        if (contact.length !== 10) {
            alert('Contact Number must be exactly 10 digits long.');
            return;
        }

        alert('Registration Completed!');
        setTimeout(function() {
            window.location.reload();
        },1000);
    });
});





