<?php
session_start(); 
?>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<link href="../css/simple-sidebar.css" rel="stylesheet">
<link href="../css/main.css" rel="stylesheet">

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
        <li><a href="#">Area Cliente</a></li>
        <li><a href="tienda.php">Tienda</a></li>
        
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" id="usuario" ><?php echo $_SESSION['nombre']; ?></a></li>

      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

<div id="wrapper">

        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="tienda.php">
                        Menú de Articulos
                    </a>
                </li>
                <li>
                    <a href="#" class="menuoption" id="complementos">Complementos</a>
                </li>
                <li>
                    <a href="#" class="menuoption" id="camisetas">Camisetas</a>
                </li>
                <li>
                    <a href="#" class="menuoption" id="sudaderas">Sudaderas</a>
                </li>
                <li>
                    <a href="#" class="menuoption" id="chaquetas">Chaquetas</a>
                </li>
                <li>
                    <a href="#" class="menuoption" id="pantalones">Pantalones</a>
                </li>
                <li>
                    <a href="#" class="menuoption" id="calzado">Calzado</a>
                </li>
                <li>
                    <a href="#" class="menuoption" id="varios">Varios</a>
                </li>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="container-fluid" id="articulos">

            </div>
            <form action="maincarro.php" method="post">
                <input type="text" id="nombre" name="nombre" hidden="hide">
                <input type="text" id="precio" name="precio" hidden="hide">
                <input type="text" id="cod" name="cod" hidden="hide">
                <input type="text" id="imagen" name="imagen" hidden="hide">
                <input type="submit" name="enviar" value="Comprar">
            </form>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->

<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<script src="../js/producto.js"></script>
 