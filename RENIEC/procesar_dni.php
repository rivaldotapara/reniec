<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dni = $_POST['dni'];
    $api_url = "https://apiperu.dev/api/dni/{$dni}?api_token=1070f15b731623c684e3d45bb0b949fbdc6b38fa68ebcd50c824c189f663b7f2";
    $response = file_get_contents($api_url);
    header('Content-Type: application/json');
    echo $response;
} else {
    http_response_code(405); // Método no permitido
}

?>
