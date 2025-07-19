<?php

$file = fopen("myfile", 'a');
fputcsv($file , [$employeeName, $position, $workingHours, $rate, $total, $tax, $netSalary, $timestamp]);
fclose($file);


$handle = fopen("myfile", 'r');
if ($handle !== false) {
	echo "<table class='result-table' id='result'>
			<thead>
			<tr>
			  		<th>Employee Name</th>
			  		<th>Position</th>
			  		<th>Working Hours</th>
			  		<th>Rate</th>
			  		<th>Total</th>
			  		<th>Tax</th>
			  		<th>netSsalary</th>
			  	</tr>
			  	</thead>
			  	<tbody>";
			  	while(($datas = fgetcsv($handle)) !== false){
			  		echo "<tr>";
			  		foreach ($datas as $data) {
			  			echo "<td>".htmlspecialchars($data)."</td>";
			  			}
			  		echo "</tr>";
			  		}

			  	echo "</tbody>
			  		</table>";
			  	fclose($handle);
			}
