const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const button = document.querySelector("#return-change");
const out = document.querySelector("#output");

const notes = [2000, 500, 200, 100, 50, 20, 10, 1];
const notes_area = document.querySelectorAll(".number-of-notes");
button.addEventListener("click", function calculateAmountToBeReturned() {
  if (billAmount.value > 0) {
    if (cashGiven.value <= billAmount.value) {
      let amountToBeReturned = cashGiven.value - billAmount.value;
      console.log(amountToBeReturned);
      calculateChange(amountToBeReturned);
    } else {
      out.style.display = "block";
      out.innerText = "given amount should always be greater";
    }
  } else {
    out.style.display = "block";
    out.innerText = "Noting to pay!";
  }
});

function calculateChange(amountReturnValue) {
  for (let i = 0; i < notes.length; i++) {
    let note_value = Math.trunc(amountReturnValue / notes[i]);
    amountReturnValue %= notes[i];
    notes_area[i].innerText = note_value;
  }
}
