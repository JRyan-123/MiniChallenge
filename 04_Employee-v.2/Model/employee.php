<?php

include 'config.php';

$action = $_GET['action'];

$search = $_GET['keyword'] ?? '';

$id = $_GET['id'] ?? null;
$name = $_POST['name'] ?? '';
$position = $_POST['position'] ?? '';
$age = $_POST['age'] ?? '';

		
switch ($action) {
	case 'list':
		$stmt = $pdo->query("SELECT * FROM employeetable");
		$result = $stmt->fetchAll();

		echo json_encode($result);
		break;
	case 'add':
		$stmt = $pdo->prepare("INSERT INTO employeetable (name, position, age) VALUES (?, ?, ?)");
		$stmt->execute([$name, $position, $age]);

		echo json_encode(['success' => true]);
		break;
	case 'edit':
		$stmt = $pdo->prepare("UPDATE employeeTable SET name=?, position=?, age=? WHERE id=?");
		$stmt->execute([$name, $position, $age, $id]);	

		echo json_encode(['success' => true]);
		break;
	case 'delete':
				$stmt = $pdo->prepare("DELETE FROM employeetable WHERE id = ?");
		$stmt->execute([$id]);

		echo json_encode(['success' => true]);
		break;
	case 'search':
		$stmt = $pdo->prepare("SELECT * FROM employeetable WHERE name LIKE ? OR position LIKE ?");
	    $searchTerm = "%$search%";
	    $stmt->execute([$searchTerm, $searchTerm]);
		$result = $stmt->fetchAll();
    	echo json_encode($result);
		break;
	default:
		// code...
		break;
}
		