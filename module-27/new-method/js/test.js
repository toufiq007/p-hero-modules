// deposite item
document.getElementById("depositeButton").addEventListener("click",function(){
  let depositeAmmount = getInputValue("depositeInput");
  if (depositeAmmount > 0){
    let depositeArea = updateAmmout("previousDepositeAmmount",depositeAmmount)
    mainAmmount("previousMainAmmount",depositeAmmount,true)
  }
  else{
    window.alert("please enter a valid number")
  }
})

// widthdraw item
document.getElementById("widthdrawButton").addEventListener("click",function(){
  let widthDrawAmmount = getInputValue("widthDrawInput")
  let myInitialBalance = getMyBalance("previousMainAmmount")
  if (widthDrawAmmount <= myInitialBalance && widthDrawAmmount > 0){
    let widthDrawArea  = updateAmmout("previouswidthdrawAmmount",widthDrawAmmount);
    mainAmmount("previousMainAmmount",widthDrawAmmount,false)
    console.log(widthDrawArea.innerText)
  }
  else{
    window.alert("OOpps!! Your Widthraw ammount is higher than your balance!! You can't widthraw")
  }
})


// share one function between to input fields
function getInputValue(inputId){
  let input = document.getElementById(inputId);
  let inputText = input.value;
  let inputTextValue = parseFloat(inputText);
  // set input box blank
  input.value = ""
  return inputTextValue;
}

function updateAmmout(inputId,ammout){
  // debugger;
  let input = document.getElementById(inputId);
  let inputText = input.innerText;
  let inputTextValue = parseFloat(inputText);
  input.innerText = inputTextValue + ammout;
  return input;
}

function getMyBalance(inputId){
  let balance = document.getElementById(inputId)
  let balanceItem = parseFloat(balance.innerText);
  return balanceItem;
}

function mainAmmount(mainBalance,newAmmount,isAdd){
  let balance = document.getElementById(mainBalance)
  let balanceItem = getMyBalance(mainBalance);
  if (isAdd == true){
    balance.innerText = balanceItem + newAmmount;
  }
  else{
    if (balanceItem >= newAmmount && newAmmount > 0){
      balance.innerText = balanceItem - newAmmount;
    }
    else{
      window.alert("please enter a valid number")
    }
  }
  return balance;
}
