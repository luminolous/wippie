// Bootstrap form validation and simple success toast
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");
  const successToast = document.getElementById("successToast");
  const toastMessage = document.getElementById("toastMessage");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const registerPassword = document.getElementById("registerPassword");
      const confirmPassword = document.getElementById("confirmPassword");

      if (form.id === "registerForm") {
        if (registerPassword.value !== confirmPassword.value) {
          confirmPassword.setCustomValidity("Passwords do not match.");
        } else {
          confirmPassword.setCustomValidity("");
        }
      }

      if (form.checkValidity()) {
        if (form.id === "loginForm") {
          toastMessage.textContent = "Sign in form submitted successfully.";
        } else {
          toastMessage.textContent = "Registration form submitted successfully.";
        }

        const toast = new bootstrap.Toast(successToast);
        toast.show();

        form.reset();
        form.classList.remove("was-validated");
        return;
      }

      form.classList.add("was-validated");
    });
  });
})();