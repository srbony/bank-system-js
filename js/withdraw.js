

/*
1.add event handler with the withdraw button 
2.get the withdraw amount from yhe withdraw input field
2-5.also make sure to convert the input into a number by using parseFloat
3.get previous withdraw total
 4.calculate total withdraw amount
 4-5.set total withdraw amount
 5.get the previous balance total

 6.calculate new balance total
 6.5:set the new balance total
 7.clear the input field
*/

// step-1
document.getElementById('total-withdraw').addEventListener('click', function () {

    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const withrawPreviousString = withdrawField.value;
    const withrawCurrentAmount = parseFloat(withrawPreviousString);

    // step-7
    withdrawField.value = '';

    if (isNaN(withrawCurrentAmount)) {
        alert('please provide a valid number');
        return;
    }

    // step-3

    const withdrawElement = document.getElementById('withdraw-total');
    const withdrawPreviousTotalString = withdrawElement.innerText;
    const withrawCurrentElementAmount = parseFloat(withdrawPreviousTotalString);



    // step-5
    const previousWithdrawTotalElement = document.getElementById('balance-total');
    const previousTotalString = previousWithdrawTotalElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalString);



    if (withrawCurrentAmount > previousTotalAmount) {
        alert('You have not enough money');
        return;
    }
    // step-4
    const currentWithdrawTotal = withrawCurrentElementAmount + withrawCurrentAmount;
    withdrawElement.innerText = currentWithdrawTotal;


    // step-6
    const newBalaceTotal = previousTotalAmount - withrawCurrentAmount;
    previousWithdrawTotalElement.innerText = newBalaceTotal;


    console.log(newBalaceTotal);





})