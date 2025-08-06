<?php



class Salary
{
	public float $earnings;
	public float $tax;
	public float $netSalary;

    public function __construct(int $rate, int $workHours)
    {
        $this->earnings = $rate * $workHours;
        $this->tax = $this->earnings * .10;
        $this->netSalary = $this->earnings - $this->tax;
    }
}
