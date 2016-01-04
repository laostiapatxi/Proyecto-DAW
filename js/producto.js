var productos=[];
var cod=0;






function borrando(){

    productos=[]; 

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
                productos.push(dataJson[i].nombre,dataJson[i].precio,dataJson[i].descripcion,dataJson[i].genero,dataJson[i].tipo,dataJson[i].color,dataJson[i].talla,dataJson[i].descripcion_corta,dataJson[i].cod,dataJson[i].imagen,dataJson[i].cantidad);
                
            }
            $("#articulos").append("<div class='media' style='background:whitesmoke'><div class='media-left'><img class='media-object' src='../css/imagenes/"+productos[9]+"' alt='...'></div><div class='media-body'><h2 class='media-heading'>"+productos[0]+"</h2><h4>"+productos[2]+"</h4><form action='maincarro.php' method='post'><input type='text' id='nombre' name='nombre' hidden='hide'><input type='text' id='precio' name='precio' hidden='hide'><input type='text' id='cod' name='cod' hidden='hide'><input type='text' id='imagen' name='imagen' hidden='hide'><input type='text' id='cantidad' name='cantidad' hidden='hide'><input type='submit' name='enviar'style='margin-top:63%;' class='btn btn-primary cb2' value='Comprar'></form></div></div>");
            $('#nombre').val(productos[0]);
            $('#precio').val(productos[1]);
            $('#cod').val(productos[8]);
            $('#imagen').val(productos[9]);
            $('#cantidad').val(productos[10]); 
               
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
        $("#articulos").append("<div class='col-sm-6 col-md-4'id='blabla' ><div class='thumbnail' ><a href='producto.php?"+productos[i][8]+"' class='lolo' id="+productos[i][8]+"><img style='width:240px;height:300px' src='../css/imagenes/"+productos[i][9]+"' alt='...'></a><hr class='separador'><div class='caption'><h4>"+productos[i][0]+"</h4><p>"+productos[i][1]+"€</p></div></div></div>")
    }
               },
               complete: {
                   
               }
           });

        

}



$(document).ready(function() {

    var loc = document.location.href;
    cod = loc.split('?')[1];

    borrando();

$(".menuoption").click(function(){
    id="";
    id=$(this).attr("id");

    borrando2();



});


});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


