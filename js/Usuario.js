function mostrarUsuario() {
    let nombre = document.getElementById("nom").value;
    let correo = document.getElementById("email").value;
    let contrasena = document.getElementById("password").value;
    let alerta = document.getElementById("alerta");

    if (nombre === '' || email === '' || password === '') {
        mostrarAlerta("Todos los campos son obligatorios. Por favor, llene todos los campos.");
        return;
    }
    
    // Validar nombre de usuario
    if (!validarSoloLetras(nombre)) {
        mostrarAlerta("El nombre de usuario solo debe contener letras.");
        return;
    }
    
    // Validar correo electrónico
    if (!validarCorreoElectronico(correo)) {
        mostrarAlerta("El correo electrónico no es válido. Debe ser de gmail.com, outlook.com o itoaxaca.edu.mx");
        return;
    }
    
    // Validar contraseña
    if (!validarContrasena(contrasena)) {
        mostrarAlerta("La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.");
        return;
    }
    
    // Si todas las validaciones pasan, mostrar la información
    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <p><strong>Nombre de Usuario:</strong> ${nombre}</p>
        <p><strong>Correo Electrónico:</strong> ${correo}</p>
        <p><strong>Contraseña:</strong> ${"*".repeat(contrasena.length)}</p>
    `;
    
    let modal = new bootstrap.Modal(document.getElementById("infoModal"));
    modal.show();
}

function LimpiarUsuario() {
    document.getElementById("nom").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    ocultarAlerta();
}

function mostrarAlerta(mensaje) {
    let alerta = document.getElementById("alerta");
    alerta.textContent = mensaje;
    alerta.style.display = "block";
}

function ocultarAlerta() {
    let alerta = document.getElementById("alerta");
    alerta.style.display = "none";
}