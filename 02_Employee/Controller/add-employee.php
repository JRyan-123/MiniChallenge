<?php

include "config.php";

$name = $_POST['name'] ?? '';
$position = $_POST['position'] ?? '';
$age = $_POST['age'] ?? '';


try {
	$stmt = $pdo->prepare("INSERT INTO employeetable (name, position, age) VALUES (?, ?, ?)");
	$stmt->execute([$name, $position, $age]);

	echo json_encode(['success' => true]);
} catch (Exception $e) {
	echo json_encode(['success' => false, 'message' => $e-getMessage()]);
}