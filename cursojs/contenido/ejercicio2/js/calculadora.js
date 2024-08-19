var todosLosTables = document.getElementsByTagName("table");
todosLosTables[0].style =
  "display:block; margin:0 auto; padding:20px; background-color: #D0D3D4;  border: 5px;width: 300px ; height:500px; border-radius: 25px; border-style:inset";
var num1;
var num2;
var operacion="";

var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var cero = document.getElementById("cero");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var igual = document.getElementById("igual");
var limpiar = document.getElementById("limpiar");

uno.style = "width: 60px; height: 70px; font-size: 25px";
dos.style = "width: 60px; height: 70px; font-size: 25px";
tres.style = "width: 60px; height: 70px; font-size: 25px";
cuatro.style = "width: 60px; height: 70px; font-size: 25px";
cinco.style = "width: 60px; height: 70px; font-size: 25px";
seis.style = "width: 60px; height: 70px; font-size: 25px";
siete.style = "width: 60px; height: 70px; font-size: 25px";
ocho.style = "width: 60px; height: 70px; font-size: 25px";
nueve.style = "width: 60px; height: 70px; font-size: 25px";
cero.style = "width: 60px; height: 70px; font-size: 25px";
suma.style = "width: 60px; height: 70px; font-size: 25px";
resta.style = "width: 60px; height: 70px; font-size: 25px";
multiplicacion.style = "width: 60px; height: 70px; font-size: 25px";
division.style = "width: 60px; height: 70px; font-size: 25px";
igual.style = "width: 60px; height: 70px; font-size: 25px";
limpiar.style = "width: 60px; height: 70px; font-size: 25px";

var resultado = document.getElementById("resultado");

resultado.style =
  "display:block;text-align:right;font-size:40px;margin-bottom:50px;width:250px;height:100px;background-color: white";

uno.addEventListener("click", escucharUno);
dos.addEventListener("click", escucharDos);
tres.addEventListener("click", escucharTres);
cuatro.addEventListener("click", escucharCuatro);
cinco.addEventListener("click", escucharCinco);
seis.addEventListener("click", escucharSeis);
siete.addEventListener("click", escucharSiete);
ocho.addEventListener("click", escucharOcho);
nueve.addEventListener("click", escucharNueve);
cero.addEventListener("click", escucharCero);

suma.addEventListener("click", escucharSuma);
resta.addEventListener("click", escucharResta);
multiplicacion.addEventListener("click", escucharMultiplicacion);
division.addEventListener("click", escucharDivision);
igual.addEventListener("click", escucharIgual);
limpiar.addEventListener("click", escucharLimpiar);

function escucharUno() {
  resultado.textContent = resultado.textContent + 1;
}
function escucharDos() {
  resultado.textContent = resultado.textContent + 2;
}
function escucharTres() {
  resultado.textContent = resultado.textContent + 3;
}
function escucharCuatro() {
  resultado.textContent = resultado.textContent + 4;
}
function escucharCinco() {
  resultado.textContent = resultado.textContent + 5;
}
function escucharSeis() {
  resultado.textContent = resultado.textContent + 6;
}
function escucharSiete() {
  resultado.textContent = resultado.textContent + 7;
}
function escucharOcho() {
  resultado.textContent = resultado.textContent + 8;
}
function escucharNueve() {
  resultado.textContent = resultado.textContent + 9;
}
function escucharCero() {
  resultado.textContent = resultado.textContent + 0;
}
function borrar() {
  resultado.textContent = "";
}

function escucharSuma() {
  num1 = resultado.textContent;
  operacion = "+";
  borrar();
}

function escucharResta() {
  num1 = resultado.textContent;
  operacion = "-";
  borrar();
}

function escucharMultiplicacion() {
  num1 = resultado.textContent;
  operacion = "*";
  borrar();
}

function escucharDivision() {
  num1 = resultado.textContent;
  operacion = "/";
  borrar();
}

function escucharIgual() {
  num2 = resultado.textContent;
  resolver();
}
function escucharLimpiar(){
    resultado.textContent = "";
    num1 = 0;
    num2 = 0;
    operacion = "";
}

function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseInt(num1) + parseInt(num2);
      resultado.textContent = res;
      break;
    case "-":
      res = parseInt(num1) - parseInt(num2);
      resultado.textContent = res;
      break;
    case "*":
      res = parseInt(num1) * parseInt(num2);
      resultado.textContent = res;
      break;
    case "/":
      res = parseInt(num1) / parseInt(num2);
      resultado.textContent = res;
      break;
    default:
        resultado.textContent = "Error";
      break;
  }
  
}


