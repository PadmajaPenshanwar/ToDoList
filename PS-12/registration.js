function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobileNumber").value;

    if (!/^[a-zA-Z]{6,}$/.test(firstName)) {
      alert("First name should contain alphabets only and be at least 6 characters long.");
      return false;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return false;
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      alert("Mobile number should contain 10 digits only.");
      return false;
    }

    return true;
  }
  document.addEventListener("DOMContentLoaded", function() {
    var daySelect = document.getElementById("dobDay");
    var yearSelect = document.getElementById("dobYear");
    var currentYear = new Date().getFullYear();
    
    for (var i = 1; i <= 31; i++) {
      daySelect.options.add(new Option(i, i));
    }
    
    for (var i = currentYear; i >= currentYear - 100; i--) {
      yearSelect.options.add(new Option(i, i));
    }
  });