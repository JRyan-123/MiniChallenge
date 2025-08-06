<?php
/**
 * 
 */
class Database
{
	private $host = 'localhost';
	private $dbname = 'employeedb';
	private $uname = 'root';
	private $pword = '';
	private $pdo;

	public function __construct()
	{
		try {
			
			$dsn = "mysql:host={$this->host};dbname={$this->dbname};";

			$this->pdo = new PDO($dsn, $this->uname, $this->pword, [
				PDO::ATTR_ERRMODE					=>	PDO::ERRMODE_EXCEPTION,
				PDO::ATTR_DEFAULT_FETCH_MODE		=>	PDO::FETCH_ASSOC,
				PDO::ATTR_EMULATE_PREPARES			=>	false
			]);

		} catch (Exception $e) {
			die("Error connection: ". $e->getMessage());
		}
	}
	public function connect(): PDO
	{
		return $this->pdo;
	}
}
