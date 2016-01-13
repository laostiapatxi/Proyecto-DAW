var tallas=[];
var tipos=[];







function get_tallas(){

    tallas=[]; 

        $.ajax({
               /*en principio el type para api restful sería delete pero no lo recogeríamos en $_REQUEST, así que queda como POST*/
               type: 'POST',
               dataType: 'json',
               url: '../php/panel_control_tallas.php',
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
                tallas.push(dataJson[i].nombre);
                
            }
            
                for(i=0;i<tallas.length;i++){
                $("#tallas").append("<option  value="+tallas[i]+">"+tallas[i]+"</option>")
                $("#tallas2").append("<option  value="+tallas[i]+">"+tallas[i]+"</option>")
                $("#tallaspaborrar").append("<li><a id='"+tallas[i]+"' onclick='borra_talla(this);' href='#'>"+tallas[i]+"</a></li>")
                   }
               },
               complete: {
                   
               }
           });


           
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
                $("#tipo").append("<option class='form-control' value="+tipos[i]+">"+tipos[i]+"</option>")
                $("#tipo2").append("<option class='form-control' value="+tipos[i]+">"+tipos[i]+"</option>")
                $("#tipospaborrar").append("<li><a id='"+tipos[i]+"' onclick='borra_tipo(this);' href='#'>"+tipos[i]+"</a></li>")
                   }
               },
               complete: {
                   
               }
           });


}

function borra_talla(esto){
    
    var eso=$(esto).attr("id");


    $("#tallaborrar").val(eso);
    
}

function borra_tipo(esto){
    
    var eso=$(esto).attr("id");


    $("#tipoborrar").val(eso);
    
}


function destruccion(){
    

         nombre=$("#tallaborrar").val();
        
         

         
         $.ajax({
               
               type: 'POST',
               dataType: 'json',
               url: 'borrar_talla.php',
               
               data: {
                   nombre: nombre

               },
               error: function(xhr, status, error) {
                  
                   alert("Ha entrado en error");
               },
               success: function(data) {

                   var $mitabla =  $("#miTabla").dataTable( { bRetrieve : true } );
                   $miTabla.fnDraw();
               },
               complete: {
               
               }
           });
           location.href="Panel_Control.php";
    
}

function destruccion2(){
    

         nombre=$("#tipoborrar").val();
        
         

         
         $.ajax({
               
               type: 'POST',
               dataType: 'json',
               url: 'borrar_tipo.php',
               
               data: {
                   nombre: nombre

               },
               error: function(xhr, status, error) {
                  
                   alert("Ha entrado en error");
               },
               success: function(data) {

                   var $mitabla =  $("#miTabla").dataTable( { bRetrieve : true } );
                   $miTabla.fnDraw();
               },
               complete: {
               
               }
           });
           location.href="Panel_Control.php";
    
}

$(document).ready(function() {

get_tallas();
get_tipos();

});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


