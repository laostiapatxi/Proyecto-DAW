var datos_user=[];

var pedidos_user=[];

var idpedidos_user=[];

var contador=0;

function get_datos(){
    
    usuario=$("#user").text();

    datos_user=[];
    $.ajax({
        type: "POST",
        url:"datos_usuario.php",
        async: false,
        success: function(datos){

            var dataJson = eval(datos);
             
            for(var i in dataJson){
                datos_user.push(dataJson[i].email,dataJson[i].pass);
                
            }

            $(".mycss").html("Mis Datos");
            $("#iconos").empty();
            $("#dateando").css("display","")
            
             
        },
        error: function (obj, error, objError){
           
        }
});
}

function get_pedidos(){
    
    usuario=$("#user").text();

    pedidos_user=[];
    
    idpedidos_user=[];
    
    
    $.ajax({
        type: "POST",
        url:"pedidos_usuario.php",
        async: false,
        success: function(datos){

            var dataJson = eval(datos);
             
            for(var i in dataJson){
                pedidos_user.push([dataJson[i].cantidad,dataJson[i].precio,dataJson[i].imagen,dataJson[i].id_pedido,dataJson[i].nombre,dataJson[i].total,dataJson[i].talla]);
                
            }
             
            for(i=0;i<pedidos_user.length;i++){
                
                for(x=0;x<idpedidos_user.length;x++){
                    
                    if(idpedidos_user[x][0]==pedidos_user[i][3]){
                        
                        contador++;
                        
                    }
                    
                }
                
                if(contador==0){
                    
                    idpedidos_user.push([pedidos_user[i][3],pedidos_user[i][5]]);
                    
                }
                
                contador=0;
                
            }
            console.log(pedidos_user);           

            $(".mycss").html("Mis Pedidos");
            
            $("#aqui").empty();
  
            
            $("#aqui").append("<div class='container' style='width:100% !important;'><table id='tablon'  class='table table-hover' style='margin-top:2%'><tr ><td style='border-top-width: 0px;'><b>ID Pedido</b></td></tr></table></div>");
            for(i=0;i<idpedidos_user.length;i++){
                            
                $("#tablon").append("<tr><td><a id='loginLink' onclick='toggleTable("+idpedidos_user[i][0]+");' href='#'>"+idpedidos_user[i][0]+"</a></td></tr>");

                $("#tablon").append("<tr><td id="+idpedidos_user[i][0]+" style='display:none;border-top-width: 0px;width:100%;' colspan='4'><table id="+idpedidos_user[i][0]+1+" class='table'></table></td></tr>");

                $("#"+idpedidos_user[i][0]+1+"").append("<tr><td style='border-top-width: 0px;'><b>Imagen</b></td><td style='border-top-width: 0px;'><b>Nombre</b></td><td style='border-top-width: 0px;'><b>Talla</b></td><td style='border-top-width: 0px;'><b>Cantidad</b></td><td style='border-top-width: 0px;'><b>Precio</b></td></tr>");
     
            }
            
            for(x=0;x<pedidos_user.length;x++){
            
                $("#"+pedidos_user[x][3]+1+"").append("<tr><td><img style='max-width: 100px;max-height: 100px;' src='../css/imagenes/"+pedidos_user[x][2]+"'></td><td>"+pedidos_user[x][4]+"</td><td>"+pedidos_user[x][6]+"</td><td>"+pedidos_user[x][0]+"</td><td>"+pedidos_user[x][1]+"€</td><td></td></tr>");
            }
            
            for(j=0;j<idpedidos_user.length;j++){
            
                $("#"+idpedidos_user[j][0]+1+"").append("<tr><td><b>Total</b></td><td></td><td></td><td></td><td>"+idpedidos_user[j][1]+"€</td></tr>");
            } 
            $("#aqui").append("<form action='Area_Cliente.php' method='post'><button type='submit' class='btn btn-primary' style='margin:0% 2% 2% 0%;float:right;' name='cancela'>Cancelar</button></form>")
   },
        error: function (obj, error, objError){
          
        }
});
}


function toggleTable(id) {
    var lTable = document.getElementById(""+id+"");
    lTable.style.display = (lTable.style.display == "table") ? "none" : "table";
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
   
   $( ".picto-pedidos" ).click(function() {

    get_pedidos();
    
   }); 
   
     
   $( "#palindex" ).on( "click", function() {
            location.href="Area_Cliente.php";
       });     


   
});