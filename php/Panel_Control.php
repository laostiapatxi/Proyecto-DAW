<!doctype html>
<html class="no-js">
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
<head>
    <meta charset="utf-8">
    <title>Ejercicios Datatables Servidor</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <link rel="stylesheet" href="jquery.dataTables.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.10/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- endbuild -->
</head>

<body>
   
    
    <div class="modal fade" id="producto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Nuevo Articulo</h4>
      </div>
      <form id="validForm" class="form-horizontal" action="index.php" method="post"> 
      <div class="modal-body">

  

<div class="form-group">
                            <label for="nombre" class="col-sm-2 control-label">Nombre</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" name="nombre" placeholder="Nombre">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="descripcion" class="col-sm-2 control-label">Descripcion</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" name="descripcion" placeholder="descripcion">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="precio" class="col-sm-2 control-label">Precio</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" name="precio" placeholder="precio">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="genero" class="col-sm-2 control-label">Genero</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" name="genero" placeholder="genero">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="tipo" class="col-sm-2 control-label">Tipo</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" name="tipo" placeholder="tipo">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="color" class="col-sm-2 control-label">Color</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" name="color" placeholder="color">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="talla" class="col-sm-2 control-label">Talla</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" name="talla" placeholder="talla">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="descripcion_corta" class="col-sm-2 control-label">Descripcion Corta</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" name="descripcion_corta" placeholder="descripcion_corta">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="imagen" class="col-sm-2 control-label">Imagen</label>
                            <div class="col-md-9">
                                 <input  type="file" name="imagen" />

                            </div>
                        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
        <button type="submit" class="btn btn-primary"  id="nuevoArt" name="new_articulo">Aceptar</button>
        
      </div>
      </form>
    </div>
  </div>
</div> 
    
    <div class="modal fade" id="trabajador" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Nuevo Trabajador</h4>
      </div>
      <form id="validForm" class="form-horizontal" action="index.php" method="post"> 
      <div class="modal-body">

  

  <!-- Email input--> 
  <div class="form-group"> <label class="col-md-3 control-label" for="email">Tu email<span class="required"> *</span> </label> <div class="col-md-9"> <input id="email" name="email" placeholder="Tu email" class="form-control" type="email"> </div> </div> 

   <!-- Contraseña input--> 
   <div class="form-group"> <label class="col-md-3 control-label" for="pass">Contraseña<span class="required"> *</span> </label> <div class="col-md-9"> <input id="pass" name="pass" placeholder="Contraseña" class="form-control" type="password"> </div> </div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
        <button type="submit" class="btn btn-primary"  id="login_a" name="new_worker">Aceptar</button>
        
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
        <a class="navbar-brand" href="Panel_Control.php">Inicio</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="#" data-toggle="modal" data-target="#trabajador">Nuevo Trabajador </a></li>
        <li><a href="#" data-toggle="modal" data-target="#producto">Nuevo Articulo</a></li>

      </ul>
     
      <ul class="nav navbar-nav navbar-right">
        <li><a href="Area_Trabajador.php" id="usuario" ><?php echo $_SESSION['nombre']; ?></a></li>

      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
    <div class="container-fluid" style="margin: auto;">
        
        <div id="tabla" class="row">
            <div class="col-md-12">
                <table id="miTabla" class="table">
                    <thead>
                        <th>cod</th>
                        <th>nombre</th>
                        <th>precio</th>
                        <th>genero</th>
                        <th>tipo</th>
                        <th>color</th>
                        <th>talla</th>
                        <th>descripcion_corta</th>
                        <th>imagen</th>
                        <th></th>

                    </thead>
                    <tbody>
                    </tbody>
                    <tfoot>
                        <th>cod</th>
                        <th>nombre</th>
                        <th>precio</th>
                        <th>genero</th>
                        <th>tipo</th>
                        <th>color</th>
                        <th>talla</th>
                        <th>descripcion_corta</th>
                        <th>imagen</th>
                        <th></th>

                    </tfoot>
                </table>

            </div>
        </div>
    </div>
    <div id="formulario" class="row">
            <div class="col-md-6 col-md-offset-3">
                <!--/*el formulario es aproximadamente un copy-paste de http://getbootstrap.com/css/#forms -->
                <form class="form-horizontal" action="Panel_Control.php">
                    <div>
                        <div class="form-group">
                            <label for="nombre" class="col-sm-2 control-label">Nombre</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" id="nombre" placeholder="Nombre">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="descripcion" class="col-sm-2 control-label">Descripcion</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" id="descripcion" placeholder="descripcion">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="precio" class="col-sm-2 control-label">Precio</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" id="precio" placeholder="precio">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="genero" class="col-sm-2 control-label">Genero</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" id="genero" placeholder="genero">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="tipo" class="col-sm-2 control-label">Tipo</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" id="tipo" placeholder="tipo">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="color" class="col-sm-2 control-label">Color</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" id="color" placeholder="color">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="talla" class="col-sm-2 control-label">Talla</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" id="talla" placeholder="talla">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="descripcion_corta" class="col-sm-2 control-label">Descripcion Corta</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" id="descripcion_corta" placeholder="descripcion_corta">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="cod" class="col-sm-2 control-label">Cod</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" id="cod" placeholder="Cod">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="imagen" class="col-sm-2 control-label">Imagen</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" id="imagen" placeholder="Src imagen">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10 col-sm-offset-2">
                                <button id="enviar" type="submit" class="btn btn-primary">Enviar</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>

  

    <!-- build:js(.) scripts/vendor.js -->
    <!-- bower:js -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.js"></script>
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:js({app,.tmp}) scripts/ejercicio7.js -->
    <script src="https://cdn.datatables.net/1.10.10/js/jquery.dataTables.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <script src="datatables.js"></script>
    <!-- endbuild -->


</body>

</html>