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

   $query = "SELECT * from articulos where cantidad>0"; 

/* Consulta UPDATE */

//mysql_query($query, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());
/*En función del resultado correcto o no, mostraremos el mensaje que corresponda*/
$resulset = mysql_query($query);
// Comprobar el resultado

$resultado = array();

while ($obj = mysql_fetch_object($resulset)) {
    $resultado[] = array('nombre' => $obj->nombre,
                   'precio' => utf8_encode($obj->precio),
                   'descripcion_corta' => $obj->descripcion_corta,
                   'imagen' => $obj->imagen,
                   'cod' => $obj->cod,
                   'cantidad' => $obj->cantidad,
        );
}

echo json_encode($resultado);
?>