// redirect page
document.getElementById("submit-button").addEventListener("click",function(){
  let emailValue = document.getElementById("userEmail");
  let passValue  = document.getElementById("userPass");
  if (emailValue.value == "limon@gmail.com" && passValue.value == "limon23"){
    window.location.href = "banking.html";
    console.log("facebook")
  }
  else{
    window.alert("Error!!!Login failed");
    console.log("what is it")
  }
})