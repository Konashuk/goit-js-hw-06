const contairedElem = document.querySelector("#counter");
const plusBtnEl = contairedElem.firstElementChild;
const counterValue = document.querySelector("#value");
const minusBtnEl = contairedElem.lastElementChild;

let counterClick = 0;
updateCounter();

plusBtnEl.addEventListener("click", (event) => {
  counterClick++;
  updateCounter();
});
minusBtnEl.addEventListener("click", (event) => {
  counterClick--;
  updateCounter();
});
function updateCounter() {
  counterValue.textContent = counterClick;
}
