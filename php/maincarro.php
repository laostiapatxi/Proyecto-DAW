<?php

session_start();
        // put your code here
        require_once ("vercarrito.php");
        require_once ("BaseDatos.php");
       
        $bd = new BaseDatos();
        $carrito = new Carrito();
        ?>


  
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
      <a class="navbar-brand" href="../index.html">Inicio</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#" onclick="borron()" data-toggle="modal" data-target="#modal_borrar">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          
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






<form method="post" action="maincarro.php">
    <input type="submit" name="vercarro" value="Ver Carro">
    <input type="submit" name="comprame" value="Comprar">
    <input type="submit" name="vaciar" value="Vaciar Carro">
</form>





<?php
//array que crea un producto
if(isset($_POST['vercarro'])){
$carro = $carrito->get_content();
if($carro){ 
    ?><table class="table">
        <th>ID</th>
            <th>Nombre</th>
                <th>Cantidad</th>
                    <th>Precio</th>
                        <?php
	foreach($carro as $producto){
            ?><tr>
		<td><?php echo $producto["unique_id"];?></td>

                <td><?php echo $producto["nombre"];?></td>

		<td><?php  echo $producto["cantidad"];?></td>

		<td><?php  echo $producto["precio"]." €";?></td>
                
                <td><form action="maincarro.php" method="post"><input type="text" name="unique_id" value="<?php echo $producto["unique_id"];?>" hidden="hide" ><input type="submit" name="borrar" value="borrar"></form></td>
            </tr>
            <?php
	}
        
        ?>
            <tr><th colspan="3">Total</th><td>
                <?php $r=$carrito->precio_total();
                        echo $r." €";?>
                </td></tr>
    </table><?php
}

}


if(isset($_POST['comprame'])){
    $carro = $carrito->get_content();
    
    if($carro){ 
        $array=[];
        $array2=[];
	foreach($carro as $producto){
           $cod= $producto['cod'];
           $cantidad= $producto['cantidad'];
           $array2=[$cod,$cantidad];
           $dato=count($array);
           $array[$dato]=$array2;
	}


}
   $bd->comprobar_disponibilidad($array); 
}
   
    
    if(isset($_POST['enviar'])){
    $nombre = $_POST["nombre"];
    $precio =$_POST["precio"];
    $cod = $_POST["cod"];
    $imagen = $_POST["imagen"];

        $articulo = array(
		"nombre"                =>		$nombre,
		"precio"		=>		$precio,
                "cod"                   =>		$cod,
                "imagen"		=>		$imagen,
                "cantidad"		=>		1
	);
 
        $carrito->add($articulo);
        

    
    }
    
    if(isset($_POST['borrar'])){
        $cod=$_POST['unique_id'];
        $carrito->remove_producto($cod);
    }
    
    if(isset($_POST['ver'])){
        $carrito->get_content();
    }
    
    if(isset($_POST['total'])){
        $carrito->precio_total();
    }
    
     if(isset($_POST['articulos'])){
        $carrito->articulos_total();
    }
    
     if(isset($_POST['vaciar'])){
        $carrito->destroy();
    }
    
    
?>