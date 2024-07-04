let username = document.querySelector("#loginUsername")
let password = document.querySelector("#loginPassword")
let signIn = document.querySelector("#sign_in")
let localUsername = localStorage.getItem("Username") 
let localPassword = localStorage.getItem("Password")
signIn.addEventListener("click", function (e) {
    e.preventDefault()
    if (username.value === "" || password.value === "") {
        alert("Please fill all fields below...")
    }
    else {
        if (localUsername && localUsername === username.value.trim() && localPassword === password.value) {
            setTimeout(() => {
            window.location = "index.html"  
            },1500)
        }
        else {
            alert("Invaild data..")
        }
    }
   
})
