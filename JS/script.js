function Amount(quantity){
    const givenAmountString = document.getElementById(quantity).value;
    const givenAmount = parseFloat(givenAmountString);
    return givenAmount;
}

document.getElementById("calculate-btn").addEventListener('click', function(){
    const incomeAmount = Amount("income");

    const foodExpense = Amount("food");
    const rentExpense = Amount("rent");
    const clothesExpense = Amount("clothes");

    const totalExpense = foodExpense + rentExpense + clothesExpense;

    const expense = document.getElementById("total-expense");
    expense.innerText = totalExpense;

    const newBalance = document.getElementById("balance");
    if(isNaN(incomeAmount && totalExpense)){
        alert("Give a Valid Amount")
    }
    else{
        newBalance.innerText = incomeAmount - totalExpense;
    }

})

document.getElementById("save-btn").addEventListener('click', function(){
    const savePercentage = Amount("save");
    const totalBalance = document.getElementById("balance").innerText;

    const savings = (totalBalance * savePercentage) / 100;

    const savingField = document.getElementById("saving-amount");
    savingField.innerText = savings;

    const finalBalance = document.getElementById("remaining-balance");
    finalBalance.innerText = totalBalance - savings;

})