<?php
//Controlando los parametro GET que ingresaran
//Ej: localhost/cusojs/index.php?op=leccion1_prueba
if(empty($_GET["op"])) {
    $ruta = "contenido_principal";
}else{
    $op = $_GET["op"];
    //separando el nombre carpeta de archivo
    $parametros = explode("_",$op);
    $carpeta = $parametros[0]; //este es el nombre de la carpeta "leccion1"
    $archivo = $parametros[1]; //este es el nombre del archivo "prueba.php"
    
    if ($carpeta != "") {// Si la carpeta no es vacía
        $ruta = $carpeta."/".$archivo; //leccion1/prueba.php
    }else{
        //Enviar a un archivo de error 404
    }
}//if empty
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uso de JavaScript</title>
    <!-- Bootsrap css -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <!-- Bootsrap js -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>
    <!-- Bootstrap-icons-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
</head>

<body>
    <div class="container">
        <!-- Encabezado -->
        <div class="row bg-warning border-bottom">
            <div class="col-12 p-2 text-center">
                <?php
                include("archivos/encabezado.php");
                ?>

            </div>
        </div>
        <!-- Container -->
        <div class="row">
            <div class="col bg-warning col-lg-3 p-2">
                <?php
                    include("archivos/menuvertical.php");
                ?>

            </div>
            <div class="col col-lg-9 p-2 border" style="height:600px">
                <?php
                include("./contenido/".$ruta.".php");
                ?>
            </div>
        </div>
        <!-- Pie -->
        <div class="row bg-dark">
            <div class="col-12 p-2 text-center text-white">
                <?php include("archivos/pie.php");?>
            </div>
        </div>
    </div>
</body>

</html>