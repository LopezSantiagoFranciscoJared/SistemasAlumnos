let usuario = "admin";
        let contraseña = "123#";

        function sesion() {
            let usua = document.getElementById('usuario').value;
            let contra = document.getElementById('contraseña').value;
            let alerta = document.getElementById('alerta');

            if (usua == "" || contra == "") {
                alerta.innerHTML = 'Error al iniciar sesión: Campos vacíos';
                alerta.style.display = 'block';
            } else if (usua == usuario && contra == contraseña) {
                window.location.href = "Bienvenida.html";
            } else {
                alerta.innerHTML = 'Error al iniciar sesión: Credenciales incorrectas';
                alerta.style.display = 'block';
            }
        }

