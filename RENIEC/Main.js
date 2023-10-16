var boton = document.getElementById("boton");

function traer() {
    var dni = document.getElementById("dni").value;
    fetch(
        "procesar_dni.php", // Cambia esto al nombre de tu script PHP
        {
            method: 'POST',
            body: JSON.stringify({ dni: dni }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then((res) => res.json())
    .then((data) => {
        document.getElementById("doc").value = data.numero;
        document.getElementById("nombre").value = data.nombres;
        document.getElementById("apellido").value = data.apellido_paterno + " " + data.apellido_materno;
    })
    .catch(error => console.error('Error:', error));
}

boton.addEventListener("click", traer);
