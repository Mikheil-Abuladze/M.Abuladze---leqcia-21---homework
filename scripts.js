function formValidation() {
  const form = document.querySelector("#form");
  const emailInput = document.querySelector("#email");
  const nameInput = document.querySelector("#name");
  const passwordInput = document.querySelector("#password");
  const confirmPasswordInput = document.querySelector("#confirm-password");
  const ageInput = document.querySelector("#age");
  const personalNumberInput = document.querySelector("#personal-number");
  const mobileNumberInput = document.querySelector("#mobile-number");
  const dialog = document.querySelector("#confirmation-dialog");

  const showErrorMessage = (input, message) => {
    input.closest(".form-group").classList.remove("success");
    input.closest(".form-group").classList.add("error");
    input.closest(".form-group").querySelector(".error-message").textContent =
      message;
  };

  const showSuccessMessage = (input, message) => {
    input.closest(".form-group").classList.remove("error");
    input.closest(".form-group").classList.add("success");
    input.closest(".form-group").querySelector(".error-message").textContent =
      message;
  };

  const isNameValid = () => {
    const name = nameInput.value.trim();
    if (name === "") {
      showErrorMessage(nameInput, "Name is required");
      return false;
    }
    if (name.length < 3) {
      showErrorMessage(nameInput, "Name is too short");
      return false;
    }
    showSuccessMessage(nameInput, "Name is valid");
    return true;
  };

  const isEmailValid = () => {
    const email = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (email === "") {
      showErrorMessage(emailInput, "Email is required");
      return false;
    }
    if (!emailPattern.test(email)) {
      showErrorMessage(emailInput, "Email must be a valid Gmail address");
      return false;
    }
    showSuccessMessage(emailInput, "Email is valid");
    return true;
  };

  const isAgeValid = () => {
    const age = ageInput.value.trim();
    if (age < 0 || age > 10) {
      showErrorMessage(ageInput, "Age must be between 0 and 10");
      return false;
    }
    showSuccessMessage(ageInput, "Age is valid");
    return true;
  };

  const isPersonalNumberValid = () => {
    const personalNumber = personalNumberInput.value.trim();
    const numberPattern = /^\d{11}$/; //
    if (personalNumber === "") {
      showErrorMessage(personalNumberInput, "Personal number is required");
      return false;
    }
    if (!numberPattern.test(personalNumber)) {
      showErrorMessage(
        personalNumberInput,
        "Personal number must contain 11 digits"
      );
      return false;
    }
    showSuccessMessage(personalNumberInput, "Personal number is valid");
    return true;
  };

  const isMobileNumberValid = () => {
    const mobileNumber = mobileNumberInput.value.trim();
    const numberPattern = /^\d{9}$/;
    if (mobileNumber === "") {
      showErrorMessage(mobileNumberInput, "Mobile number is required");
      return false;
    }
    if (!numberPattern.test(mobileNumber)) {
      showErrorMessage(
        mobileNumberInput,
        "Mobile number must contain 9 digits"
      );
      return false;
    }
    showSuccessMessage(mobileNumberInput, "Mobile number is valid");
    return true;
  };

  const isPasswordValid = () => {
    const password = passwordInput.value.trim();
    if (password === "") {
      showErrorMessage(passwordInput, "Password is required");
      return false;
    }
    if (password.length < 6) {
      showErrorMessage(passwordInput, "Password must be at least 6 characters");
      return false;
    }
    showSuccessMessage(passwordInput, "Password is valid");
    return true;
  };

  const isConfirmPasswordValid = () => {
    const confirmPassword = confirmPasswordInput.value.trim();
    if (confirmPassword === "") {
      showErrorMessage(confirmPasswordInput, "Please confirm your password");
      return false;
    }
    if (confirmPassword !== passwordInput.value.trim()) {
      showErrorMessage(confirmPasswordInput, "Passwords do not match");
      return false;
    }
    showSuccessMessage(confirmPasswordInput, "Passwords match");
    return true;
  };

  nameInput.addEventListener("input", isNameValid);
  emailInput.addEventListener("input", isEmailValid);
  ageInput.addEventListener("input", isAgeValid);
  personalNumberInput.addEventListener("input", isPersonalNumberValid);
  mobileNumberInput.addEventListener("input", isMobileNumberValid);
  passwordInput.addEventListener("input", isPasswordValid);
  confirmPasswordInput.addEventListener("input", isConfirmPasswordValid);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isFormValid =
      isNameValid() &&
      isEmailValid() &&
      isAgeValid() &&
      isPersonalNumberValid() &&
      isMobileNumberValid() &&
      isPasswordValid() &&
      isConfirmPasswordValid();

    if (isFormValid) {
      console.log("Form is valid");
      dialog.showModal();
    }
  });
  const modal = document.querySelector("#reg-confirmation");

  const closeModalBtn = modal.querySelector(".close-modal");
  const closeDialogBtn = dialog.querySelector(".close-dialog");

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  closeDialogBtn.addEventListener("click", () => {
    dialog.close();
  });
}
formValidation();
