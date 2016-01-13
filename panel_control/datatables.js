var cod=null;




function borrar_seguro(){
    
     $.ajax({
               
               type: 'POST',
               dataType: 'json',
               url: 'borrar_articulos.php',
               
               data: {
                   cod: cod
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
    
    var miTabla=$('#miTabla').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": "datos_panel_control.php",
        'language': {
               'sProcessing': 'Procesando...',
               'sLengthMenu': 'Mostrar _MENU_ registros',
               'sZeroRecords': 'No se encontraron resultados',
               'sEmptyTable': 'Ningún dato disponible en esta tabla',
               'sInfo': 'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
               'sInfoEmpty': 'Mostrando registros del 0 al 0 de un total de 0 registros',
               'sInfoFiltered': '(filtrado de un total de _MAX_ registros)',
               'sInfoPostFix': '',
               'sSearch': 'Buscar:',
               'sUrl': '',
               'sInfoThousands': ',',
               'sLoadingRecords': 'Cargando...',
               'oPaginate': {
                   'sFirst': 'Primero',
                   'sLast': 'Último',
                   'sNext': 'Siguiente',
                   'sPrevious': 'Anterior'
               },
               'oAria': {
                   'sSortAscending': ': Activar para ordenar la columna de manera ascendente',
                   'sSortDescending': ': Activar para ordenar la columna de manera descendente'
               }
           },
         'columns': [ {
               'data': 'cod'
           },{
               'data': 'nombre'
           }, {
               'data': 'precio'
           }, {
               'data': 'tipo'
           }, {
               'data': 'color'
           }, {
               'data': 'talla'
           }, {
               'data': 'imagen'
           },{
               'data': 'cantidad'
           }, {
               'data': 'cod',
               
               'render': function(data) {
                   return '<a class="btn btn-primary editarbtn" href="#">Editar</a><a data-toggle="modal" data-target="#borrando" class="btn btn-warning borrarbtn" href="#">Borrar</a>';
               }
           }]
    } );
    
           $('#miTabla').on('click', '.editarbtn', function(e) {
           e.preventDefault();
           $('#tabla').fadeOut(100);
           $('#formdatos').css("display","");

           var nRow = $(this).parents('tr');
           var aData = miTabla.row(nRow).data();
           $('#nombre').val(aData.nombre);
           $('#descripcion').val(aData.descripcion);
           $('#precio').val(aData.precio);
           $("option[value="+aData.tipo+"").attr("selected","selected");
           $('#color').val(aData.color);
           $("option[value="+aData.talla+"").attr("selected","selected");
           $('#descripcion_corta').val(aData.descripcion_corta);
           $('#cod').val(aData.cod);
           $('#imagen').val(aData.imagen);
           $('#cantidad').val(aData.cantidad);
       });


      $('#miTabla').on('click', '.borrarbtn', function(e) {
           cod=null;
           e.preventDefault();
           var nRow = $(this).parents('tr');
           var aData = miTabla.row(nRow).data();
           cod = aData.cod;

          
          
         /* $.ajax({
               
               type: 'POST',
               dataType: 'json',
               url: 'borrar_articulos.php',
               
               data: {
                   cod: cod
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
           location.href="Panel_Control.php";*/
       });
       $('#enviar').click(function(e) {
           e.preventDefault();
           nombre = $('#nombre').val();
           descripcion = $('#descripcion').val();
           precio = $('#precio').val();
           tipo = $('#tipo2').val();
           color = $('#color').val();
           talla = $('#tallas2').val();
           descripcion_corta = $('#descripcion_corta').val();
           cod = $('#cod').val();
           imagen = $('#imagen').val();
           cantidad = $('#cantidad').val();
           $.ajax({
               type: 'POST',
               dataType: 'json',
               url: 'modificar_articulos.php',
             
               data: {
                   nombre: nombre,
                   descripcion: descripcion,
                   precio: precio,
                   tipo: tipo,
                   color: color,
                   talla: talla,
                   descripcion_corta: descripcion_corta,
                   cod:cod,
                   imagen:imagen,
                   cantidad:cantidad
               },
               error: function(xhr, status, error) {
                  
               },
               success: function(data) {
                  var $mitabla =  $("#miTabla").dataTable( { bRetrieve : true } );
                  $mitabla.fnDraw();
               },
               complete: {
                   
               }
           });
           $('#tabla').fadeIn(100);
           $('#formdatos').css("display","none");

       });
} );