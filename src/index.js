const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const button = document.querySelector("#return-change");
const out = document.querySelector("#output");

const notes = [2000, 500, 200, 100, 50, 20, 10, 1];
const notes_area = document.querySelectorAll(".number-of-notes");
button.addEventListener("click", function calculateAmountToBeReturned() {
  console.log(billAmount.value);
  console.log(cashGiven.value);
  if (billAmount !== "" && cashGiven !== "") {
    if (billAmount.value > 0 && cashGiven.value > 0) {
      let returnedAmt = cashGiven.value - billAmount.value;
      calculateChange(returnedAmt);
    } else {
      out.style.display = "block";
      out.innerText = "bill Amt or cash given should be greater than 0";
    }
  } else {
    out.style.display = "block";
    out.innerText = "Please enter a legit value";
  }
});

function calculateChange(amountReturnValue) {
  for (let i = 0; i < notes.length; i++) {
    let note_value = Math.trunc(amountReturnValue / notes[i]);
    amountReturnValue %= notes[i];
    notes_area[i].innerText = note_value;
  }
}
