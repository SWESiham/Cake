let userInfo = document.querySelector("#user_info");
let link = document.querySelector("#link");
let user = document.querySelector("#user");
if (localStorage.getItem("Username") != "") {
  link.remove();
  userInfo.style.display = "flex";
  userInfo.style.color = "white";
  user.innerHTML = localStorage.getItem("Username");
}
let logOutBtn = document.querySelector(".logout");
logOutBtn.addEventListener("click", function () {
  event.preventDefault();
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});


