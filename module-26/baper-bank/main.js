document.getElementById("submitBtn").addEventListener("click",(e)=>{
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;

    // console.log(inputEmail)
    // console.log(inputPassword)

    if (inputEmail === "t.limon2342@gmail.com" && inputPassword === "sisis2342boss"){
        window.location.href = "/bank.html"
    }
    else{
        window.alert('please insert correct email and password')

        inputEmail = " "
        inputPassword = " "
    }

})