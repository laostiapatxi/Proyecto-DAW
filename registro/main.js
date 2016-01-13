$(document).ready(function () {

    $('#validForm').validate({
        rules: {
            
            email: {
                required: true,
                email: true,

                minlength : 4		
            },
            reemail: {
                required: true,
                equalTo: email
            },
           
            pass: {
                required: true,
                minlength : 4
                
            },
            repass: {
                required: true,
                equalTo: pass
            }
        }



        


    });
    
    
        $('#pass').focusin(function() {
        $('#pass').complexify({}, function(valid, complexity) {
            $('#nivelComplejidad').val(complexity);
            valorComplejidad=complexity;
            if (complexity < 20) {
                $('#labelComplejidad').html('Contraseña debil');
            } else if (complexity >= 20 && complexity < 40) {
                $('#labelComplejidad').html('Contraseña media');
            } else {
                $('#labelComplejidad').html('Contraseña segura');
            }
        });
    });
    
});




