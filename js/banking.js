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
    const depositInput = document.getElementById('withdraw-input');
    const newDepositAmount = depositInput.value;

    const depositTotal = document.getElementById('withdraw-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = Math.abs(newDepositTotal);
    depositInput.value = '';

    const balanceAmountText = document.getElementById('balance-total');
    const balanceAmount = balanceAmountText.innerText;

    const newBalanceAmount = parseFloat(balanceAmount) - parseFloat(newDepositAmount);
    balanceAmountText.innerText = newBalanceAmount;
})