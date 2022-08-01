<?php

    if(isset($_POST)) { // Verifica si se ha enviado algo por POST
        echo "Recibido: " . $_POST['user']; // Imprime el valor de la variable user
    }
?>