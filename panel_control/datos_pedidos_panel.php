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


   $query = "SELECT * from pedidos"; 


$resulset = mysql_query($query);


$resultado = array();

while ($obj = mysql_fetch_object($resulset)) {
    $resultado[] = array('tipo' => $obj->tipo,
                   'talla' => utf8_encode($obj->talla),
                   'precio' => $obj->precio,
                   'cantidad' => $obj->cantidad,
        );
}

echo json_encode($resultado);
?>