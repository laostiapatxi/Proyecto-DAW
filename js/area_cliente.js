var datos_user=[];
function get_datos(){
    
    usuario=$("#user").text();

    datos_user=[];
    $.ajax({
        type: "POST",
        url:"../php/datos_usuario.php",
        async: false,
        success: function(datos){

            var dataJson = eval(datos);
             
            for(var i in dataJson){
                datos_user.push(dataJson[i].email,dataJson[i].pass);
                
            }
            console.log(datos_user);
            $(".mycss").html("Mis Datos");
            $("#aqui").empty();
            $("#aqui").append("<div class='container' style='width:100% !important;'><form  action='Area_Cliente.php' class='form-horizontal' method='post'><div class='form-group'> <label class='col-md-3 control-label' for='email1'>Tu email </label> <div class='col-md-9'> <input  name='email1' value='"+datos_user[0]+"' readonly='yes' class='form-control' type='email'> </div> </div><div class='form-group'> <label class='col-md-3 control-label' for='email'>Nuevo Email </label> <div class='col-md-9'> <input  name='email'  class='form-control' type='email'> </div> </div> <div class='form-group'> <label class='col-md-3 control-label' for='pass'>Contraseña</label> <div class='col-md-9'> <input  name='pass' class='form-control' type='password'> </div> </div><div class='form-group'> <label class='col-md-3 control-label' for='pass1'>Nueva Contraseña</label> <div class='col-md-9'> <input  name='pass1' class='form-control' type='password'> </div> </div><button type='submit' class='btn btn-primary' style='margin-bottom:2%;' name='cambia'>Modificar datos</button></form></div>");
             
        },
        error: function (obj, error, objError){
            //avisar que ocurrió un error
        }
});
}



$(document).ready(function () {
   $( "#iconos li a" ).click(function( event ) {
  event.preventDefault();
   });
   $( ".picto-salir" ).click(function() {
    location.href="../php/cerrar_sesion.php";
   });
   $( ".picto-datos" ).click(function() {

    get_datos();
   });
});