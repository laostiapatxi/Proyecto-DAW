<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<?php
//Inicio la sesión 
session_start(); 

//COMPRUEBA QUE EL USUARIO ESTA AUTENTIFICADO 
if ($_SESSION["autentificado"] != "SI") { 
   	//si no existe, envio a la página de autentificacion 
   	header("Location: ../index.php"); 
   	//ademas salgo de este script 
   	exit(); 
}	


        require_once ("BaseDatos.php");
        require_once("vercarrito.php");
        $carrito=new Carrito();
        $bd=new BaseDatos();
?>
<html>
    <head>
        <title>Proyecto</title>
        <meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="../css/main.css">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
    </head>
    <body>
        
        <?php
        // put your code here

        ?> 
  
       <div class="modal fade" id="modal_borrar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Borrar usuario</h4>
      </div>
      <form id="validForm" class="form-horizontal" action="Area_Cliente.php" method="post"> 
      <div class="modal-body">

  
   
  <!-- Email input--> 
  <div class="form-group"> <label class="col-md-3 control-label" for="email">Tu email</label> <div class="col-md-9"> <input id="email" name="email" placeholder="Tu email" class="form-control" type="email" value="<?php echo $_SESSION['nombre']; ?>"> </div> </div> 

   <!-- Contraseña input--> 
   <div class="form-group"> <label class="col-md-3 control-label" for="pass">Contraseña</label> <div class="col-md-9"> <input id="pass" name="pass" placeholder="Contraseña" class="form-control" type="password" > </div> </div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
        <button type="submit" class="btn btn-default"  id="borrar" name="Eliminar">Aceptar</button>
        
      </div>
      </form>
    </div>
  </div>
</div>  
        
       <div id="wrap">       
        
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="../index.php">Inicio</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="tienda.php">Tienda</a></li>
        <li><a href="Registro.php">Registrarse</a></li>        
      </ul>
      <ul class="nav navbar-nav navbar-right">
           <?php
        if(isset($_SESSION['nombre'])){
        ?>   
        
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" id='user' data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><?php echo $_SESSION['nombre']; ?><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="Area_Cliente.php">Mis Datos</a></li>
            <li><a href="cerrar_sesion.php">Cerrar Sesion</a></li>
          </ul>
        </li>
        <?php
        }
        ?>
        <li><a href="maincarro.php"><img style="max-width: 35px;" src="../css/imagenes/carro.png"/><span class="items_carro"><?php $total=$carrito->articulos_total();echo $total; ?></span></a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
        
        
        
        
 <div class="table_carro">       

     <div class="row" style="margin: auto !important;">
    <div>
        <h2 class="mycss">Mi Panel</h2>
        <hr style="border-top: 1px solid orange;">
    </div>
<div id="aqui" class="span12 accesos">
<ul id="iconos">

<li>
<a href="#" class="picto-datos" id="showMyData">
<strong>Mis datos</strong>
<p>Actualice o modifique sus datos personales</p>
</a>
</li>

<li>
<a href="#" class="picto-pedidos" id="showMyData">
<strong>Mis pedidos</strong>
<p>Consulte su historial de pedidos</p>
</a>
</li>

<li>
<a href="#" class="picto-salir">
<strong>Salir</strong>
<p>Salir de la cuenta de cliente</p>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>  
        
            <div id="footer">
            <ul id="iconmenu">
            <li id="panel1c"><a href="https://twitter.com/"></a></li>
            <li id="panel2c"><a href="https://es-es.facebook.com/"></a></li>
            <li id="panel3c"><a href="http://www.rss.nom.es/"></a></li>
        </ul>
    </div>


	
        <?php
           
        

           
            
        
         
        if(isset($_POST['cambia'])){
            
            $param1=$_POST['email'];
            $param2=$_POST['pass'];
            $param4=$_POST['pass1'];
            $val=[":email"=>"$param1",":pass"=>"$param2",":pass1"=>"$param4"];
            $bd->modificar("update usuarios set pass=:pass1 where email=:email and pass=:pass;",$val);
        }
        
        
        ?>



<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

<script type="text/javascript" src="../js/area_cliente.js"></script>
              
    </body>

</html>


