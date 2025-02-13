// document.getElementById("register-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // prevent form submission

//     let fullname = document.getElementById("fullname").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;
//     let password = document.getElementById("password").value;
//     let confirmPassword = document.getElementById("confirm-password").value;
//     let errorMessage = document.getElementById("error-message");

//     // simple validation
//     if (password.length < 6) {
//         errorMessage.textContent = "password must be at least 6 characters!";
//         return;
//     }

//     if (password !== confirmPassword) {
//         errorMessage.textContent = "passwords do not match!";
//         return;
//     }

//     alert("registration successful!");
//     window.location.href = "welcome.html"; // redirect after successful registration
// });
