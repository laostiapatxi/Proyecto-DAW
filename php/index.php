<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        
        <title></title>
    </head>
    <body>
        <?php
        // put your code here
        require_once ("BaseDatos.php");
        
        $bd=new BaseDatos();
        ?>
        
       
        
  
     

        
        
         
    

	
        <?php   
            
        
        
            if(isset($_POST['new_articulo'])){
                $operacion="articulo";
                $nombre = $_POST["nombre"];
                $descripcion = $_POST["descripcion"];
                $precio = $_POST["precio"];
                $genero = $_POST["genero"];
                $tipo = $_POST["tipo"];
                $color = $_POST["color"];
                $talla = $_POST["talla"];
                $descripcion_corta = $_POST["descripcion_corta"];
                $cod = null;
                $imagen = $_POST["imagen"];
                $parametros=[":nombre"=>"$nombre",":descripcion"=>"$descripcion",":precio"=>"$precio",":genero"=>"$genero",":tipo"=>"$tipo",":color"=>"$color",":talla"=>"$talla",":descripcion_corta"=>"$descripcion_corta",":cod"=>"$cod",":imagen"=>"$imagen"];
                $r=$bd->insertar("insert into articulos values(:nombre,:descripcion,:precio,:genero,:tipo,:color,:talla,:descripcion_corta,:cod,:imagen)",$parametros,$operacion);
              
           }
        
            if(isset($_POST['Buscar'])){
              $email=$_POST['email1'];
              $pass=$_POST['pass1'];
              $parametros=[":email1"=>"$email",":pass1"=>"$pass"];
              $r=$bd->selecciona("select * from usuarios where email=:email1 and pass=:pass1;",$parametros,$email);
              
           }

            if(isset($_POST['crear'])){
                $operacion="registro";
                $param2=$_POST['email'];
                $param3=$_POST['pass'];
                $param=[":email"=>"$param2",":pass"=>"$param3"];           
                $bd->insertar("insert into usuarios values(:email,:pass);",$param,$operacion);

            }
             if(isset($_POST['new_worker'])){
                $operacion="articulo";
                $param2=$_POST['email'];
                $param3=$_POST['pass'];
                $param=[":email"=>"$param2",":pass"=>"$param3"];           
                $bd->insertar("insert into Trabajadores values(:email,:pass);",$param,$operacion);

            }
        ?>
        

        
        
 


    </body>
</html>
