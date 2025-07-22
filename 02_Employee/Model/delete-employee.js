import { loadEmployees } from './load-employees.js'

export async function deleteEmployee(id) {
	const confirmDel = confirm("Are you sure you want to delete?");
	if (!confirmDel) return;
	
	const editContainer = document.querySelector('.edit-form-container');

	const response = await fetch("Controller/delete-employee.php", {
		method: "POST",
		header: {
			'Content-Type' : 'application/json'
		},
		body: JSON.stringify({ id })
	});

	const result = await response.json();

	if (result.success) {
		alert("deleted successfully");
		editContainer.classList.add("hidden");
		loadEmployees();
	}
	else{
		alert("deleted failed");
	}
} 