$(document).ready(function () {

    $('#validForm').validate({
        rules: {
            
            email: {
                required: true,
                email:true
                
            },

            pass: {
                required: true,
                minlength : 4
                
            },
            repass: {
                required: true,
                minlength : 4
                
            }
        }
       
    });
    
    
    
});




