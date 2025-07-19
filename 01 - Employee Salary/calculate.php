<?php 
$employeeName = $_POST['employee-name'];
$position = $_POST['position'];
$workingHours = $_POST['working-hours'];

function getRateByPosition($position) 
{
    $rates = [
        "Manager" => 300,
        "Staff" => 200,
        "Intern" => 100
    ];

    return $rates[$position] ?? 0;
}

$rate = getRateByPosition($position);
$total =  $workingHours * $rate;
if ($workingHours > 40) {
	$total += ($workingHours - 40) * 50;
}

$tax =  $total*.1;
$netSalary = $total - $tax;  
$timestamp = date('Y-m-d H:i:s');

echo "  <table class='result-table' >
 		<thead>
		  	<tr>
		  		<th>Employee Name</th>
		  		<th>Position</th>
		  		<th>Working Hours</th>
		  		<th>Rate</th>
		  		<th>Total</th>
		  		<th>Tax</th>
		  		<th>netSalary</th>
		  	</tr>
		  	</thead>
		  	<tbody>
		  	<tr>
		  		<td>$employeeName</td>
		  		<td>$position</td>
		  		<td>$workingHours</td>
		  		<td>$rate</td>
		  		<td>$total</td>
		  		<td>$tax</td>
		  		<td>$netSalary</td>

		  	</tr>
		  	</tbody>
		</table>";

include 'file_handling.php';

