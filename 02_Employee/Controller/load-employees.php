<?php
require 'config.php';

$stmt = $pdo->query("SELECT * FROM employeeTable ORDER BY id DESC");
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($data);
