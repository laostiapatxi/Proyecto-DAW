<?php

session_start();
include("mysql.php" );
?>
<?php
class BaseDatos {
    private $pass;
    private $usr;
    private $dsn;
    private $con;
    

public function __construct($dsn="mysql:host=localhost;dbname=alumno",$usr="root",$pass="alumno"){

    
    $this->dsn = $dsn;
    $this->usr = $usr;
    $this->pass = $pass;
    
    
    
    
}



public function comprobar_disponibilidad($param) {
    
    $contador=0;
    if (!$gaSql['link'] = mysql_pconnect($gaSql['server'], $gaSql['user'], $gaSql['password'])) {
    fatal_error('Could not open connection to server');
    }
    if (!mysql_select_db($gaSql['db'], $gaSql['link'])) {
        fatal_error('Could not select database ');
    }
    mysql_query('SET names utf8');
    
    for($i=0;$i<$param.lenght;$i++){
        
            $cod=$param[i][0];
            $query = "select cantidad from articulos where cod=" . $cod;
            $query_res = mysql_query($query);
            if ($param[i][1] > $query_res) {
                echo "<script> alert (\"No hay suficientes prendas\"); </script>";
                exit;
            } else {
                $contador++;
            }
        }
    if($contador==$param.lenght){
        
    }
}





public function trabajadores($sentencia=null,$parametros=null,$email=null){
    if($this->con==null){
    $con=  $this->conectar();}
    $resultado = $con->prepare($sentencia);
    $resultado->execute($parametros);
    $filas=$resultado->rowCount();
    if($filas==1){
        $autentificado="SI";
        $_SESSION["autentificado"]=$autentificado;
        $_SESSION["nombre"]=$email;
        echo "<script language=Javascript> location.href=\"Panel_Control.php\"; </script>";
    }else {
        echo "<script> alert (\"Email o contraseña erroneo\"); </script>";
         echo "<script language=Javascript> location.href=\"Trabajador.php\"; </script>";
    }
    $con->close();
    }
    
public function selecciona($sentencia=null,$parametros=null,$email=null){
    if($this->con==null){
    $con=  $this->conectar();}
    $resultado = $con->prepare($sentencia);
    $resultado->execute($parametros);
    $filas=$resultado->rowCount();
    if($filas==1){
        $autentificado="SI";
        $_SESSION["autentificado"]=$autentificado;
        $_SESSION["nombre"]=$email;
    echo "<script language=Javascript> location.href=\"Area_Cliente.php\"; </script>";
    }else {echo "<script> alert (\"Email o contraseña erroneo\"); </script>";
        echo "<script language=Javascript> location.href=\"../index.php\"; </script>";
    }
    $con->close();
    }


public function seleccionar($sentencia=null){
    if($this->con==null){
    $con=  $this->conectar();}
    $resul=  $con->query($sentencia);
    $datos=$resul->fetchAll();
    $con->close();
    return $datos;
    
    }


public function borrar($sentencia=null,$parametro=null) {
    if($this->con==null){
    $con=  $this->conectar();}
    $resultado = $con->prepare($sentencia);
    $resultado->execute($parametro);
    $filas=$resultado->rowCount();
    if($filas==1){
    echo "El usuario se ha borrado correctamente";
    }else {echo "Ese usuario no existe.";}
    $con->close();
}


public function insertar($sentencia=null,$param=null,$tipo=null) {    
    if($this->con==null){        
    $con=  $this->conectar();}
    $resultado = $con->prepare($sentencia);
    $resultado->execute($param);
    $filas=$resultado->rowCount();
    if($filas==1){
        if($tipo=="registro"){
       echo "<script> alert (\"Te has registrado correctamente\"); </script>"; 
       echo "<script language=Javascript> location.href=\"../index.php\"; </script>";
       die();}
         if($tipo=="articulo"){
       echo "<script> alert (\"Articulo creado correctamente\"); </script>"; 
       echo "<script language=Javascript> location.href=\"Panel_Control.php\"; </script>";
       die(); }}else {
        if($tipo=="registro"){
       echo "<script>alert(\"Ese email ya se encuentra en uso\");</script>";       
       echo "<script language=Javascript> location.href=\"../index.php\"; </script>";}
        if($tipo=="articulo"){
       echo "<script>alert(\"El articulo no se ha podido crear\");</script>";
       echo "<script language=Javascript> location.href=\"Panel_Control.php\"; </script>";}}
    $con->close();}

public function modificar($sentencia,$param) {
    if($this->con==null){
    $con=  $this->conectar();}
    $resultado = $con->prepare($sentencia);
    $resultado->execute($param);
    $filas=$resultado->rowCount();
    if($filas==1){
    echo "<p>El usuario se ha modificado correctamente</p>";
    }else {echo "Ha ocurrido un error.";}
    $con->close();
    
}

public function buscaDato($sentencia,$param1) {
    if($this->con==null){
    $con=  $this->conectar();}
    $resultado = $con->prepare($sentencia);
    $resultado->execute($param1);
    $datos =$resultado->fetch();
    return $datos;
}

public function conectar() {
    $this->con=new PDO($this->dsn, $this->usr, $this->pass);
    return $this->con;
}

}


