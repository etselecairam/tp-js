var form = document.querySelector('form');
var usuario = document.getElementById('usuario');
var clave = document.getElementById('clave');
var submit = document.getElementById('submit');

form.onsubmit = function (e) {
    if (usuario.value === '' || clave.value === '') {
        e.preventDefault();
        alert('Ninguno de los campos puede estar vacío.');
        return;
    }
    if (!usuario.value.includes("@")) {
        e.preventDefault();
        alert('El usuario contiene un "@" si o si!');
        return;
    }
    this.submit(alert("Ahora esto debería llevarte a otro lado!"));
}