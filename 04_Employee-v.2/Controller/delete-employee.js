import { loadEmployees } from './load-employees.js'
import { alertConfirm, alertShow } from './alert.js'

export async function deleteEmployee() {

	const editForm = document.querySelector('#edit-form');

	const deleteBtn = document.getElementById("delete-form");

	deleteBtn.addEventListener('click', async () => {
		const id = document.getElementById('id').value;
		const alertResult = await alertConfirm("Delete?", "Are you sure you want to delete "+ id +"?", "Delete")
		if (alertResult.isConfirmed) {
			const response = await fetch("Model/employee.php?action=delete&id="+id);
			const result = await response.json();
			if (result.success) {
				const editContainer = document.querySelector('.edit-form-container');
				editContainer.classList.add("hidden");
				alertShow("Success","successfully deleted","success");
				loadEmployees();
			}
		}
		
	});
	
} 