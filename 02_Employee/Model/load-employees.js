import { getEmployee } from '../Model/get-employee.js'
import { editEmployee } from '../Model/edit-employee.js'
import { addEmployee } from '../Model/add-employee.js'
import { deleteEmployee } from '../Model/delete-employee.js'
let currentEmployeeId = null;
export async function loadEmployees() {
	const response = await fetch('Controller/load-employees.php');
	const data = await response.json();

	const tbody = document.querySelector('.employee-table tbody');
	tbody.innerHTML = "";

	data.forEach(employee => {
		const row = document.createElement('tr');

		['id', 'name', 'position', 'age'].forEach(key => {
			const td = document.createElement('td');
			td.textContent = employee[key];
			row.appendChild(td);
		});

		const actionCell = document.createElement('td');
		const btn = document.createElement('button');
		btn.textContent = 'View';
		btn.addEventListener('click', () =>{
			currentEmployeeId = employee.id;
			getEmployee(employee);
		});
		actionCell.appendChild(btn);
		row.appendChild(actionCell);

		tbody.appendChild(row);
	});
}
	const deleteBtn = document.getElementById('delete-form');
		deleteBtn.addEventListener('click', () => {
		deleteEmployee(currentEmployeeId);
	});

loadEmployees();
editEmployee(); 
addEmployee();

