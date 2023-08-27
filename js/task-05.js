const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", changeInput);

function changeInput(event) {
  const users = event.currentTarget.value;
  refs.span.textContent = users === `` ? `Anonymous` : users;
}
