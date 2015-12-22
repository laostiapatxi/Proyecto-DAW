<?php

session_start();

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


$array=[
    $nombre = $_POST["nombre"],
    $descripcion = $_POST["descripcion"],
    $precio = $_POST["precio"],
    $genero = $_POST["genero"],
    $tipo = $_POST["tipo"],
    $color = $_POST["color"],
    $talla = $_POST["talla"],
    $descripcion_corta = $_POST["descripcion_corta"],
    $cod = $_POST["cod"],
    $imagen = $_POST["imagen"]
];



$datos=$_SESSION["carrito"];
$cantidad=count($datos);
$datos[$cantidad]=$array;


$_SESSION["carrito"]=$datos;

