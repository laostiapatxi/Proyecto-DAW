<?php

session_start();
        // put your code here
        require_once ("vercarrito.php");
        require_once ("BaseDatos.php");
       
        $bd = new BaseDatos();
        $carrito = new Carrito();
        ?>


  
<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="../css/main.css">

<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Indentificacion</h4>
      </div>
      <form id="validForm" class="form-horizontal" action="index.php" method="post"> 
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
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><?php echo $_SESSION['nombre']; ?><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="Area_Cliente.php">Mis Datos</a></li>
            <li><a href="cerrar_sesion.php">Cerrar Sesion</a></li>
          </ul>
        </li>
        <?php
        }else{
        ?>
        <li><a href="#" id="login" data-toggle="modal" data-target="#login">Iniciar sesión</a></li>
        <?php
        }
        ?>
        <li><a href="maincarro.php"><img style="max-width: 35px;" src="../css/imagenes/carro.png"/><span class="items_carro"><?php $total=$carrito->articulos_total();echo $total; ?></span></a></li>
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
    
    $r=$carrito->precio_total();
    
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
           
           $nombre= $producto['nombre'];
           
           $total= $r;
           

           
           $array2=[$cod,$cantidad,$precio,$imagen,$id_pedido,$nombre,$total];
           
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

        
        
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<script type="text/javascript">
    
    
    function boton(){
        location.href="tienda.php";
    }

    
</script>

