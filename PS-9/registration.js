function validateForm() {
    var firstName = document.getElementById("firstName").value;

    var password = document.getElementById("password").value;
  
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