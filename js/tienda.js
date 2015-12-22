var productos=[];
var cod=0;
var id="";
function alerta(){
   console.log(productos); 
}
function articulos(){
    for(i=0;i<productos.length;i++){
        $("#articulos").append("<div class='col-sm-6 col-md-4'id='blabla' ><div class='thumbnail' ><a href='producto.php?"+productos[i][4]+"' class='lolo' id="+productos[i][4]+"><img style='width:240px;height:300px' src='../css/imagenes/"+productos[i][3]+"' alt='...'></a><div class='caption'><h4>"+productos[i][0]+"</h4><p>"+productos[i][1]+"€</p></div></div></div>")
    }
}

function dato(){
productos=[]; 
  $.ajax({
        type: "POST",
        url:"../php/probando.php",
        async: false,
        success: function(datos){
            var dataJson = eval(datos);
             
            for(var i in dataJson){
                productos.push([dataJson[i].nombre,dataJson[i].precio,dataJson[i].descripcion_corta,dataJson[i].imagen,dataJson[i].cod]);
                
            }
             
        },
        error: function (obj, error, objError){
            //avisar que ocurrió un error
        }
});
}

function borrando(){

    productos=[]; 
        $("#articulos").empty();
        $.ajax({
               /*en principio el type para api restful sería delete pero no lo recogeríamos en $_REQUEST, así que queda como POST*/
               type: 'POST',
               dataType: 'json',
               url: '../php/articulo.php',
               //estos son los datos que queremos actualizar, en json:
               data: {
                   
                   cod: cod
               },
               error: function(xhr, status, error) {
                   //mostraríamos alguna ventana de alerta con el error
                   alert("Ha entrado en error");
               },
               success: function(datos) {
                   //obtenemos el mensaje del servidor, es un array!!!
                   //var mensaje = (data["mensaje"]) //o data[0], en función del tipo de array!!
                   //actualizamos datatables:
                   /*para volver a pedir vía ajax los datos de la tabla*/
                   var dataJson = eval(datos);
             
            for(var i in dataJson){
                productos.push(dataJson[i].nombre,dataJson[i].precio,dataJson[i].descripcion,dataJson[i].genero,dataJson[i].tipo,dataJson[i].color,dataJson[i].talla,dataJson[i].descripcion_corta,dataJson[i].cod,dataJson[i].imagen);
                console.log(productos);
            }
            $("#articulos").append("<div class='media' style='background:white'><div class='media-left'><img class='media-object' src='../css/imagenes/"+productos[9]+"' alt='...'></div><div class='media-body'><h2 class='media-heading'>"+productos[0]+"</h2><h4>"+productos[2]+"</h4></div></div>");
               },
               complete: {
                   
               }
           });

        

}

function borrando2(){

    productos=[]; 
        $("#articulos").empty();

        $.ajax({
               /*en principio el type para api restful sería delete pero no lo recogeríamos en $_REQUEST, así que queda como POST*/
               type: 'POST',
               dataType: 'json',
               url: '../php/articulo.php',
               //estos son los datos que queremos actualizar, en json:
               data: {
            
                   tipo: id
               },
               error: function(xhr, status, error) {
                   //mostraríamos alguna ventana de alerta con el error
                   alert("Ha entrado en error");
               },
               success: function(datos) {
                   //obtenemos el mensaje del servidor, es un array!!!
                   //var mensaje = (data["mensaje"]) //o data[0], en función del tipo de array!!
                   //actualizamos datatables:
                   /*para volver a pedir vía ajax los datos de la tabla*/
                   var dataJson = eval(datos);
             
            for(var i in dataJson){
                productos.push([dataJson[i].nombre,dataJson[i].precio,dataJson[i].descripcion,dataJson[i].genero,dataJson[i].tipo,dataJson[i].color,dataJson[i].talla,dataJson[i].descripcion_corta,dataJson[i].cod,dataJson[i].imagen]);
                
            }
            for(i=0;i<productos.length;i++){
        $("#articulos").append("<div class='col-sm-6 col-md-4'id='blabla' ><div class='thumbnail' ><a href='producto.php?"+productos[i][8]+"' class='lolo' id="+productos[i][8]+"><img style='width:240px;height:300px' src='../css/imagenes/"+productos[i][9]+"' alt='...'></a><div class='caption'><h4>"+productos[i][0]+"</h4><p>"+productos[i][1]+"€</p></div></div></div>")
    }
               },
               complete: {
                   
               }
           });

        

}


function cambia(){
  cod=0;
  cod=$(this).attr("id");
  $.post('http://localhost/php/producto.php',{id:cod});
}


function pintar(){
    $("#page-content-wrapper").append("<div class='media'><div class='media-left'><a href='#'><img class='media-object' src='../css/imagenes/"+productos[9]+"' alt='...'></a></div><div class='media-body'><h4 class='media-heading'>"+productos[0]+"</h4>"+productos[2]+"</div></div>");
}

$(document).ready(function() {

dato();
articulos();
$(".lolo").click(function(){
  cod=0;
  cod=$(this).attr("id");
  location.href="producto.php?"+cod+"";

});
$(".menuoption").click(function(){
    id="";
    id=$(this).attr("id");

    borrando2();



});

});