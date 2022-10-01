// event to the deposite button
document.getElementById("depositeButton").addEventListener("click",(e)=>{
    let depositeValue = getInputValue('depositeInput')
    let previousDepositeValue = getBalance('previousDepositeAmmount')

    let newDeposite = depositeValue + previousDepositeValue

    // update deposite box
    updateBalance('previousDepositeAmmount',newDeposite)

    // update main balance

    let previousMainBalance = getBalance('previousMainAmmount')

    console.log(previousMainBalance)
    updateMainBalance('previousMainAmmount',depositeValue,true)

})


// event to the withdraw button
document.getElementById("widthdrawButton").addEventListener("click",(e)=>{
    let withdrawValue = getInputValue('widthDrawInput')
    console.log(withdrawValue)
    let previousWithdrawValue = getBalance("previouswidthdrawAmmount")

    let newWithdrawAmount = withdrawValue + previousWithdrawValue

    // update withdraw box
    updateBalance('previouswidthdrawAmmount',newWithdrawAmount)

    updateMainBalance('previousMainAmmount',withdrawValue,false)
})




const getInputValue = (inputId)=>{
    let inputBox = document.getElementById(inputId);
    let inputBoxValue = inputBox.value;
    let inputValue = parseFloat(inputBoxValue);

    // clear the inputbox
    inputBox.value = ""

    return inputValue
}


const getBalance = (userId)=>{
    let balance = document.getElementById(userId);
    let balanceAmountString = balance.innerText;
    let balanceAmount = parseFloat(balanceAmountString);
    return balanceAmount
}

const updateBalance = (userId,amount)=>{
    let depositeBox= document.getElementById(userId);
    depositeBox.innerText = amount
}


const updateMainBalance = (userId,amount,isAdd)=>{
    let previousMainBalance = document.getElementById(userId)
    let previousMainBalanceString = previousMainBalance.innerText;

    let previousMainAmount = parseFloat(previousMainBalanceString)

    if (isAdd===true){
        previousMainBalance.innerText = previousMainAmount + amount
    }
    else{
        previousMainBalance.innerText = previousMainAmount - amount
    }
}