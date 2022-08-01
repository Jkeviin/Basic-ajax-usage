const button = document.querySelector('.btn');  // crea variable para el boton

button.addEventListener('click', sendRquest); // agrega evento al boton

function sendRquest() { // funcion para enviar la peticion
    const ElObjeto = new XMLHttpRequest();  // crea el objeto para la peticion
    ElObjeto.open('POST','./backend.php', true); // abre la peticion con el metodo POST y la ruta del archivo backend.php
    ElObjeto.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // agrega el header
    ElObjeto.onreadystatechange = function() { // agrega el evento para cuando cambie el estado
        document.getElementById('titulo').innerHTML = ElObjeto.responseText; // agrega el texto de la respuesta al elemento con id titulo
    }
    ElObjeto.send('user=John');  // envia la peticion con el parametro user=John
}

