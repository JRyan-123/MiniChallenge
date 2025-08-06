<?php
require_once 'php/Employee_controller.php';
require_once 'php/Database.php';

$db =  new Database();
$conn = $db->connect();



$action = $_GET['action'];

$employee_controller = new Employee_controller($conn);
$employee_controller->handleRequest($action);

