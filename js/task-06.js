const inputElem = document.querySelector("#validation-input");

console.log(inputElem);

inputElem.addEventListener("blur", checkInputLength);

function checkInputLength(event) {
  const inputLength = event.currentTarget.value.length;
  const expectedLength = Number(inputElem.dataset.length);

  if (inputLength === expectedLength) {
    inputElem.classList.add("valid");
    inputElem.classList.remove("invalid");
  } else {
    inputElem.classList.add("invalid");
    inputElem.classList.remove("valid");
  }
}
