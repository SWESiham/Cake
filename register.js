let username = document.querySelector("#regiserUsername");
let email = document.querySelector("#regiserEmail");
let password = document.querySelector("#regiserPassword");
let signUp = document.querySelector("#sign_up");

signUp.addEventListener("click", function (e) {
    e.preventDefault()
  if (
    username.value === "" ||
    email.value === "" ||
    password.value === ""
  ) {
    alert("Please, fill all fields..");
  } else {
    localStorage.setItem("Username", username.value);
    localStorage.setItem("Email", email.value);
      localStorage.setItem("Password", password.value);
      setTimeout(() =>{
          window.location ="login.html"
      },1500)
  }
});
