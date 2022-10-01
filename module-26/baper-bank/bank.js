
document.getElementById("depositeBtn").addEventListener("click",(e)=>{
    let previousAmmount = document.getElementById("previousDepositeAmmount")
    
    let depositeValue = document.getElementById("depositeDrawInput");
    // console.log(depositeValue)

    let mainBalance = document.getElementById("mainBalance")

    let totalValue = Number(previousAmmount.innerText) + Number(depositeValue.value)

    mainBalance.innerText = Number(mainBalance.innerText) + Number(depositeValue.value)

    console.log(totalValue)
    previousAmmount.innerText = totalValue  
    depositeValue.value = " "  
})



document.getElementById("withdrawBtn").addEventListener("click",(e)=>{
    let withdraw = document.getElementById("previousWithdrawAmmount")
    let mainBalance = document.getElementById("mainBalance")
    let withdrawAmmount = document.getElementById("withDrawInput")

    let totalValue =Number(withdraw.innerText) + Number(withdrawAmmount.value)

    
    
    if ((withdrawAmmount.value <= mainBalance.innerText) || mainBalance.innerText===0){
        mainBalance.innerText = Number(mainBalance.innerText) - Number(withdrawAmmount.value)
        withdraw.innerText = totalValue

    }
    else if(mainBalance.innerText === 0 ){
        window.alert("you don't have sufficient balance")
    }

    withdrawAmmount.value = " "

    // withdrawAmmount.value = " "
})

