<?php
include "config.php";

$id = $_POST['id'] ?? null;
$name = $_POST['name'] ?? '';
$position = $_POST['position'] ?? '';
$age = $_POST['age'] ?? '';

if (!$id) {
	echo json_encode(['success' => false, 'message' => 'Missing employee ID']);
	exit;
}

try {
	$stmt = $pdo->prepare("UPDATE employeeTable SET name=?, position=?, age=? WHERE id=?");
	$stmt->execute([$name, $position, $age, $id]);	

	echo json_encode(['success' => true]);
} catch (PDOException $e) {
	echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}