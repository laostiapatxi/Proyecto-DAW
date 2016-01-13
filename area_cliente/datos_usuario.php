<?php

session_start();
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


   $email=$_SESSION['nombre'];

   $query = "SELECT * from usuarios where email='$email'"; 


$resulset = mysql_query($query);


$resultado = array();

while ($obj = mysql_fetch_object($resulset)) {
    $resultado[] = array(
                   'email' => $obj->email,

                   'pass' => $obj->pass,

        );
}

echo json_encode($resultado);
?>