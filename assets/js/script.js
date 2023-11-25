//****************** Función Original ******************* */
// function pintar(){
//   ele.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

//****************** Función Modificada ****************** */
// const ele = document.getElementById("ele1");
// ele.addEventListener("click", function(){
//     ele.style.backgroundColor = "yellow"
// });

//****************** Función con argumento ******************* */

const ele = document.getElementById("ele1");

const colorDefault = (color) => {
  ele.style.backgroundColor = color;
};

ele.addEventListener("click", function (backgroundColor = green) {
  ele.style.backgroundColor = "yellow";
});

colorDefault("green");
