let billAmount = document.getElementById("bill-amount");
let noOfPeople = document.getElementById("people-amount");

let billAmountValue = 0.00;
let peopleAmountValue = 1;

const fivePercent = document.querySelector(".five-percent");
const tenPercent = document.querySelector(".ten-percent");
const fifteenPercent = document.querySelector(".fifteen-percent");
const twentyfivePercent = document.querySelector(".twentyfive-percent");
const fiftyPercent = document.querySelector(".fifty-percent");
let customTip = document.querySelector(".custom-tip");

const zeroWarning = document.querySelector(".zero-warning");

const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");

const resetBtn = document.querySelector(".reset-btn");

function calculateTip(percent) {
    let tipAmountValue = (billAmountValue * percent).toFixed(2);

    updateTipPerPerson(tipAmountValue);

    let totalAmountValue = parseFloat(billAmountValue) + parseFloat(tipAmountValue);

    updateTotalPerPerson(totalAmountValue);
}

function updateTipPerPerson(tipAmountValue) {
    peopleAmountValue = parseInt(noOfPeople.value) || 1;

    tipAmountValue = tipAmountValue / peopleAmountValue;
    tipAmount.innerHTML = tipAmountValue.toFixed(2);

    return tipAmountValue;
}

function updateTotalPerPerson(totalAmountValue) {
    peopleAmountValue = parseInt(noOfPeople.value) || 1;

    totalAmountValue = (totalAmountValue / peopleAmountValue).toFixed(2);

    totalAmount.innerHTML = totalAmountValue;
}

billAmount.addEventListener("input", () => {
    billAmountValue = parseFloat(billAmount.value) || 0;
});

noOfPeople.addEventListener("input", () => {
    if (!noOfPeople.value || noOfPeople.value == 0) {
        zeroWarning.style.display = "inline";
    }

    else {
        zeroWarning.style.display = "none";
    }

    let totalAmountValue = parseFloat(billAmountValue) + parseFloat(tipAmount.innerHTML || 0);
    updateTotalPerPerson(totalAmountValue);
});

fivePercent.addEventListener("click", () => calculateTip(0.05));
tenPercent.addEventListener("click", () => calculateTip(0.1));
fifteenPercent.addEventListener("click", () => calculateTip(0.15));
twentyfivePercent.addEventListener("click", () => calculateTip(0.25));
fiftyPercent.addEventListener("click", () => calculateTip(0.5));

customTip.addEventListener("input", () => {
    let customTipValue = parseFloat(customTip.value) || 0;
    calculateTip(customTipValue / 100);
});

resetBtn.addEventListener("click", () => {
    // Reset all inputs and values
    billAmount.value = '';
    noOfPeople.value = '';
    customTip.value = '';
    billAmountValue = 0.00;
    peopleAmountValue = 1;

    // Reset displays
    tipAmount.innerHTML = '0.00';
    totalAmount.innerHTML = '0.00';
});
