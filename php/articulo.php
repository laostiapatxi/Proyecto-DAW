<?php

include("mysql.php" );

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

if (isset($_REQUEST['cod'])) {

    $cod = $_REQUEST['cod'];
    $query = "select * from articulos where cod=" . $cod;
}
if (isset($_REQUEST['tipo'])) {
    

    $tipo = $_REQUEST['tipo'];
    $query = "select * from articulos where tipo='$tipo' and cantidad>0";
}


$resulset = mysql_query($query);

$resultado = array();

while ($obj = mysql_fetch_object($resulset)) {
    $resultado[] = array('nombre' => $obj->nombre,
                   'descripcion' => $obj->descripcion,
                   'precio' => utf8_encode($obj->precio),
                   'genero' => $obj->genero,
                   'tipo' => $obj->tipo,
                   'color' => $obj->color,
                   'talla' => $obj->talla,
                   'descripcion_corta' => $obj->descripcion_corta,
                   'cod' => $obj->cod,
                   'imagen' => $obj->imagen,
                   'cantidad' => $obj->cantidad,
                   
        );
}
echo json_encode($resultado);
?>