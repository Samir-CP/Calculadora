//eventos


//añadiendo eventos
document.getElementById('nombre').addEventListener('change', asignarCodigo);
document.getElementById('apellido').addEventListener('change', asignarCodigo);
document.getElementById('ci').addEventListener('change', asignarCodigo);
document.getElementById('boton').addEventListener('click', escucharBoton);

function asignarCodigo(){
    let nom = document.getElementById('nombre').value;
    let s1 = nom.substring(0,1).toUpperCase();
    let s2 = nom.substring(1,2).toUpperCase();
    
    let ape = document.getElementById('apellido').value;
    let s3 = ape.substring(0,1).toUpperCase();
    let s4 = ape.substring(1,2).toUpperCase();
    
    let ci = document.getElementById('ci').value;
    let s5 = ci.substring(0,1);
    let s6 = ci.substring(1,2);
    
    let codigo = document.getElementById('codigo');
    codigo.value = s1 + s2 + s3 + s4 + s5 + s6;
}

function escucharBoton(){
    console.log('Presionaste el botón')
}