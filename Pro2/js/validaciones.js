
        function validarFormulario() {
         
            var nombre = document.getElementById("nombre").value;
            var email = document.getElementById("email").value;
            var pan = document.getElementById("tipo_pan").value;

           
            if (nombre == "") {
                alert("Escribe tu nombre.");
                return false;
            }

            if (email == "") {
                alert("Escribe tu correo electrónico.");
                return false;
            }

            if (pan == "seleccionar") {
                alert("No olvides elegir tu tipo de pan!");
                return false;
            }

            alert("Tu pedido ha sido enviado con éxito. Gracias :)");
            return true; 
        }
