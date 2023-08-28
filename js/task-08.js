const formElem = document.querySelector(".login-form");
console.dir(formElem);
formElem.addEventListener("submit", submitInput);

function submitInput(event) {
  event.preventDefault();
  const form = event.currentTarget.elements;
  const email = form.email.value;
  const password = form.password.value;
  if (!email || !password) {
    return alert("All field need to check");
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);

  formElem.reset();
}
