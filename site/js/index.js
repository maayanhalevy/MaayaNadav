// const loginForm = document.getElementById("login-form");
// const loginErrorMsg = document.getElementById("login-error-msg");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    const username = document.getElementById("username-field").value;
    const password = document.getElementById("password-field").value;
    e.preventDefault();

    if ((username === "Nadav" && password === "12345") || (username === "Maayan" && password === "12345")) {
        alert("You have successfully logged in.");
        window.location.replace("./homepage.html");
    }
})