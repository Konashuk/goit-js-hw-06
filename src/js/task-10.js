function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divEl = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const inputDivEl = document.querySelector("#controls").firstElementChild;

createBtn.addEventListener(`click`, valueInput);

function createBoxes(amount) {
  let createDiv = ``;
  for (let i = 0; i < amount; i++) {
    createDiv += `<div></div>`;
  }
  divEl.innerHTML = createDiv;
}

function valueInput(event) {
  const valueInput = event.currentTarget.value;
  createBoxes(valueInput);
}
console.log(divEl);
console.log(createBtn);
console.dir(inputDivEl);
