<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
?>
        <link rel="stylesheet" type="text/css" href="../css/main.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
       
<div class=row> 
    <div class="col-md-5 col-md-offset-3" style="margin-top: 2%;">
     <form id="validForm" class="form-horizontal" action="index.php" method="post"> 
         <div class="well well-sm"> 
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
                        <div class="form-group">
                            <div class="col-sm-10 col-sm-offset-2">
                                <button name="crear" type="submit" class="btn btn-primary" style="margin-left:83%;">Enviar</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.14.0/jquery.validate.js"></script>

<script src="../js/vendor.js"></script> 
<script src="../js/main.js"></script>
<script src="../js/messaes_es.js"></script>  
