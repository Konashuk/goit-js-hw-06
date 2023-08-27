const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulElem = document.querySelector("#ingredients");
const murkup = ingredients.map((fruit) => {
  const liElem = document.createElement("li");
  const pElem = document.createElement("p");
  pElem.textContent = fruit;
  liElem.append(pElem);
  liElem.classList.add("item");
  return liElem;
});
ulElem.append(...murkup);
console.log(ulElem);
