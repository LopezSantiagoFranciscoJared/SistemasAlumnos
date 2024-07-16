function mostrarInformacion() {
    const nombre = document.getElementById('nom').value.trim();
    const apellidoPaterno = document.getElementById('ApPat').value.trim();
    const apellidoMaterno = document.getElementById('ApMat').value.trim();
    const fechaNacimiento = document.getElementById('FechNac').value.trim();
    const edad = calcularEdad(fechaNacimiento);
    const genero = document.querySelector('input[name="genero"]:checked');
    const carrera = document.getElementById('Carre').value;
    const numControl = document.getElementById('numControl').value;

    const alerta = document.getElementById('alerta');

    if (nombre === '' || apellidoPaterno === '' || apellidoMaterno === '' || fechaNacimiento === '' || !genero || numControl === '') {
        alerta.textContent = 'Completa Todos los Campos del Formulario.';
        alerta.style.display = 'block';
        return;
    }
    if (carrera == 'Seleccionar') {
        alerta.textContent = 'Seleccione Una Carrera.';
        alerta.style.display = 'block';
        return;
    }

    alerta.style.display = 'none';
    const esMayorDeEdad = edad >= 18 ? 'Sí' : 'No';

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
    <p><strong>Número de Control:</strong> ${numControl}</p>    
    <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellido Paterno:</strong> ${apellidoPaterno}</p>
        <p><strong>Apellido Materno:</strong> ${apellidoMaterno}</p>
        <p><strong>Fecha de Nacimiento:</strong> ${fechaNacimiento}</p>
        <p><strong>Género:</strong> ${genero.value}</p>
        <p><strong>Carrera:</strong> ${carrera}</p>
        <p><strong>Mayor de edad:</strong> ${esMayorDeEdad}</p>
    `;
    modalBody.innerHTML += `<p><strong>Edad:</strong> ${edad} años</p>`;

    const modal = new bootstrap.Modal(document.getElementById('infoModal'));
    modal.show();
}
function Limpiar() {
    document.getElementById('nom').value = '';
    document.getElementById('ApPat').value = '';
    document.getElementById('ApMat').value = '';
    document.getElementById('FechNac').value = '';
    document.querySelectorAll('input[name="genero"]').forEach((elem) => elem.checked = false);
    document.getElementById('Carre').selectedIndex = 0;
    document.getElementById('numControl').value = '';
}
