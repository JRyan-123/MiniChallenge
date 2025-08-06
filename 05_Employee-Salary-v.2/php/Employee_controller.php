<?php
require_once 'php/Employee.php';
require_once 'php/Rates.php';
require_once 'php/Salary.php';

class Employee_controller
{
	private $employee;

		public function __construct($conn)
		{
				$this->employee = new Employee($conn);

		}
		public function handleRequest($action)
		{
		    switch ($action) {
		    	case 'list':
		    		echo json_encode($this->employee->list());
		    		break;
		    	case 'add':
		    		$name = $_POST['name'] ?? '';
		    		$hours = $_POST['WorkingHours'] ?? 0;
		    		$position = $_POST['position']?? '';
		    		$rate = Rates::getRate($position);

		    		$salary = new Salary($rate, $hours);

		    		echo json_encode($this->employee->add(
		    			$name,
		    			$position,
		    			$hours,
		    			$rate,
		    			$salary->earnings,
		    			$salary->tax,
		    			$salary->netSalary
		    		));

		    		break;
		    	default:
		    		
		    		break;
		    }
		}
		


}
