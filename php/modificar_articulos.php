<?php
/* Database connection information */
include("mysql.php" );
/*
 * Local functions
 */
function fatal_error($sErrorMessage = '') {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error');
    die($sErrorMessage);
}
/*
 * MySQL connection
 */
if (!$gaSql['link'] = mysql_pconnect($gaSql['server'], $gaSql['user'], $gaSql['password'])) {
    fatal_error('Could not open connection to server');
}
if (!mysql_select_db($gaSql['db'], $gaSql['link'])) {
    fatal_error('Could not select database ');
}
mysql_query('SET names utf8');
/*
 * SQL queries
 * Get data to display
 */

$nombre = $_POST["nombre"];
$descripcion = $_POST["descripcion"];
$precio = $_POST["precio"];
$genero = $_POST["genero"];
$tipo = $_POST["tipo"];
$color = $_POST["color"];
$talla = $_POST["talla"];
$descripcion_corta = $_POST["descripcion_corta"];
$cod = $_POST["cod"];
$imagen = $_POST["imagen"];
/* Consulta UPDATE */
$query = "UPDATE articulos SET 
            nombre = '" . $nombre . "', 
            descripcion = '" . $descripcion . "', 
            precio = '" . $precio . "', 
            genero = '" . $genero . "', 
            tipo = '" . $tipo . "',
            color = '" . $color . "',
            talla = '" . $talla . "',
            descripcion_corta = '" . $descripcion_corta . "',
            cod = '" . $cod . "',
            imagen = '" . $imagen . "'
            WHERE cod = " . $cod;
//mysql_query($query, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());
/*En función del resultado correcto o no, mostraremos el mensaje que corresponda*/
$query_res = mysql_query($query);
// Comprobar el resultado
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