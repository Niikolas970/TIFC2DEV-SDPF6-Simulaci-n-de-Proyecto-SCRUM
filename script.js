const formulario = document.querySelector('form');


formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        ciudad: document.getElementById('ciudad').value
    };

    localStorage.setItem('datos-de-usuario', JSON.stringify(usuario));
    console.log('Los datos guardados están en localStorage:', usuario);
    alert("⭐ Datos guardados correctamente 🌟");
});