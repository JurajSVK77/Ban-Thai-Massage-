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

$configPath = __DIR__ . '/../../../../shared/openai-config.php';
if (!file_exists($configPath)) {
    echo json_encode([
        "reply" => "DEBUG: Config súbor neexistuje na ceste: " . $configPath
    ]);
    exit;
}

require_once $configPath;
$apiKey = defined('OPENAI_API_KEY') ? OPENAI_API_KEY : '';

if (!$apiKey) {
    echo json_encode([
        "reply" => "DEBUG: OPENAI_API_KEY sa nenašiel."
    ]);
    exit;
}

if (!function_exists('curl_init')) {
    echo json_encode([
        "reply" => "DEBUG: cURL nie je dostupné na serveri."
    ]);
    exit;
}

$systemPrompt = "Si Mali AI, virtuálna asistentka salónu Baan Thai Massage Galanta.\nOdpovedaj po slovensky.\nBuď stručná a profesionálna.\nPomáhaj s výberom masáží.\nOdporúčaj rezerváciu cez Bookio.\nMasáže sú wellness služby a nenahrádzajú zdravotnú starostlivosť.";

$data = [
    "model" => "gpt-4o-mini",
    "messages" => [
        [
            "role" => "system",
            "content" => $systemPrompt
        ],
        [
            "role" => "user",
            "content" => $message
        ]
    ]
];

$ch = curl_init('https://api.openai.com/v1/chat/completions');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($response === false) {
    echo json_encode([
        "reply" => "DEBUG: cURL error: " . $curlError
    ]);
    exit;
}

if ($httpCode !== 200) {
    echo json_encode([
        "reply" => "DEBUG: OpenAI HTTP chyba: " . $httpCode . " Response: " . $response
    ]);
    exit;
}

$responseData = json_decode($response, true);
$reply = $responseData['choices'][0]['message']['content'] ?? "DEBUG: Chýba obsah odpovede v JSON: " . $response;

echo json_encode([
    "reply" => $reply
]);
?>
