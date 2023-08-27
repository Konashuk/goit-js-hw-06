const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const ulElem = document.querySelector(".gallery");
const imageElem = images.map(({ url, alt }) => {
  return `
    <li>
      <img src="${url}" alt="${alt}" width="250px" height="200px" />
    </li>`;
});
const markup = imageElem.join("");
ulElem.insertAdjacentHTML("afterbegin", markup);
ulElem.style.display = "flex";
ulElem.style.justifyContent = "space-between";
ulElem.style.listStyle = "none";
ulElem.style.backgroundColor = "gray";
ulElem.style.boxShadow = " 0px 4px 6px rgba(0, 0, 0, 0.1)";
