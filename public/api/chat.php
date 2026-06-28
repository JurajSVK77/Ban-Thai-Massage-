<?php
header('Content-Type: application/json; charset=utf-8');
ini_set('display_errors', 1);
error_reporting(E_ALL);

$configPath = __DIR__ . '/../../shared/openai-config.php';

echo json_encode([
    "debug_path" => $configPath,
    "exists" => file_exists($configPath),
    "dir" => __DIR__
]);
exit;
