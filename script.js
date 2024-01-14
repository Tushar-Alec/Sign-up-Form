// Select all input elements
var allInputs = document.querySelectorAll('input');

// Function to handle clicks outside of input elements
function handleClickOutsideInputs(event) {
    if (!event.target.closest('input')) {
        // Remove the 'clicked' class from all input elements
        allInputs.forEach(function(input) {
            input.classList.remove('clicked');
        });
    }
}

// Loop through the NodeList and attach the event listener to each input
allInputs.forEach(function(input) {
    input.addEventListener('click', function (event) {
        // Remove the 'clicked' class from all input elements
        allInputs.forEach(function(otherInput) {
            otherInput.classList.remove('clicked');
        });

        // Add the 'clicked' class to the current input element
        this.classList.add('clicked');

        // Stop the click event propagation to prevent immediate removal
        event.stopPropagation();
    });
});

// Attach a click event listener to the document
document.addEventListener('click', handleClickOutsideInputs);



// function to check if password maches //

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('cpassword').value;
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    // Check if passwords match
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      event.preventDefault(); // Prevent form submission
    } else {
      confirmPasswordError.textContent = ''; // Clear error message if passwords match
    }
  });