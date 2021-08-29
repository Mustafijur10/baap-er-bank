document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;
    depositInput.value = '';

    const balanceAmountText = document.getElementById('balance-total');
    const balanceAmount = balanceAmountText.innerText;

    const newBalanceAmount = parseFloat(balanceAmount) + parseFloat(newDepositAmount);
    balanceAmountText.innerText = newBalanceAmount;
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);

    withdrawTotal.innerText = Math.abs(newWithdrawTotal);
    withdrawInput.value = '';

    const balanceAmountText = document.getElementById('balance-total');
    const balanceAmount = balanceAmountText.innerText;

    const newBalanceAmount = parseFloat(balanceAmount) - parseFloat(newWithdrawAmount);
    balanceAmountText.innerText = newBalanceAmount;
})