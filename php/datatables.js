$(document).ready(function() {
    $('#formulario').fadeOut(100);
    var miTabla=$('#miTabla').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": "newEmptyPHP.php",
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
               'data': 'genero'
           }, {
               'data': 'tipo'
           }, {
               'data': 'color'
           }, {
               'data': 'talla'
           }, {
               'data': 'descripcion_corta'
           }, {
               'data': 'imagen'
           }, {
               'data': 'cod',
               /*añadimos las clases editarbtn y borrarbtn para procesar los eventos click de los botones. No lo hacemos mediante id ya que habrá más de un
               botón de edición o borrado*/
               'render': function(data) {
                   return '<a class="btn btn-primary editarbtn" href=http://localhost/php/editar.php?id_clinica=' + data + '>Editar</a><a class="btn btn-warning borrarbtn" href=http://localhost/php/borrar.php?id_clinica=' + data + '>Borrar</a>';
               }
           }]
    } );
           $('#miTabla').on('click', '.editarbtn', function(e) {
           e.preventDefault();
           $('#tabla').fadeOut(100);
           $('#formulario').fadeIn(100);

           var nRow = $(this).parents('tr');
           var aData = miTabla.row(nRow).data();
           $('#nombre').val(aData.nombre);
           $('#descripcion').val(aData.descripcion);
           $('#precio').val(aData.precio);
           $('#genero').val(aData.genero);
           $('#tipo').val(aData.tipo);
           $('#color').val(aData.color);
           $('#talla').val(aData.talla);
           $('#descripcion_corta').val(aData.descripcion_corta);
           $('#cod').val(aData.cod);
           $('#imagen').val(aData.imagen);
       });


       $('#miTabla').on('click', '.borrarbtn', function(e) {
           e.preventDefault();
           var nRow = $(this).parents('tr');
           var aData = miTabla.row(nRow).data();
           var cod = aData.cod;


           $.ajax({
               /*en principio el type para api restful sería delete pero no lo recogeríamos en $_REQUEST, así que queda como POST*/
               type: 'POST',
               dataType: 'json',
               url: 'borrar_articulos.php',
               //estos son los datos que queremos actualizar, en json:
               data: {
                   cod: cod
               },
               error: function(xhr, status, error) {
                   //mostraríamos alguna ventana de alerta con el error
                   alert("Ha entrado en error");
               },
               success: function(data) {
                   //obtenemos el mensaje del servidor, es un array!!!
                   //var mensaje = (data["mensaje"]) //o data[0], en función del tipo de array!!
                   //actualizamos datatables:
                   /*para volver a pedir vía ajax los datos de la tabla*/
                   var $mitabla =  $("#miTabla").dataTable( { bRetrieve : true } );
                   $miTabla.fnDraw();
               },
               complete: {
                   //si queremos hacer algo al terminar la petición ajax
               }
           });
           location.href="Panel_Control.php";
       });
       $('#enviar').click(function(e) {
           e.preventDefault();
           nombre = $('#nombre').val();
           descripcion = $('#descripcion').val();
           precio = $('#precio').val();
           genero = $('#genero').val();
           tipo = $('#tipo').val();
           color = $('#color').val();
           talla = $('#talla').val();
           descripcion_corta = $('#descripcion_corta').val();
           cod = $('#cod').val();
           imagen = $('#imagen').val();

           $.ajax({
               type: 'POST',
               dataType: 'json',
               url: 'modificar_articulos.php',
               //lo más cómodo sería mandar los datos mediante 
               //var data = $( "form" ).serialize();
               //pero como el php tiene otros nombres de variables, lo dejo así
               //estos son los datos que queremos actualizar, en json:
               data: {
                   nombre: nombre,
                   descripcion: descripcion,
                   precio: precio,
                   genero: genero,
                   tipo: tipo,
                   color: color,
                   talla: talla,
                   descripcion_corta: descripcion_corta,
                   cod:cod,
                   imagen:imagen
               },
               error: function(xhr, status, error) {
                   //mostraríamos alguna ventana de alerta con el error
               },
               success: function(data) {
                  var $mitabla =  $("#miTabla").dataTable( { bRetrieve : true } );
                  $mitabla.fnDraw();
               },
               complete: {
                   
               }
           });
           $('#tabla').fadeIn(100);
           $('#formulario').fadeOut(100);

       });
} );