// Seleccionando por su id

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
//var caja = document.querySelector(".miclase");
caja.innerHTML="Hola este es mi nuevo texto";
//cambiando su aspecto con hojas de estilo

caja.style = "background: red; width: 400px; height:200px; color:white; border-radius:10px";

var cajaTexto = caja.innerHTML;


var todosLosDivs =document.getElementsByTagName('div');
todosLosDivs[9].style = "background: blue; width: 200px; height:150px; color:white; border-radius:10px";

// todosLosDivs[10].style = "background: orange; width: 200px; height:100px; color:white; border-radius:10px";
// todosLosDivs[11].style = "background: orange; width: 200px; height:100px; color:white; border-radius:10px";


// console.log(todosLosDivs);

var todosLosNaranjas = document.getElementsByClassName('naranja');


//Recorriendo todos los objetos seleccionados los que tienen la clase naranja

for (let i = 0; i < todosLosNaranjas.length; i++) {
    console.log(todosLosNaranjas[i].innerHTML);
    todosLosNaranjas[i].style="background: yellow; width: 200px; height:100px; color:black; border-radius:10px";
}