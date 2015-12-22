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
   	header("Location: ../index.html"); 
   	//ademas salgo de este script 
   	exit(); 
}	
?>
<html>
    <head>
        <title>Proyecto</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="../css/main.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
    </head>
    <body>
        
        <?php
        // put your code here
        require_once ("BaseDatos.php");
        
        $bd=new BaseDatos();
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
        <button type="submit" class="btn btn-primary"  id="borrar" name="Eliminar">Aceptar</button>
        
      </div>
      </form>
    </div>
  </div>
</div>     
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
      <a class="navbar-brand" href="../index.html">Inicio</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#" onclick="borron()" data-toggle="modal" data-target="#modal_borrar">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" id="usuario" ><?php echo $_SESSION['nombre']; ?></a></li>

      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
        
        <div id="encabezado">
            <h1>Bienvenido <?php echo $_SESSION['nombre']; ?></h1>
        <form  action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">

            <br/><button type="submit"  name="Borrar" >Borrar</button>
            <button type="submit"  name="modificar">Modificar</button>

        </form>
</div>
        
         <div id="contenidodo">
	
        <?php
           
        

            
        if(isset($_POST['Eliminar'])){ 
           ?><h2>Usuario a borrar: </h2><?php
           $a=$_POST['email'];
           $pass=$_POST['pass'];
           $val=[":email"=>"$a",":pass"=>"$pass"];
           $bd->borrar("delete from usuarios where email=:email and pass=:pass;",$val);
           
            }
            
        
        
      
        
        if(isset($_POST['modificar'])){
            
            $param1=$_SESSION['nombre'];
           $val=[":email"=>"$param1"];
           $r=$bd->buscaDato("select * from usuarios where email=:email", $val);
           
         ?> <h2>Usuario a modificar:</h2>
            <form  action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
            <div>
            <input type="text" name="email1" value="<?php echo $r['email'] ?>" readonly="yes">Email Original<br/>
            <input type="text" name="email" value="<?php echo $r['email']?>">Email<br/>
            <input type="text" name="pass" value="<?php echo $r['pass']?>">Pass<br/>
            </div>
            <button type="submit" name="cambia">Modificar datos</button>
            </form>
            
            <?php

        }
        
            
        
        if(isset($_POST['cambia'])){
            ?><h2>Usuario a modificar:</h2><?php
            $param1=$_POST['email'];
            $param2=$_POST['pass'];
            $param3=$_POST['email1'];
            $val=[":email"=>"$param1",":pass"=>"$param2",":email1"=>"$param3"];
            $bd->modificar("update usuarios set email=:email,pass=:pass where email=:email1;",$val);
        }
        
        
        ?>
</div>

        <script type="text/javascript">
            function borron(){
                alert("Esta a punto de borrar su cuenta");
            }
        </script>
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.14.0/jquery.validate.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
        
              
    </body>

</html>
