const ulElem = document.querySelector(`#categories`);
const childElem = ulElem.children;
console.log("Number of categories:", childElem.length);

const liElem = document.querySelectorAll(".item");
liElem.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
