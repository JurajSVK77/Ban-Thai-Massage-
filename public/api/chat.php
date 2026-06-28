<?php
header('Content-Type: application/json; charset=utf-8');

$input = json_decode(file_get_contents('php://input'), true);
$message = $input['message'] ?? '';

if (empty($message)) {
    echo json_encode([
        "reply" => "Dobrý deň, som Mali AI, virtuálna asistentka Baan Thai Massage Galanta. Ako vám môžem pomôcť?"
    ]);
    exit;
}

echo json_encode([
    "reply" => "Prijala som vašu správu: " . $message
]);
?>
