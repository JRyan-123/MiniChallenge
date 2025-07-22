<?php

$host = "localhost";
$dbname = "employeedb";
$username = "root";
$password = "";

$dsn = "mysql:host=$host;dbname=$dbname";

try {
	$pdo = new PDO($dsn , $username, $password, [
 				PDO::ATTR_ERRMODE				=>	PDO::ERRMODE_EXCEPTION,
 				PDO::ATTR_DEFAULT_FETCH_MODE	=>	PDO::FETCH_ASSOC,
 				PDO::ATTR_EMULATE_PREPARES		=>	false
	]);
} catch (Exception $e) {
	die("Error : ". $e->getMessage());
}