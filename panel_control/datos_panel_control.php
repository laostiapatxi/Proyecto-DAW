<?php
 
$table = 'articulos';
 

$primaryKey = 'cod';

$columns = array(
    array( 'db' => 'nombre',  'dt' => 'nombre' ),
    array( 'db' => 'descripcion',  'dt' => 'descripcion' ),
    array( 'db' => 'precio',     'dt' => 'precio' ),
    array( 'db' => 'tipo', 'dt' => 'tipo' ),
    array( 'db' => 'color',  'dt' => 'color' ),
    array( 'db' => 'talla',   'dt' => 'talla' ),
    array( 'db' => 'descripcion_corta',     'dt' => 'descripcion_corta' ),
    array( 'db' => 'cod',     'dt' => 'cod' ),
    array( 'db' => 'imagen',     'dt' => 'imagen' ),
    array( 'db' => 'cantidad',     'dt' => 'cantidad' )
);
 

		$gaSql['user'] = "alumno";
		$gaSql['password'] = "alumno";
		$gaSql['db'] = "alumno";
		$gaSql['server'] = "localhost";
 
 $sql_details = array(
    'user' => 'alumno',
    'pass' => 'alumno',
    'db'   => 'alumno',
    'host' => 'localhost'
);

require( 'ssp.php' );
 
echo json_encode(
    SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
);