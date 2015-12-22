<?php
//Inicio la sesión 
session_start(); 

//COMPRUEBA QUE EL USUARIO ESTA AUTENTIFICADO 
if ($_SESSION["autentificado"] != "SI") { 
   	//si no existe, envio a la página de autentificacion 
   	header("Location: Trabajador.php"); 
   	//ademas salgo de este script 
   	exit(); 
}	
?>
        <?php
        // put your code here
        require_once ("BaseDatos.php");
        
        $bd=new BaseDatos();
        ?>
        <link rel="stylesheet" type="text/css" href="../css/main.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

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
        <a class="navbar-brand" href="Panel_Control.php">Inicio</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="#" data-toggle="modal" data-target="#trabajador">Nuevo Trabajador </a></li>
        <li><a href="#" data-toggle="modal" data-target="#producto">Articulo</a></li>

      </ul>
     
      <ul class="nav navbar-nav navbar-right">
        <li><a href="area_Trabajador.php" id="usuario" ><?php echo $_SESSION['nombre']; ?></a></li>

      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
        <div id="encabezado">
            <h1>Bienvenido <?php echo $_SESSION['nombre']; ?></h1>
        <form  action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">

            <button type="submit"  name="modificar">Modificar</button>

        </form>
</div>
        

	
        <?php

        
        if(isset($_POST['modificar'])){
            
            $param1=$_SESSION['nombre'];
           $val=[":email"=>"$param1"];
           $r=$bd->buscaDato("select * from Trabajadores where email=:email", $val);
           
         ?> <div class=row> 
    <div class="col-md-5 " >

            <form  action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
                <div class="well well-sm"> 
                <section id="datosInicio"> 
                <fieldset> 
                    <legend class=text-center>Datos de Inicio</legend> 
            <div class="form-group"> <label class="col-md-3 control-label" for="email">Tu email</label> <div class="col-md-9">
             
                    <input type="text" name="email1" value="<?php echo $r['email'] ?>" readonly="yes"></div></div>
                <div class="form-group"> <label class="col-md-3 control-label" for="pass">Pass</label> <div class="col-md-9">
                        <input type="text" name="pass" value="<?php echo $r['pass']?>"></div></div>
                </fieldset>
                </section>
            <input type="submit" class="btn btn-primary" style="margin-left:85%;" name="cambia" value="Aceptar"> 
                </div>
            </form>
    </div>
         </div>
            <?php

        }
        
            
        
        if(isset($_POST['cambia'])){
            ?><h2>Usuario a modificar:</h2><?php
            $param2=$_POST['pass'];
            $param3=$_POST['email1'];
            $val=[":pass"=>"$param2",":email1"=>"$param3"];
            $bd->modificar("update Trabajadores set pass=:pass where email=:email1;",$val);
        }
        
        
        ?>