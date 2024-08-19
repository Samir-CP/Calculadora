// // const nombre = "John";
// // const nombre2 = "Smith";
// // const nombreApellido = "John Smith";

// // console.log(nombre);
// // document.write(nombreApellido);

// const nombre = 'Atila';
// const apodo = ' el huno';
// const completo = nombre + apodo;

// console.log(completo);
// const zona = "Mancha";

// //Con plantillas
// const libro = `En un lugar de la ${zona} cuyo nombre no me quiero acordar...`;

// console.log(libro);

// // Concatenar con la función "concat"
// const lugar = "Notre-Dame tiene una altura de ";
// const altura = 128;
// const medida = " metros";
// const textoCompuesto = ''.concat(lugar,altura,medida);
// console.log(textoCompuesto);

// //Funciones para convertir en mayúscula, minúscula y la longitud de la cadena
// const cadenaNormal = 'El 90% de nuestra desiciones las toma nuesto subconsciente';

// // Convierte en mayusculas
// const cadenaMayusculas = cadenaNormal.toUpperCase();
// document.write("<br>"+cadenaMayusculas);
// // Convierte en minúsculas
// const cadenaMinusculas = cadenaNormal.toLowerCase();
// document.write("<br>"+cadenaMinusculas);
// // Número de carácteres
// const longitud = cadenaNormal.length;
// document.write("<br>"+longitud);

const cita = "Compartir el conocimiento es el acto más fundamental de la amistad. Porque es una forma de dar algo sin perder nada.";
 
const citaMayuscula = cita.toUpperCase();
console.log(citaMayuscula);
const citaMinuscula = cita.toLowerCase();
console.log(citaMinuscula);

const longitud = cita.length;
console.log("longitud de la cadena "+longitud);

const sinEspacios = cita.replace(/ /g, "");
const longitudSinEspacios = sinEspacios.length;
console.log("longitud sin espacios de la cadena "+longitudSinEspacios);

//2
const anios = 2022 - 1958;
console.log("Madonna tiene: " + anios + " años");

const fecha = new Date();
const anioActual = fecha.getFullYear();
console.log("El año actual es: " + anioActual);