<?php

session_start();
        // put your code here
        require_once ("vercarrito.php");

        $carrito = new Carrito();
        ?>
<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="../css/main.css">
        <link rel="stylesheet" type="text/css" href="../css/registro.css">

        
        
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

        <li><a href="maincarro.php"><img style="max-width: 35px;" src="../css/imagenes/carro.png"/><span class="items_carro"><?php $total=$carrito->articulos_total();echo $total; ?></span></a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>  


<div class=row> 
    <div class="col-md-5 col-md-offset-3" style="margin-top: 2%;">
     <form id="validForm" class="form-horizontal" action="index.php" method="post"> 
         <div class="well well-sm" style="background-color: white"> 
             <section id="datosRegistro"> 
                <fieldset> 
                    <legend class=text-center>Datos de Registro</legend>
                        <!-- Email input--> 
                        <div class="form-group">
                            <label class="col-md-3 control-label" for="email">Tu email
                                <span class="required"> *</span> 
                            </label> 
                            <div class="col-md-9"> 
                                <input id="email" name="email" placeholder="Tu email" class="form-control" value="">
                            </div>
                        </div> 

                        <!-- Re-Email input--> 
                        <div class="form-group">
                            <label class="col-md-3 control-label" for="reemail">Repetir email
                                <span class="required"> *</span>
                            </label> <div class="col-md-9">
                                <input id="reemail" name="reemail" placeholder="Repite tu email" class="form-control">
                            </div>
                        </div> 



                         <!-- Contraseña input--> 
                        <div class="form-group">
                            <label class="col-md-3 control-label" for="pass">Contraseña
                                <span class="required"> *</span>
                            </label> <div class="col-md-9">
                                <input id="pass" name="pass" placeholder="Contraseña" class="form-control" type="password">
                                <meter value="0" id="nivelComplejidad" min="0" low="20" high="40" max="100"></meter>
                                <label id="labelComplejidad"></label>
                            </div>
                        </div>

                          <!-- Re Contraseña input-->
                        <div class="form-group">
                            <label class="col-md-3 control-label" for="repass">Repite Contraseña
                                <span class="required"> *</span>
                            </label> <div class="col-md-9">
                                <input id="repass" name="repass" placeholder="Repite tu contraseña" class="form-control" type="password">
                            </div>
                        </div> 
                          
                </fieldset>
             </section>
             <div class="modal-footer">
                        <div class="form-group">
                            <div class="col-sm-10 col-sm-offset-2">
                                <button name="crear" type="submit" class="btn btn-primary" style="float: right">Enviar</button>
                                <button name="cancelar" id="palindex" class="btn btn-primary" style="float: right; margin-right: 1%;">Cancelar</button>
                            </div>
                                

                        </div>
                    </div>
            </div>
                </form>

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
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.14.0/jquery.validate.js"></script>

<script src="../js/vendor.js"></script> 
<script src="../js/main.js"></script>
<script src="../js/messaes_es.js"></script> 
<script type="text/javascript">
    $(document).ready(function () {
       $( "#palindex" ).on( "click", function() {
            location.href="../index.php";
       }); 
    });
</script>
