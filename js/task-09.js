function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const containerEl = document.querySelector(".widget");
const spanEl = document.querySelector(".color");

containerEl.addEventListener("click", changeColorClick);

function changeColorClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}
