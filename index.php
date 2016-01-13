
<?php

session_start();
        // put your code here
        require_once ("carro/vercarrito.php");

        $carrito = new Carrito();
        ?>


        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        
   <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Indentificacion</h4>
      </div>
      <form id="validForm" class="form-horizontal" action="php/index.php" method="post"> 
      <div class="modal-body">

  

  <!-- Email input--> 
  <div class="form-group"> <label class="col-md-3 control-label" for="email">Tu email<span class="required"> *</span> </label> <div class="col-md-9"> <input id="email" name="email1" placeholder="Tu email" class="form-control" type="email"> </div> </div> 

   <!-- Contraseña input--> 
   <div class="form-group"> <label class="col-md-3 control-label" for="pass">Contraseña<span class="required"> *</span> </label> <div class="col-md-9"> <input id="pass" name="pass1" placeholder="Contraseña" class="form-control" type="password"> </div> </div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Cancelar</button>
        <button type="submit" class="btn btn-primary"  id="login_a" name="Buscar">Aceptar</button>
        
      </div>
      </form>
    </div>
  </div>
</div>     
 
        
        
        <div id="wrap" style="margin-bottom: 5%;">

	<div id="header">
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
      <a class="navbar-brand" href="index.php">Inicio</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="tienda/tienda.php">Tienda</a></li>
        <li><a href="registro/Registro.php">Registrarse</a></li>        
      </ul>

      <ul class="nav navbar-nav navbar-right">
         <?php
        if(isset($_SESSION['nombre'])){
        ?>   
        
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><?php echo $_SESSION['nombre']; ?><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="area_cliente/Area_Cliente.php">Mis Datos</a></li>
            <li><a href="php/cerrar_sesion.php">Cerrar Sesion</a></li>
          </ul>
        </li>
        <?php
        }else{
        ?>
        <li><a href="#" id="login" data-toggle="modal" data-target="#login">Iniciar sesión</a></li>
        <?php
        }
        ?>
        <li><a href="carro/maincarro.php"><img style="max-width: 35px;" src="css/imagenes/carro.png"/><span class="items_carro"><?php $total=$carrito->articulos_total();echo $total; ?></span></a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
	</div>

	<div id="main">
            
<div id="indexmen">
<h2 id="be">¿Quienes somos?</h2>
<p>La tienda de lolo es una empresa que nace en Cataluña con el fin de atender el dilatado mercado textil.</p>
<p>Con mas de 30 años de experiencia damos el salto a la red para llegar a un mayor numero de personas.</p>
<p>No dudes en ojear nuestra tienda online y sientete libre de comprar desde la comodidad de tu casa.</p>
</div>
<div class="indexcon1">
<div class="indexcon">
<div id="uno"><h1>Ultimas novedades</h1></div>
</div>
<div class="indexcon">
<div>
<div class="dos"><h3 >Lanzada campaña de primavera</h3></div>
<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-4by3">
<iframe class="embed-responsive" id="frame" height="315"  width="560" allowfullscreen="" src="https://www.youtube.com/embed/ai-PF0bBwhA"></iframe>
</div>
</div>
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
        
        
        
        
 


<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

