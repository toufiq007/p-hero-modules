/**
 * Steps
 * 1: add event listener to the deposite button
 * 2: get deposite amount from the depositeInput field
 * 3: convert string deposite amount to a number type
 * 4: clear the deposite input field
 * 5: get the previous deposite total
 * 6: calculate the previous deposite value and new deposite value
 * 7: get previous main balance and update the main balance with the newDeposite vlaue
 */

document.getElementById("depositeButton").addEventListener("click", (e) => {
    // step 2
    let depositeField = document.getElementById("depositeInput");
    let newDepositeAmountString = depositeField.value;

    // step 3
    let newDepositeAmount = parseFloat(newDepositeAmountString);

    // step 4
    let previousDepsite = document.getElementById("previousDepositeAmmount");
    let previousDepsiteString = previousDepsite.innerText;

    let prevoiusDepositeTotal = parseFloat(previousDepsiteString);

    // step 5
    previousDepsite.innerText = newDepositeAmount + prevoiusDepositeTotal;

    // step 6
    depositeField.value = "";

    // step 7
    let previousMainBalance = document.getElementById("previousMainAmmount");
    let previousMainBalanceString = previousMainBalance.innerText;
    let previousMainBalanceTotal = parseFloat(previousMainBalanceString);

    previousMainBalance.innerText =
        previousMainBalanceTotal + newDepositeAmount;
});




// withdraw amount
document.getElementById("widthdrawButton").addEventListener("click",(e)=>{
    // step 2
    let previousWithdraw = document.getElementById("widthDrawInput")
    let previousWithdrawString = previousWithdraw.value;
    let previousWithdrawAmount = parseFloat(previousWithdrawString)


    // step 3
    previousWithdraw.value = ""

    // step 4
    let previouswidthdrawAmmount = document.getElementById("previouswidthdrawAmmount")
    let previouswidthdrawAmmountString = previouswidthdrawAmmount.innerText;

    let previousWithdrawAmountTotal = parseFloat(previouswidthdrawAmmountString)

    // step 5
    previouswidthdrawAmmount.innerText = previousWithdrawAmountTotal + previousWithdrawAmount

    // step 6
    let previousMainBalance = document.getElementById('previousMainAmmount')

    let previousMainBalanceString = previousMainBalance.innerText

    let previousMainBalanceTotal = parseFloat(previousMainBalanceString)


    // step 7
    previousMainBalance.innerText = previousMainBalanceTotal - previousWithdrawAmount
  

})
