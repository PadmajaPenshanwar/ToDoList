function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobileNumber").value;

    if (!/^[a-zA-Z]+$/.test(firstName) || firstName.length < 6) {
      alert("First name should contain alphabets only and be at least 6 characters long.");
      return false;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return false;
    }

    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
      alert("Invalid email format.");
      return false;
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      alert("Mobile number should contain 10 digits only.");
      return false;
    }

    if (lastName.trim() === "" || address.trim() === "") {
      alert("Last name and address should not be empty.");
      return false;
    }

    return true;
  }