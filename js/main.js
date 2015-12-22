function pp(){

	alert("mierda");
}


$(document).ready(function () {
    //Codigo de plugin encontrado en:
    //https://github.com/t0m/select2-bootstrap-css/tree/bootstrap3
    $("#conocer").select2();
    $("#pais").select2();
    //El select2 me cambia el id y el value del html
    //Así que hasta que lo configure no aplicaré el plugin en provincia y localida

    //Reglas validación formulario
    //* Todos los campos con * son requeridos
    $('#validForm').validate({
        rules: {


            //* email debe ser un correo electrónico válido
            //  (al menos en apariencia)
            email: {
                required: true,
                email: true,
                minlength : 4		
            },
            reemail: {
                required: true,
                equalTo: email
            },

            //* La contraseña se debe forzar a que sea compleja.
            pass: {
                required: true,
                nivelComplejidad: true
            },
            repass: {
                required: true,
                equalTo: pass
            }
        },

        messages: {

            email: {
                remote: "Este correo ya esta en uso.",
            }
        },

        //* Una vez pulsemos enviar en el formulario se mostrará un aviso
        //  al usuario de que se va a dar de alta y que se le pasará la
        //  primera cuota de 50€, 140€ o 550€ según corresponda (forma de pago).
        //  El usuario podrá cancelar la operación.


    });





    //  Función para gestionar la complejidad de la contraseña mediante
    //  el plugin complexify:
    //  https://github.com/danpalmer/jquery.complexify.js/
    //  https://www.danpalmer.me/jquery-complexify
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


//  Cuando la barra de navegación de Bootstrap se colapsa,
//  la accion por defecto al clicar en el menú es mantenerlo abierto.
//  Con esta funcion el menú se cierra automáticamente
//  cuando se hace clic en un elemento de menú.
$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});


//  Activa el comportamiento scrollspy de bootstrap
//  Los enlaces de la barra de navegación se iluminarán
//  al hacer scroll cuando coincida con su sección 
$('#navbar').scrollspy();