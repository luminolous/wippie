const loginForm = document.getElementById("loginForm");
const successAlert = document.getElementById("successAlert");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!loginForm.checkValidity()) {
    event.stopPropagation();
    loginForm.classList.add("was-validated");
    return;
  }

  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  console.log("Email:", email);
  console.log("Role:", role);
  console.log("Remember Me:", rememberMe);

  successAlert.classList.remove("d-none");

  setTimeout(function () {
    successAlert.classList.add("d-none");
  }, 3000);

  loginForm.reset();
  loginForm.classList.remove("was-validated");
});