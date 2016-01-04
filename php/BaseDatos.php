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
    $array=$param;
    $contador=0;
    if($this->con==null){
    $con=  $this->conectar();}
    $longitud=count($param);
    for($i=0;$i<$longitud;$i++){

            $cod=$param[$i][0];
            
            $query = "select cantidad from articulos where cod=" . $cod;
            
            foreach ($con->query($query) as $row) {
                 if ($param[$i][1] > $row['cantidad']) {
                echo "<script> alert (\"No hay suficientes prendas\"); </script>";
                exit;
            } else {
                $contador++;
            }
            }
    }
    
    if($contador==$longitud){
        
       for($i=0;$i<$longitud;$i++){
           
            $cod=$param[$i][0];
            $cantidad=$param[$i][1];
            $query = "select cantidad from articulos where cod=" . $cod;
            $con->query($query);
            
            foreach ($con->query($query) as $row) {
                
                 $cant= $row['cantidad'];

                 $resul= $cant-$cantidad;

                 $query2 = "update articulos set cantidad='$resul'where cod='$cod'";
                 $con->query($query2);
            }
    }
        if(isset($_SESSION['nombre'])){
            
        for($i=0;$i<$longitud;$i++){

            $cod=$param[$i][0];
            $cantidad=$param[$i][1];
            $precio=$param[$i][2];
            $imagen=$param[$i][3];
            $id_pedido=$param[$i][4];
            $nombre=$param[$i][5];
            $total=$param[$i][6];
            $usuario=$_SESSION['nombre'];

            $query3 = "insert into pedidos values('$cod','$cantidad','$precio','$imagen','$id_pedido','$usuario','$nombre','$total')";
            $con->query($query3);

        }
        
       
    }else{
        for($i=0;$i<$longitud;$i++){

            $cod=$param[$i][0];
            $cantidad=$param[$i][1];
            $precio=$param[$i][2];
            $imagen=$param[$i][3];
            $id_pedido=$param[$i][4];


            $query4 = "insert into pedidos values('$cod','$cantidad','$precio','$imagen','$id_pedido')";
            $con->query($query4);

        }
    }
        
    echo "<script> alert (\"Compra realizada con exito\"); </script>";
    unset($_SESSION["carrito"]);
    echo "<script language=Javascript> location.href=\"../index.php\"; </script>";
           
}
        
        $con->close();
        
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
    echo "<script>alert(\"Datos modificados correctamente\");</script>";
    echo "<script language=Javascript> location.href=\"Area_Cliente.php\"; </script>";
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


