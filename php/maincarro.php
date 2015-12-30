<?php

session_start();
        // put your code here
        require_once ("vercarrito.php");
        require_once ("BaseDatos.php");
       
        $bd = new BaseDatos();
        $carrito = new Carrito();
        ?>


  
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<link rel="stylesheet" href="../css/main.css">


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
        <li><a href="#" id="usuario" ><?php echo $_SESSION['nombre']; ?></a></li>
        <li><a href="maincarro.php"><img style="max-width: 35px;" src="../css/imagenes/carro.png"/><span class="items_carro"><?php $tot=$carrito->articulos_total();echo $tot; ?></span></a></li>

      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

<?php
    $total=$carrito->articulos_total();
    if($total==0){
                  ?>
        <div class="table_carro">
            
            <h1 style="text-align: center; margin-top: 3%;">El carro está vacio</h1>
            <div class="container">
            <img style="margin: auto;margin-bottom: 3%;" src="../css/imagenes/empty.png">
            <button onclick="boton();" style="margin-bottom: 3%;"  class="btn btn-primary">Empezar a Comprar</button>
            </div>
        </div> 
        <?php
}else{
 
        

       $carro = $carrito->get_content();
        
        if($carro){ 
            ?>
<div class="table_carro">
                <table class="table tabla_cambios">
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                                <?php
                foreach($carro as $producto){
                    
                    if($producto['disponible']==0){
                        $carrito->remove_producto($producto['unique_id']);
                    }
                    
                    if($producto['cantidad']==0){
                        $carrito->remove_producto($producto['unique_id']);
                    }
                    ?><tr>
                        <td hidden="hide"><?php echo $producto["unique_id"];?></td>

                        <td><img style="max-width: 100px;max-height: 100px;" src="../css/imagenes/<?php echo $producto["imagen"];?>"/></td>
                        
                        <td><?php echo $producto["nombre"];?></td>

                        <td><form action="maincarro.php" method="post"><input type="submit"  name="restar" value="-"><?php  echo " ".$producto["cantidad"]." ";?>
                                <?php
                                if($producto['cantidad']<$producto['disponible']){
                                ?>
                                <button type="submit" name="añadir">+</button><?php } ?>
                            <input type="text" name="cod" value="<?php echo $producto["cod"];?>" hidden="hide" >
                            <input type="text" name="imagen" value="<?php echo $producto["imagen"];?>" hidden="hide" >
                            <input type="text" name="nombre" value="<?php echo $producto["nombre"];?>" hidden="hide" >
                            <input type="text" name="precio" value="<?php echo $producto["precio"];?>" hidden="hide" >
                            <input type="text" name="disponible" value="<?php echo $producto["disponible"];?>" hidden="hide" >
                            </form></td>

                        <td><?php  echo $producto["precio"]." €";?></td>

                        <td style="border-top: 0;"><form action="maincarro.php" method="post"><input type="text" name="unique_id" value="<?php echo $producto["unique_id"];?>" hidden="hide" ><input type="submit" class="btn btn-primary" name="borrar" value="Eliminar"></form></td>
                    </tr>
                    <?php
                }

                ?>
                    <tr><th colspan="3">Total</th><td>
                        <?php $r=$carrito->precio_total();
                                echo $r." €";?>
                        </td></tr>
            </table>
            <form method="post" action="maincarro.php">
                <input type="submit" name="comprame" value="Comprar" class="btn btn-primary cb2">
                <input type="submit" name="vaciar" value="Vaciar Carro" class="btn btn-primary cb1">
            </form>
</div>

        <?php
        }
}





















if(isset($_POST['comprame'])){
    
    $carro = $carrito->get_content();
    $id_pedido = rand(0, 1000);
    if($carro){ 
        
        $array=[];
        
        $array2=[];
        
	foreach($carro as $producto){
            
           $cod= $producto['cod'];
           
           $cantidad= $producto['cantidad'];
           
           $precio= $producto['precio'];
           
           $imagen= $producto['imagen'];
           

           
           $array2=[$cod,$cantidad,$precio,$imagen,$id_pedido];
           
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
    $cantidad = $_POST["cantidad"];
    

        $articulo = array(
		"nombre"                =>		$nombre,
		"precio"		=>		$precio,
                "cod"                   =>		$cod,
                "imagen"		=>		$imagen,
                "cantidad"		=>		1,
                "disponible"            =>		$cantidad,
	);
 
        $carrito->add($articulo);
        
 
    
    }
    
     if(isset($_POST['añadir'])){
    $nombre = $_POST["nombre"];
    $precio =$_POST["precio"];
    $cod = $_POST["cod"];
    $imagen = $_POST["imagen"];
    $disponible = $_POST["disponible"];


        $articulo = array(
		"nombre"                =>		$nombre,
		"precio"		=>		$precio,
                "cod"                   =>		$cod,
                "imagen"		=>		$imagen,
                "cantidad"		=>		1,
                "disponible"            =>		$disponible,
	);
 
        $carrito->add($articulo);
        
 
    
    }
         if(isset($_POST['restar'])){
    $nombre = $_POST["nombre"];
    $precio =$_POST["precio"];
    $cod = $_POST["cod"];
    $imagen = $_POST["imagen"];
    $disponible = $_POST["disponible"];

        $articulo = array(
		"nombre"                =>		$nombre,
		"precio"		=>		$precio,
                "cod"                   =>		$cod,
                "imagen"		=>		$imagen,
                "cantidad"		=>		1,
                "disponible"            =>		$disponible,
	);
 
        $carrito->remove($articulo);
        
 
    
    }
    
    if(isset($_POST['borrar'])){
        $cod=$_POST['unique_id'];
        $carrito->remove_producto($cod);
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

<script type="text/javascript">
    
    
    function boton(){
        location.href="tienda.php";
    }

    
</script>

