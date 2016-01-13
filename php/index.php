<!DOCTYPE html>

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

                $tipo = $_POST["tipo"];
                $color = $_POST["color"];
                $talla = $_POST["talla"];

                $descripcion_corta = $_POST["descripcion_corta"];
                $cod = null;
                $imagen = $_POST["imagen"];
                $cantidad=$_POST["cantidad"];
                $parametros=[":nombre"=>"$nombre",":descripcion"=>"$descripcion",":precio"=>"$precio",":tipo"=>"$tipo",":color"=>"$color",":talla"=>"$talla",":descripcion_corta"=>"$descripcion_corta",":cod"=>"$cod",":imagen"=>"$imagen",":cantidad"=>"$cantidad"];
                $r=$bd->insertar("insert into articulos values(:nombre,:descripcion,:precio,:tipo,:color,:talla,:descripcion_corta,:cod,:imagen,:cantidad)",$parametros,$operacion);
              
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
                $param2=$_POST['talla'];
                $param3=null;
                $param=[":idtalla"=>"$param3", ":nombre"=>"$param2"];           
                $bd->insertar("insert into talla values(:idtalla,:nombre);",$param,$operacion);

            }
            
            
            if(isset($_POST['new_tipo'])){
                $operacion="articulo";
                $param2=$_POST['tipo'];
                if($param2==""){
                    echo "<script> alert (\"El nombre no puede estar vacío\"); </script>";
                    echo "<script language=Javascript> location.href=\"../panel_control/Panel_Control.php\"; </script>";
                }else{
                $param3=null;
                $param=[":idcategoria"=>"$param3", ":nombre"=>"$param2"];           
                $bd->insertar("insert into categoria values(:idcategoria,:nombre);",$param,$operacion);
                }
            }
            
        ?>
        

        
        
 


    </body>
</html>
