<?php

include "config.php";

$action = $_GET['action'];

header("Content-Type = application/json");


switch ($action) {
	case 'list':
		$stmt = $pdo->query("SELECT * FROM product_table ORDER BY id desc");
		echo json_encode($stmt->fetchAll());
		break;

	case 'add':
		$name = $_POST['name'];
		$category = $_POST['category'];
		$stock = $_POST['stock'];

		$stmt = $pdo->prepare("INSERT INTO product_table (name, category, stock) VALUES (?, ?, ?)");
		$stmt->execute([$name, $category, $stock]);

		echo json_encode(['success' => true]);
		break;
	case 'edit':
		$name = $_POST['name'];
		$category = $_POST['category'];
		$stock = $_POST['stock'];
		$id = $_POST['id'];

		$stmt = $pdo->prepare("UPDATE product_table SET name = ?, category = ?, stock = ? WHERE id = ?");
		$stmt->execute([$name, $category, $stock, $id]);

		echo json_encode(['success' => true]);
		break;
	case 'delete':
		$id = $_GET['id'];

		$stmt = $pdo->prepare("DELETE FROM product_table WHERE id = ?");
		$stmt->execute([$id]);
		echo json_encode(['success' => true]);
		break;
	
	default:
		// code...
		break;
}


function isEmpty($name)
{
	if ($name) {
		
	}
}