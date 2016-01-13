
<?php
    // put your code here
    require_once ("../php/BaseDatos.php");
        
    $bd=new BaseDatos();
?>

<?php

if(isset($_POST['Buscar'])){
              $email=$_POST['email'];
              $pass=$_POST['pass'];
              $parametros=[":email"=>"$email",":pass"=>"$pass"];
              $r=$bd->trabajadores("select * from Trabajadores where email=:email and pass=:pass;",$parametros,$email);

           }

?>

<link rel="stylesheet" type="text/css" href="../css/main.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  
<div class=row> 
    <div class="col-md-5 col-md-offset-3" style="margin-top: 2%;">
     <form id="validForm" class="form-horizontal" action="Trabajador.php" method="post"> 
         <div class="well well-sm"> 
             <section id="datosInicio"> 
                <fieldset> 
                    <legend class=text-center>Datos de Inicio</legend> 

  

  <!-- Email input--> 
  <div class="form-group"> <label class="col-md-3 control-label" for="email">Tu email</label> <div class="col-md-9"> <input id="email" name="email" placeholder="Tu email" class="form-control" type="email"> </div> </div> 

   <!-- Contraseña input--> 
   <div class="form-group"> <label class="col-md-3 control-label" for="pass">Contraseña</label> <div class="col-md-9"> <input id="pass" name="pass" placeholder="Contraseña" class="form-control" type="password"> </div> </div>


     

  
   
                
                    </fieldset>
                </section>
             <input type="submit" class="btn btn-primary" style="margin-left:85%;" id="login_a" name="Buscar" value="Aceptar">    
            </div>
        </form>
    </div>
</div>
