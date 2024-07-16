function calcularEdad(fechaNacimiento) {
    let fecha = new Date(fechaNacimiento);
    let fechaActual = new Date();
    
    let edad = fechaActual.getFullYear() - fecha.getFullYear();
    let mes = fechaActual.getMonth() - fecha.getMonth();
    
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fecha.getDate())) {
        edad--;
    }
    
    return edad;
}

function validarCorreoElectronico(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|itoaxaca\.edu\.mx|hotmail\.com)$/;
    return regex.test(correo);
}
function validarLetras(texto) {
    const regex = /^[a-zá-úA-ZÁ-Ú\s]+$/;
    return regex.test(texto);
}

function validarLongitudNumero(numero, maxLongitud) {
    return numero.toString().length <= maxLongitud;
}

function validarMayorDeEdad(fechaNacimiento) {
    const edad = calcularEdad(fechaNacimiento);
    return edad >= 18;
}

function validarContrasena(contrasena) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8}$/;
    return regex.test(contrasena);
}

function mostrarUsuario() {
    const nombre = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (nombre === '' && email === '' && password === '') {
        mostrarAlerta("Por favor, complete todos los campos.");
        return;
    }

    if (!validarLetras(nombre)) {
        mostrarAlerta("El nombre de usuario solo debe contener letras.");
        return;
    }

    if (!validarCorreoElectronico(email)) {
        mostrarAlerta("El correo electrónico no es válido. Debe ser de hotmail.com, gmail.com, outlook.com o itoaxaca.edu.mx.");
        return;
    }

    if (!validarContrasena(password)) {
        mostrarAlerta("La contraseña debe incluir una mayúscula, una minúscula, un número y un carácter especial.");
        return;
    }

    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <p><strong>Nombre de Usuario:</strong> ${nombre}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Contraseña:</strong> ********</p>
    `;

    const modal = new bootstrap.Modal(document.getElementById('infoModal'));
    modal.show();
}

function LimpiarUsuario() {
    document.getElementById('nom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

function mostrarAlerta(mensaje) {
    const alerta = document.getElementById('alerta');
    alerta.textContent = mensaje;
    alerta.style.display = 'block';
    setTimeout(() => {
        alerta.style.display = 'none';
    }, 3000);
}

// function validarSoloLetras(texto) {
//     const regex = /^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s]+$/;
//     return regex.test(texto);
// }

// function validarLongitudNumero(numero, longitudMaxima) {
//     return numero.toString().length <= longitudMaxima;
// }

// function validarMayorDeEdad(fechaNacimiento) {
//     return calcularEdad(fechaNacimiento) >= 18;
// }

// function validarContrasena(contrasena) {
//     if (contrasena.length < 8) return false;
//     if (!/[a-z]/.test(contrasena)) return false;
//     if (!/[A-Z]/.test(contrasena)) return false;
//     if (!/\d/.test(contrasena)) return false;
//     if (!/[!@#$%^&*()]/.test(contrasena)) return false;
//     return true;
// }

// // Funciones de manejo del formulario
// function mostrarUsuario() {
//     let nombre = document.getElementById("nom").value;
//     let correo = document.getElementById("email").value;
//     let contrasena = document.getElementById("password").value;

//     // Validar nombre de usuario
//     if (!validarSoloLetras(nombre)) {
//         mostrarAlerta("El nombre de usuario solo debe contener letras.");
//         return;
//     }

//     // Validar correo electrónico
//     if (!validarCorreoElectronico(correo)) {
//         mostrarAlerta("El correo electrónico no es válido. Debe ser de gmail.com, outlook.com o itoaxaca.edu.mx");
//         return;
//     }

//     // Validar contraseña
//     if (!validarContrasena(contrasena)) {
//         mostrarAlerta("La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.");
//         return;
//     }

//     // Si todas las validaciones pasan, mostrar la información
//     let modalBody = document.getElementById("modalBody");
//     modalBody.innerHTML = `
//         <p><strong>Nombre de Usuario:</strong> ${nombre}</p>
//         <p><strong>Correo Electrónico:</strong> ${correo}</p>
//         <p><strong>Contraseña:</strong> ${"*".repeat(contrasena.length)}</p>
//     `;

//     let modal = new bootstrap.Modal(document.getElementById("infoModal"));
//     modal.show();
// }

// function LimpiarUsuario() {
//     document.getElementById("nom").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("password").value = "";
//     ocultarAlerta();
// }

// function mostrarAlerta(mensaje) {
//     let alerta = document.getElementById("alerta");
//     alerta.textContent = mensaje;
//     alerta.style.display = "block";
// }

// function ocultarAlerta() {
//     let alerta = document.getElementById("alerta");
//     alerta.style.display = "none";
// }

// // Asignar eventos a los botones
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('button[onclick="mostrarUsuario()"]').addEventListener('click', mostrarUsuario);
//     document.querySelector('button[onclick="LimpiarUsuario()"]').addEventListener('click', LimpiarUsuario);
// });