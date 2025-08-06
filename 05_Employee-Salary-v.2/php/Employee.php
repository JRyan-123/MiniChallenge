<?php

class Employee
{
	private $conn;

	public function __construct($dbConn)
	{
		$this->conn = $dbConn;
	}//End Method

	public function list()
	{
	    $stmt = $this->conn->query("SELECT * FROM employee_salary order by id desc");
	    return $stmt->fetchAll();
	}
	public function add(string $name, string $position, int $workHours, int $rate, float $earnings, float $tax, float $netSalary)
	{
	    try {
	    	 $stmt = $this->conn->prepare("INSERT INTO employee_salary(name, position, working_hours, rate, earnings, tax, net_salary) VALUES(?,?,?,?,?,?,?)");
		    $result = $stmt->execute([$name, $position, $workHours, $rate, $earnings, $tax, $netSalary]);
		    return ['success' => true];
	    } catch (Exception $e) {
	    	return ['success' => false, 'error'	=>	$e->getMessage()];
	    }
	    
	}

}
