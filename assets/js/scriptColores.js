document
  .getElementById("div1")
  .addEventListener("click", () => (div1.style.backgroundColor = "black"));
document
  .getElementById("div2")
  .addEventListener("click", () => (div2.style.backgroundColor = "black"));
document
  .getElementById("div3")
  .addEventListener("click", () => (div3.style.backgroundColor = "black"));
document
  .getElementById("div4")
  .addEventListener("click", () => (div4.style.backgroundColor = "black"));

//Variable global que almacenará el color dependiendo la letra presionada
let colorDiv;

document.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    colorDiv = "aqua";
  } else if (event.key === "s") {
    colorDiv = "brown";
  } else if (event.key === "d") {
    colorDiv = "purple";
  } else if (event.key === "q") {
    addDiv("#F4D03F");
  } else if (event.key === "w") {
    addDiv("#33FF33");
  } else if (event.key === "e") {
    addDiv("#EEEEEE");
  }
});

document.addEventListener("keydown", (event) => {
  div5.style.backgroundColor = colorDiv;
});

//Crea div 200x200 con el color de fondo según la letra presionada
const addDiv = (color) => {
  const createDiv = document.createElement("div");
  createDiv.style.height = "200px";
  createDiv.style.width = "200px";
  createDiv.style.border = "1px solid black";
  createDiv.style.backgroundColor = color;

  document.body.appendChild(createDiv);
};
