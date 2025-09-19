<?php

class Database
{	
	private $host = 'localhost';
	private $uname = 'root';
	private $pword = '';
	private $dbname = 'mini_project';
	private $conn;

	// initialize connection
	public function __construct() {
		$dsn = "mysql:host={$this->host}";
		$this->conn =  new PDO($dsn, $this->uname, $this->pword);
		$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	}

	// create and use DB
    public function createDB()
    {
        $this->conn->exec("CREATE DATABASE IF NOT EXISTS {$this->dbname}");
        $this->conn->exec("USE {$this->dbname}");
        echo "Database Ready";
    }

    // create Table + columns
    public function createTable()
    {
    	$this->conn->exec("CREATE TABLE IF NOT EXISTS students (
    		id INT AUTO_INCREMENT PRIMARY KEY,
    		name VARCHAR(50) NOT NULL,
    		age INT NOT NULL
    	)");
    	echo "Table ready";

    }

    // ready to call conn
    public function getConnection()
    {
    	return $this->conn;
    }
}

class StudentController
{
	private $conn;

	public function __construct($conn)
	{
	    $this->conn = $conn;
	}
	// store student
	public function storeStudent($name, $age)
	{
	    $sql = "INSERT INTO students (name, age) VALUES (:name, :age)";
	    $stmt = $this->conn->prepare($sql);
	    $stmt->execute([':name' => $name, ':age' => $age]);
	}
	// fetch all
	public function getAll()
	{
	    $sql = "SELECT * FROM students ORDER BY id DESC";
	    $stmt =  $this->conn->query($sql);
	    return  $stmt->fetchAll();
	}
	// count all students
	public function countStudent()
	{	
		$sql = "SELECT COUNT(*) FROM students";
	    $stmt = $this->conn->query($sql);
        return $stmt->fetchColumn();
	}
}
// dbsetup
$db = new Database();
$db->createDB();
$db->createTable();
$student_controller = new StudentController($db->getConnection());


// form request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$name = $_POST['name'];
	$age = $_POST['age'];
	$student_controller->storeStudent($name, $age);

	header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

// fetch students
$students = $student_controller->getAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<!-- form student for inserting -->
	<div>
		<form action="" method="post">
		<label for="">NAme</label>
		<input type="text" name="name" required>
		<label for="">Age</label>
		<input type="number" name="age" required>
		<button type="submit">Submit</button>
	</form>
	 <h3>Total Students: <?= $student_controller->countStudent(); ?></h3>
	</div>
	
	<!-- display student -->
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>Age</th>
				<th>Name</th>
			</tr>
		</thead>
		<tbody>
			 <?php foreach ($students as $student): ?>
                <tr>
                    <td><?= $student['id']; ?></td>
                    <td><?= $student['age']; ?></td>
                    <td><?= $student['name']; ?></td>
                </tr>
            <?php endforeach; ?>
		</tbody>
	</table>
</body>
</html>
