var productos=[];
var productos2=[];
var tipos=[];
var cod=0;
var id="";
var contador=0;



function articulos(){
    $("#articulos").empty();
    for(i=0;i<productos2.length;i++){
        $("#articulos").append("<div class='col-sm-6 col-md-4'id='blabla' ><div class='thumbnail' ><a href='../producto/producto.php?"+productos2[i][4]+"' class='lolo' id="+productos2[i][4]+"><img style='width:240px;height:300px' src='../css/imagenes/"+productos2[i][3]+"' alt='...'></a><hr class='separador'><div class='caption'><h4>"+productos2[i][0]+"</h4><p>"+productos2[i][1]+"€</p></div></div></div>");
    }
}

function dato(){
productos=[];
productos2=[];
contador=0;
  $.ajax({
        type: "POST",
        url:"probando.php",
        async: false,
        success: function(datos){
            var dataJson = eval(datos);
             
            for(var i in dataJson){
                productos.push([dataJson[i].nombre,dataJson[i].precio,dataJson[i].descripcion_corta,dataJson[i].imagen,dataJson[i].cod]);
                
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
                 
                 contador=0;
             }
             
             console.log(productos);
             console.log(productos2);

        },
        error: function (obj, error, objError){
            //avisar que ocurrió un error
        }
});
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
        $("#articulos").append("<div class='col-sm-6 col-md-4'id='blabla' ><div class='thumbnail' ><a href='../producto/producto.php?"+productos2[i][8]+"' class='lolo' id="+productos2[i][8]+"><img style='width:240px;height:300px' src='../css/imagenes/"+productos2[i][9]+"' alt='...'></a><hr class='separador'><div class='caption'><h4>"+productos2[i][0]+"</h4><p>"+productos2[i][1]+"€</p></div></div></div>");
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
                $("#tipos").append(" <li><a href='#'onclick='hola(this);' class='menuoption' id='"+tipos[i]+"'>"+tipos[i]+"</a></li>");
               
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

dato();
articulos();
get_tipos();
$(".lolo").click(function(){
  cod=0;
  cod=$(this).attr("id");
  location.href="../producto/producto.php?"+cod+"";

});



});