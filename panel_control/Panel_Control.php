<!doctype html>
<html class="no-js">
<?php

session_start(); 

if ($_SESSION["autentificado"] != "SI") { 
   	
   	header("Location: Trabajador.php"); 
   	
   	exit(); 
}


        require_once ("../php/BaseDatos.php");
       
        $bd = new BaseDatos();
?>
<head>
    <meta charset="utf-8">
    <title>Ejercicios Datatables Servidor</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <link rel="stylesheet" href="jquery.dataTables.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.10/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/main.css">
   
</head>

<body>
   
    
    <div class="modal fade" id="producto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Nuevo Articulo</h4>
      </div>
      <form id="validForm" class="form-horizontal" action="../php/index.php" method="post"> 
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
                            <label for="tipo" class="col-sm-2 control-label" style="margin-right: 3%;">Tipo</label>
                            <select id='tipo' class="form-control" style="width: 50%;" name='tipo'></select>
                        </div>

                        <div class="form-group">
                            <label for="color" class="col-sm-2 control-label">Color</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" name="color" placeholder="color">
                            </div>
                        </div>
                            
                        <div class="form-group">
                            <label for="talla" class="col-sm-2 control-label" style="margin-right: 3%;">Talla</label>
                            <select id='tallas' class="form-control" style="width: 50%;" name='talla'></select>
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
                          
                        <div class="form-group">
                            <label for="cantidad" class="col-sm-2 control-label">Cantidad</label>
                            <div class="col-md-9">
                                <input type="number" class="form-control" name="cantidad" placeholder="Cantidad">
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
        <h4 class="modal-title" id="exampleModalLabel">Nueva Talla</h4>
      </div>
      <form  class="form-horizontal" action="../php/index.php" method="post"> 
      <div class="modal-body">

  


  <div class="form-group"> <label class="col-md-3 control-label" for="nombre">Nombre</label> <div class="col-md-9"> <input name="talla" placeholder="Nueva Talla" class="form-control" type="text"> </div> </div> 



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
        <button type="submit" class="btn btn-primary"  id="login_a" name="new_worker">Aceptar</button>
        
      </div>
      </form>
    </div>
  </div>
</div>     
    
    
    <div class="modal fade" id="tiposropa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Nuevo Tipo</h4>
      </div>
      <form  class="form-horizontal" action="../php/index.php" method="post"> 
      <div class="modal-body">

  


  <div class="form-group"> <label class="col-md-3 control-label" for="tipo">Nombre</label> <div class="col-md-9"> <input name="tipo" placeholder="Nuevo Tipo" class="form-control" type="text"> </div> </div> 



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
        <button type="submit" class="btn btn-primary"  id="login_a" name="new_tipo">Aceptar</button>
        
      </div>
      </form>
    </div>
  </div>
</div>      
    
     <div class="modal fade" id="borrando" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Borrar Articulo</h4>
      </div>

      <div class="modal-body" id="bgbg">
          
          <h4 class="modal-title" >¿Esta seguro de borrar el articulo?</h4>

      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
        <button type="submit" class="btn btn-primary" onclick="borrar_seguro()" id="borron" name="new_tipo">Borrar</button>

    </div>
  </div>
</div>       
  </div> 
     </div>
    
         <div class="modal fade" id="borrandotallas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Borrar Talla</h4>
      </div>

<form  class="form-horizontal" action="#" method="post"> 
      <div class="modal-body">

  
          <ul id="tallaspaborrar">
              
          </ul>
  <!-- Email input--> 
  <div class="form-group"> <label class="col-md-3 control-label" for="tallaborrar">Talla </label> <div class="col-md-9"> <input id="tallaborrar" name="tallaborrar" placeholder="Talla a borrar" class="form-control" type="text"> </div> </div> 



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Cancelar</button>
        <button type="submit" class="btn btn-primary" onclick="destruccion()" id="login_a" name="Buscar">Borrar</button>
        
      </div>
      </form>
  </div>
</div>       
  </div> 
     </div>
        <div class="modal fade" id="borrandotipos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Borrar Tipo</h4>
      </div>

  <form  class="form-horizontal" action="#" method="post"> 
      <div class="modal-body">

           <ul id="tipospaborrar">
              
          </ul> 

  <!-- Email input--> 
  <div class="form-group"> <label class="col-md-3 control-label" for="tipoborrar">Tipo </label> <div class="col-md-9"> <input id="tipoborrar" name="tipoborrar" placeholder="Tipo a borrar" class="form-control" type="text"> </div> </div> 



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Cancelar</button>
        <button type="submit" class="btn btn-primary" onclick="destruccion2()" id="login_a" name="Buscar">Borrar</button>
        
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
          <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tallas<span class="caret"></span></a>
          <ul class="dropdown-menu">
              <li><a href="#" data-toggle="modal" data-target="#trabajador">Nueva Talla</a></li>
              <li><a href="#" data-toggle="modal" data-target="#borrandotallas">Borrar Talla</a></li>
          </ul>
        </li>
                  <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tipos de ropa<span class="caret"></span></a>
          <ul class="dropdown-menu">
              <li><a href="#" data-toggle="modal" data-target="#tiposropa">Nuevo Tipo</a></li>
              <li><a href="#" data-toggle="modal" data-target="#borrandotipos">Borrar Tipo</a></li>
          </ul>
        </li>
        <li><a href="#" data-toggle="modal" data-target="#producto">Nuevo Articulo</a></li>
        

      </ul>
     
       <ul class="nav navbar-nav navbar-right">

        
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><?php echo $_SESSION['nombre']; ?><span class="caret"></span></a>
          <ul class="dropdown-menu">
              <li><a href="../php/cerrar_sesion.php">Cerrar Sesion</a></li>
          </ul>
        </li>

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
                        <th>tipo</th>
                        <th>color</th>
                        <th>talla</th>
                        <th>imagen</th>
                        <th>cantidad</th>
                        <th></th>

                    </thead>
                    <tbody>
                    </tbody>
                    <tfoot>
                        <th>cod</th>
                        <th>nombre</th>
                        <th>precio</th>
                        <th>tipo</th>
                        <th>color</th>
                        <th>talla</th>
                        <th>imagen</th>
                        <th>cantidad</th>
                        <th></th>

                    </tfoot>
                </table>

            </div>
        </div>
    </div>
    <div id="formdatos" class="row" style="display: none">
            <div class="col-md-6 col-md-offset-3">
                
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
                            <label for="tipo" class="col-sm-2 control-label">Tipo</label>
                            <div class="col-md-9">
                                <select id='tipo2' name='tipo'>
                                    
                                </select>
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
                                <select id='tallas2' name='talla'>
                                    
                                </select>
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
                            <label for="cantidad" class="col-sm-2 control-label">Cantidad</label>
                            <div class="col-md-9">
                                <input type="number" class="form-control" id="cantidad" placeholder="Cantidad">
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

  
     
 
     
     <div class="row" style="margin-top:5%;">
<div class="col-md-6"> 
	  	<h3 style="color:#2cabe2;">Cantidad de articulos por tipo</h3>

	    <canvas style="width:100% !important;" id="Holidays"> </canvas>
		<div class="col-sm-12"> 
		   <label><u><h4>Cantidad por tipo</h4></u></label>
		   <ul style="list-style:none;max-height:200px;width:100%;overflow:auto;" id="listado">
			
		   </ul>
		</div>
	 </div>
<div class="col-md-6"> 
	  	<h3 style="color:#2cabe2;">Cantidad de dinero por tipo</h3>

	    <canvas style="width:100% !important;" id="grafica2"> </canvas>
		<div class="col-sm-12"> 
		   <label><u><h4>Dinero por tipo</h4></u></label>
		   <ul style="list-style:none;max-height:200px;width:100%;overflow:auto;" id="listado2">
			
		   </ul>
		</div>
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
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.14.0/jquery.validate.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.js"></script>
    <script src="panel_control.js"></script>
    <script src="main.js"></script>
    <script src="../js/messaes_es.js"></script>
    <script src="graficas.js"></script> 
    <!-- endbuild -->


</body>

</html>