function validateForm(event) {
    event.preventDefault();
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var usernameError = document.getElementById('username-error');
    var passwordError = document.getElementById('password-error');

    var usernamePattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    var passwordPattern = /^(?=.*[A-Z])(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!usernamePattern.test(usernameInput.value)) {
      usernameError.textContent = "Username should contain at least one uppercase letter, one lowercase letter, one special character, one number, and be at least 8 characters long.";
      return false;
    } else {
      usernameError.textContent = "";
    }

    if (!passwordPattern.test(passwordInput.value)) {
      passwordError.textContent = "Password should contain at least one uppercase letter, one special character, and be at least 8 characters long.";
      return false;
    } else {
      passwordError.textContent = "";
    }

    // Additional validation or login logic can be added here
    
    return true;
  }