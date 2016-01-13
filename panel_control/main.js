$(document).ready(function () {



    $('#validForm').validate({
        rules: {
            
            nombre: {
                required: true
	
            },

           
            descripcion: {
                required: true

                
            },
            precio: {
                required: true,
                number:true
                
                
            },            
            tipo: {
                required: true

                
            },
            color: {
                required: true

                
            },
            talla: {
                required: true

                
            },
            descripcion_corta: {
                required: true

                
            },
            imagen: {
                required: true

                
            },
            cantidad: {
                required: true,
                

                
            }           
        }



        


    });
    });