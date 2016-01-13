var productos=[];
var cod=0;
var productos2=[]; 
var contador=0; 
var tipos=[];
var id="";
var tallas=[];
var nombre="";



function get_tallas(){
    tallas=[];
    console.log(nombre);

    $.ajax({
               /*en principio el type para api restful sería delete pero no lo recogeríamos en $_REQUEST, así que queda como POST*/
               type: 'POST',
               dataType: 'json',
               url: 'tallas_productos.php',
               //estos son los datos que queremos actualizar, en json:
               data: {
                   
                   nombre: nombre
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
                tallas.push([dataJson[i].talla,dataJson[i].cod]);
                
            }
            
            
            console.log(tallas);
                for(i=0;i<tallas.length;i++){
                $("#tallas").append(" <option id="+tallas[i][1]+" value="+tallas[i][1]+">"+tallas[i][0]+"</option>");
               
                   }
                   
                
               },
               complete: {
                   
               }
           });


}

function borrando(){

    productos=[];
    nombre="";

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
                productos.push(dataJson[i].nombre,dataJson[i].precio,dataJson[i].descripcion,dataJson[i].tipo,dataJson[i].color,dataJson[i].talla,dataJson[i].descripcion_corta,dataJson[i].cod,dataJson[i].imagen,dataJson[i].cantidad);
                
            }
        
            
            $("#articulos").append("<div class='media' style='background:whitesmoke'><div class='media-left'><img id='principal-foto' class='media-object' src='../css/imagenes/"+productos[8]+"' alt='...'></div><div class='media-body'><h2 class='media-heading' style='margin:2% 0% 10% 0%;'>"+productos[0]+"</h2><h4 style='margin:0% 0% 10% 0%;'>"+productos[2]+"</h4><p>Precio: "+productos[1]+"€</p><p>Color: "+productos[4]+"</p><p><span style='margin-top:5px;' class='col-sm-2'>Talla: </span><select onchange='funsion(this);' id='tallas' class='form-control' style='width: 15%;' name='tipo'></select></p><p style='margin-top:6%;'><div class='col-sm-6 col-md-4'><div ><a href='#' ><img class='thumbnail'id='foticos' onclick='cambiando(this);' style='display:block;width:100px;heigth:100px;' src='../css/imagenes/"+productos[3]+"/"+productos[0]+"/foto1.jpg'></a></div></div><div class='col-sm-6 col-md-4'><div><a href='#'><img id='foticos' onclick='cambiando(this);' class='thumbnail' style='display:block;width:100px;heigth:100px;' src='../css/imagenes/"+productos[3]+"/"+productos[0]+"/foto2.jpg'></a></div></div></p><form action='../carro/maincarro.php' method='post'><input type='text' id='nombre' name='nombre' hidden='hide'><input type='text' id='precio' name='precio' hidden='hide'><input type='text' id='cod' name='cod' hidden='hide'><input type='text' id='imagen' name='imagen' hidden='hide'><input type='text' id='talla' name='talla' hidden='hide' ><input type='text' id='cantidad' name='cantidad' hidden='hide'><input type='text' id='tipo' name='tipo' hidden='hide'><input type='submit' name='enviar'style='margin-top:63%;' class='btn btn-primary cb2' value='Comprar'></form></div></div>");
            $('#nombre').val(productos[0]);
            $('#precio').val(productos[1]);
            $('#cod').val(productos[7]);
            $('#talla').val(productos[5]);
            $('#imagen').val(productos[8]);
            $('#cantidad').val(productos[9]);
            $('#tipo').val(productos[3]);
            
            nombre=productos[0];
            get_tallas();
               },
               complete: {
                   
               }
           });


           
}

function funsion(esto){
    var eso=esto.value;
    var tallita=$("#"+eso+"").text();
    console.log(tallita);
    $('#cod').val(eso);
    $('#talla').val(tallita);
}

function get_tipos(){

   tipos=[]; 

        $.ajax({
               /*en principio el type para api restful sería delete pero no lo recogeríamos en $_REQUEST, así que queda como POST*/
               type: 'POST',
               dataType: 'json',
               url: '../php/panel_control_tipos.php',
               //estos son los datos que queremos actualizar, en json:

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
                tipos.push(dataJson[i].nombre);
                
            }

                for(i=0;i<tipos.length;i++){
                $("#tipos").append(" <li><a href='#'onclick='hola(this);' class='menuoption' id='"+tipos[i]+"'>"+tipos[i]+"</a></li>");
               
                   }
                   
                
               },
               complete: {
                   
               }
           });


}


function cambiando(e){
    
      
    var imagen=$(e).attr("src");
    $("#principal-foto").attr("src",imagen);
    
}

function borrando2(){

    productos=[]; 
    productos2=[]; 
    contador=0;   

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
                 for(x=0;x<productos2.length;x++){
                     if(productos[i][0]==productos2[x][0]){
                         contador++;
                     }
                 }
                 
                 if(contador==0){
                     productos2.push(productos[i]);
                 }
                 
                 
             }
            $("#articulos").empty();
            for(i=0;i<productos2.length;i++){
        $("#articulos").append("<div class='col-sm-6 col-md-4'id='blabla' ><div class='thumbnail' ><a href='producto.php?"+productos2[i][8]+"' class='lolo' id="+productos2[i][8]+"><img style='width:240px;height:300px' src='../css/imagenes/"+productos2[i][9]+"' alt='...'></a><hr class='separador'><div class='caption'><h4>"+productos2[i][0]+"</h4><p>"+productos2[i][1]+"€</p></div></div></div>");
    }
               },
               complete: {
                   
               }
           });

        

}

function hola(event){
    
    id="";
    id=$(event).attr("id");
    borrando2();
}


$(document).ready(function() {

    var loc = document.location.href;
    cod = loc.split('?')[1];

    borrando();
    get_tipos();
    


});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


