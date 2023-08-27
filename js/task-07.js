const inputElem = document.querySelector("#font-size-control");
const spanElem = document.querySelector("#text");

inputElem.addEventListener("input", changeRange);

function changeRange(event) {
  const curentInputValue = event.currentTarget.value;
  spanElem.style.fontSize = curentInputValue + `px`;
}
