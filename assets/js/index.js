// ===============================
//        ACTIVIDAD CON JQUERY
// ===============================

// Mensaje inicial en consola
console.log("¡Hola Mundo con jQuery!");

// Cuando el documento está listo
$(document).ready(function () {

    // ---------------------------------------------------
    //        SMOOTH SCROLL GENERAL (ENLACES <a>)
    // ---------------------------------------------------

    $("a").on("click", function (event) {

        // Evita comportamiento por defecto si existe hash
        if (this.hash !== "") {
            event.preventDefault();

            let hash = this.hash;

            // Desplazamiento suave
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                4000,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    // ---------------------------------------------------
    //           EVENTOS DEL BOTÓN (mouseover / click)
    // ---------------------------------------------------

    $("#enviar_formulario").on("mouseover", function () {
        console.log("¡Pasaste el ratón sobre el botón!");
    });

    $("#enviar_formulario").on("click", function () {
        console.log("¡Has hecho clic en el botón!");
    });

    // ---------------------------------------------------
    //        VALIDACIÓN DEL FORMULARIO DE CONTACTO
    // ---------------------------------------------------

    $("#contactForm").on("submit", function (event) {
        event.preventDefault(); // Evita recargar la página

        // Obtener valores
        let nombre = $("#nombre").val().trim();
        let email = $("#email").val().trim();
        let telefono = $("#telefono").val().trim();
        let negocio = $("#negocio").val().trim();

        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Teléfono:", telefono);
        console.log("Negocio:", negocio);

        // Validación simple
        if (nombre === "" || email === "") {

            $("#message").html(`
                <div class="alert alert-danger" role="alert">
                    Por favor, completa los campos obligatorios (Nombre y Email).
                </div>
            `);

        } else {

            $("#message").html(`
                <div class="alert alert-success" role="alert">
                    ¡Gracias por ponerte en contacto! Te responderemos pronto.
                </div>
            `);

            $("#contactForm")[0].reset(); // Limpia el formulario
        }
    });

    // ---------------------------------------------------
    //       SMOOTH SCROLL SOLO PARA EL NAVBAR
    // ---------------------------------------------------

    $("nav a").on("click", function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            let destino = $(this.hash);

            $("html, body").animate(
                {
                    scrollTop: destino.offset().top - 60 // ajusta según el alto del nav
                },
                600
            );
        }
    });

}); // <-- cierre correcto de document.ready
