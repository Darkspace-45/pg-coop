document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const codigo_usuario = document.getElementById('codigo_usuario').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const correo_electronico = document.getElementById('correo_electronico').value;
    const cedula = document.getElementById('cedula').value;

    const userData = {
        codigo_usuario,
        nombre,
        apellido,
        telefono,
        correo_electronico,
        cedula
    };

    console.log('Datos del usuario:', userData);
});