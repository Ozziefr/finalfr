var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function saveData() {
  localStorage.setItem("emailArray", JSON.stringify(emailArray));
  localStorage.setItem("passwordArray", JSON.stringify(passwordArray));
}

function loadData() {
  emailArray = JSON.parse(localStorage.getItem("emailArray")) || [];
  passwordArray = JSON.parse(localStorage.getItem("passwordArray")) || [];
}

function register() {
  event.preventDefault();

  var email = document.getElementById("re").value;
  var password = document.getElementById("rp").value;
  var passwordRetype = document.getElementById("rrp").value;

  if (email == "") {
    alert("Email required.");
    return;
  } else if (password == "") {
    alert("Password required.");
    return;
  } else if (passwordRetype == "") {
    alert("Password required.");
    return;
  } else if (password != passwordRetype) {
    alert("Passwords don't match. Retype your password.");
    return;
  } else if (emailArray.indexOf(email) == -1) {
    emailArray.push(email);
    passwordArray.push(password);
    saveData();

    alert(email + " thanks for registration. \nTry to login now.");

    document.getElementById("re").value = "";
    document.getElementById("rp").value = "";
    document.getElementById("rrp").value = "";
  } else {
    alert(email + " is already registered.");
    return;
  }
}

function login() {
  event.preventDefault();

  var email = document.getElementById("se").value;
  var password = document.getElementById("sp").value;

  var i = emailArray.indexOf(email);

  if (i == -1) {
    if (email == "") {
      alert("Email required.");
      return;
    }
    alert("Email does not exist.");
    return;
  } else if (passwordArray[i] != password) {
    if (password == "") {
      alert("Password required.");
      return;
    }
    alert("Password does not match.");
    return;
  } else {
    alert(email + " you are logged in now. \nWelcome to our website.");

    document.getElementById("se").value = "";
    document.getElementById("sp").value = "";
    return;
  }
}

function forgot() {
  event.preventDefault();

  var email = document.getElementById("fe").value;

  if (emailArray.indexOf(email) == -1) {
    if (email == "") {
      alert("Email required.");
      return;
    }
    alert("Email does not exist.");
    return;
  }

  alert("Email is sent to your email. Check it in 24 hours. \nThanks");
  document.getElementById("fe").value = "";
}
