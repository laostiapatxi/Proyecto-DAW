<?php

include("../php/mysql.php" );



function fatal_error($sErrorMessage = '') {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error');
    die($sErrorMessage);
}

if (!$gaSql['link'] = mysql_pconnect($gaSql['server'], $gaSql['user'], $gaSql['password'])) {
    fatal_error('Could not open connection to server');
}
if (!mysql_select_db($gaSql['db'], $gaSql['link'])) {
    fatal_error('Could not select database ');
}
mysql_query('SET names utf8');


$nombre = $_POST["nombre"];
$descripcion = $_POST["descripcion"];
$precio = $_POST["precio"];
$tipo = $_POST["tipo"];
$color = $_POST["color"];
$talla = $_POST["talla"];
$descripcion_corta = $_POST["descripcion_corta"];
$cod = $_POST["cod"];
$imagen = $_POST["imagen"];
$cantidad = $_POST["cantidad"];

$query = "UPDATE articulos SET 
            nombre = '" . $nombre . "', 
            descripcion = '" . $descripcion . "', 
            precio = '" . $precio . "', 
             
            tipo = '" . $tipo . "',
            color = '" . $color . "',
            talla = '" . $talla . "',
            descripcion_corta = '" . $descripcion_corta . "',
            cod = '" . $cod . "',
            imagen = '" . $imagen . "',
            cantidad = '" . $cantidad . "'
            WHERE cod = " . $cod;

$query_res = mysql_query($query);

if (!$query_res) {
    $mensaje  = 'Error en la consulta: ' . mysql_error() . "\n";
    $estado = mysql_errno();
}
else
{
    $mensaje = "Actualización correcta";
    $estado = 0;
}
$resultado = array();
 $resultado[] = array(
      'mensaje' => $mensaje,
      'estado' => $estado
   );
echo json_encode($resultado);
?>