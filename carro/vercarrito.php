<?php
session_start();
 
class Carrito
{
 
	
	private $carrito = array();
 
	
	public function __construct()
	{
		
		if(!isset($_SESSION["carrito"]))
		{
			$_SESSION["carrito"] = null;
			$this->carrito["precio_total"] = 0;
			$this->carrito["articulos_total"] = 0;
		}
		$this->carrito = $_SESSION['carrito'];
	}
 
	
	public function add($articulo = array()){
           
		
		if(!is_array($articulo) || empty($articulo))
		{
			throw new Exception("Error, el articulo no es un array!", 1);	
		}
 
		
		if(!$articulo["cod"] || !$articulo["cantidad"] || !$articulo["precio"])
		{
			throw new Exception("Error, el articulo debe tener un id, cantidad y precio!", 1);	
		}
 
		
		if(!is_numeric($articulo["cod"]) || !is_numeric($articulo["cantidad"]) || !is_numeric($articulo["precio"]))
		{
			throw new Exception("Error, el cod, cantidad y precio deben ser números!", 1);	
		}
 
		
		$unique_id = md5($articulo["cod"]);
 
		
		$articulo["unique_id"] = $unique_id;
		
		
		if(!empty($this->carrito))
		{
			foreach ($this->carrito as $row) 
			{
					
				if($row["unique_id"] === $unique_id)
				{
					
					$articulo["cantidad"] = $row["cantidad"] + $articulo["cantidad"];
				}
			}
		}
 
		
		$articulo["cantidad"] = trim(preg_replace('/([^0-9\.])/i', '', $articulo["cantidad"]));
	    $articulo["precio"] = trim(preg_replace('/([^0-9\.])/i', '', $articulo["precio"]));
 
	   
	    $articulo["total"] = $articulo["cantidad"] * $articulo["precio"];
 
	   
	    $this->unset_producto($unique_id);
 
	    
	    $_SESSION["carrito"][$unique_id] = $articulo;
 
	    
	    $this->update_carrito();
 
	   
	    $this->update_precio_cantidad();
 
	}
 
	
	private function update_precio_cantidad()
	{
		
		$precio = 0;
		$articulos = 0;
 
		
		foreach ($this->carrito as $row) 
		{
			$precio += ($row['precio'] * $row['cantidad']);
			$articulos += $row['cantidad'];
		}
 
	
		$_SESSION['carrito']["articulos_total"] = $articulos;
		$_SESSION['carrito']["precio_total"] = $precio;
 
		
		$this->update_carrito();
                echo "<script language=Javascript> location.href=\"maincarro.php\"; </script>";
	}
 
	
	public function precio_total()
	{
		
		if(!isset($this->carrito["precio_total"]) || $this->carrito === null)
		{
			return 0;
		}
		
		if(!is_numeric($this->carrito["precio_total"]))
		{
			throw new Exception("El precio total del carrito debe ser un número", 1);	
		}
		
		return $this->carrito["precio_total"] ? $this->carrito["precio_total"] : 0;
	}
 
	
	public function articulos_total()
	{
		
		if(!isset($this->carrito["articulos_total"]) || $this->carrito === null)
		{
			return 0;
		}
		
		if(!is_numeric($this->carrito["articulos_total"]))
		{
			throw new Exception("El número de artículos del carrito debe ser un número", 1);	
		}
		
		return $this->carrito["articulos_total"] ? $this->carrito["articulos_total"] : 0;
	}
 
	
	public function get_content()
	{
		
		$carrito = $this->carrito;
		
		unset($carrito["articulos_total"]);
		unset($carrito["precio_total"]);
		return $carrito == null ? null : $carrito;
	}
 
	
	private function unset_producto($unique_id)
	{
		unset($_SESSION["carrito"][$unique_id]);
	}
 
	
	public function remove_producto($unique_id)
	{
		
		if($this->carrito === null)
		{
			throw new Exception("El carrito no existe!", 1);
		}
 
		
		if(!isset($this->carrito[$unique_id]))
		{
			throw new Exception("La unique_id $unique_id no existe!", 1);
		}
 
		
		unset($_SESSION["carrito"][$unique_id]);
		$this->update_carrito();
		$this->update_precio_cantidad();
		return true;
	}
 
	
	public function destroy()
	{
		unset($_SESSION["carrito"]);
		$this->carrito = null;
                echo "<script language=Javascript> location.href=\"maincarro.php\"; </script>";
		return true;
                
	}
 
	
	public function update_carrito()
	{
		self::__construct();
	}
 
        
        
        	public function remove($articulo = array()){
           
		
		if(!is_array($articulo) || empty($articulo))
		{
			throw new Exception("Error, el articulo no es un array!", 1);	
		}
 
		
		if(!$articulo["cod"] || !$articulo["cantidad"] || !$articulo["precio"])
		{
			throw new Exception("Error, el articulo debe tener un id, cantidad y precio!", 1);	
		}
 
		
		if(!is_numeric($articulo["cod"]) || !is_numeric($articulo["cantidad"]) || !is_numeric($articulo["precio"]))
		{
			throw new Exception("Error, el cod, cantidad y precio deben ser números!", 1);	
		}
 
		
		$unique_id = md5($articulo["cod"]);
 
		
		$articulo["unique_id"] = $unique_id;
		
	
		if(!empty($this->carrito))
		{
			foreach ($this->carrito as $row) 
			{
					
				if($row["unique_id"] === $unique_id)
				{
					
					$articulo["cantidad"] = $row["cantidad"] - $articulo["cantidad"];
				}
			}
		}
 
		
		$articulo["cantidad"] = trim(preg_replace('/([^0-9\.])/i', '', $articulo["cantidad"]));
	    $articulo["precio"] = trim(preg_replace('/([^0-9\.])/i', '', $articulo["precio"]));
 
	    
	    $articulo["total"] = $articulo["cantidad"] * $articulo["precio"];
 
	    
	    $this->unset_producto($unique_id);
 
	    
	    $_SESSION["carrito"][$unique_id] = $articulo;
 
	    
	    $this->update_carrito();
 
	    
	    $this->update_precio_cantidad();
 
	}

}