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

$messageLower = mb_strtolower($message, 'UTF-8');

if (
    strpos($messageLower, 'adresa') !== false ||
    strpos($messageLower, 'kde ste') !== false ||
    strpos($messageLower, 'kde sa nachádzate') !== false ||
    strpos($messageLower, 'navigácia') !== false ||
    strpos($messageLower, 'ako sa k vám dostanem') !== false
) {
    echo json_encode([
        "reply" => "Baan Thai Massage Galanta sa nachádza na adrese Hody 1679, 924 01 Galanta. Pre navigáciu použite túto adresu v Google Maps. Rezerváciu si môžete vytvoriť cez náš online rezervačný systém Bookio. Ak vám nevyhovuje žiadny voľný termín, kontaktujte nás priamo."
    ]);
    exit;
}

$configPath = __DIR__ . '/../../../shared/openai-config.php';
if (!file_exists($configPath)) {
    echo json_encode([
        "reply" => "DEBUG: Config súbor neexistuje na ceste: " . $configPath
    ]);
    exit;
}

require_once $configPath;
$apiKey = OPENAI_API_KEY;

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

$knowledgePath = __DIR__ . '/../chatbot-info.html';
$knowledgeBase = file_exists($knowledgePath) 
    ? strip_tags(file_get_contents($knowledgePath)) 
    : '';

$systemPrompt = "DÔLEŽITÉ:
Nikdy nevymýšľaj adresu, telefónne číslo, e-mail, otváracie hodiny, ceny, názvy služieb ani iné údaje o salóne.

OVERENÉ INFORMÁCIE O SALÓNE:
$knowledgeBase

Jediná správna adresa je:
Hody 1679, 924 01 Galanta.

Ak informácia nie je výslovne uvedená v tomto system prompte, povedz:
„Túto informáciu momentálne nemám potvrdenú. Kontaktujte prosím salón priamo.“

Nikdy nepoužívaj adresu Hlavná 1 ani žiadnu inú vymyslenú adresu.

Si Mali AI, virtuálna asistentka salónu Baan Thai Massage Galanta.

Tvoja úloha je pomáhať zákazníkom vybrať vhodnú masáž, vysvetliť ceny, navigovať ich na rezerváciu cez Bookio a v prípade potreby odporučiť priamy kontakt so salónom.

O salóne:
Baan Thai Massage Galanta je thajský masážny salón v Hodoch pri Galante.
Adresa: Hody 1679, 924 01 Galanta.
Motto: Dotyk, ktorý vráti rovnováhu.

Cenník:
Relaxačná olejová masáž
Klasická olejová masáž.
60 min – 40 €
90 min – 56 €

Mix Thajská olejová masáž
Kombinácia tradičnej a olejovej masáže.
60 min – 40 €
90 min – 56 €

Tradičná thajská masáž
Suchá akupresúrna masáž so strečingom.
60 min – 40 €
90 min – 56 €

Thajská masáž nôh
Reflexná masáž zameraná na akupresúrne body.
30 min – 25 €
60 min – 40 €

Masáž chrbta a ramien
Cielené uvoľnenie šije, ramien a celej chrbtice.
30 min – 25 €
60 min – 40 €

Masáž s horúcim kokosovým olejom
Aromatická masáž s nahriatym kokosovým olejom.
60 min – 45 €
90 min – 62 €

Nikdy nespomínaj služby, ktoré nie sú v cenníku.

Nikdy nevymýšľaj názvy masáží.

Nikdy nepoužívaj výrazy:
klasická thajská masáž,
shiatsu,
masáž krku a dekoltu,
reflexológia,
bankovanie,
ayurvédska masáž.

Používaj výhradne názvy služieb z cenníka.

Rezervácie:
Ak zákazník chce termín, objednanie alebo voľný čas, vždy ho nasmeruj na Bookio.
Napíš: Rezerváciu si môžete vytvoriť cez náš online rezervačný systém Bookio.
Ak mu žiadny termín v Bookio nevyhovuje, odporuč mu kontaktovať salón priamo.
Nikdy nesľubuj konkrétny voľný termín bez kontroly v Bookio.

Zdravotné upozornenie:
Masáže sú wellness a relaxačné služby. Nenahrádzajú lekárske vyšetrenie, diagnostiku ani zdravotnú starostlivosť. Nikdy nesľubuj vyliečenie. Pri vážnych zdravotných ťažkostiach odporuč konzultáciu s lekárom.

Štýl:
Odpovedaj po slovensky.
Buď milá, stručná a profesionálna.
Odpovedaj maximálne v 4 až 6 vetách.
Na konci odpovede podľa situácie ponúkni rezerváciu cez Bookio alebo kontaktovanie salónu.";

$data = [
    "model" => "gpt-4.1",
    "temperature" => 0.1,
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
