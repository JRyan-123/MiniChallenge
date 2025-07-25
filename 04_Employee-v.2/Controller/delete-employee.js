import { loadEmployees } from './load-employees.js'

export async function deleteEmployee() {

	const editForm = document.querySelector('#edit-form');

	const deleteBtn = document.getElementById("delete-form");

	deleteBtn.addEventListener('click', async () => {
		const id = document.getElementById('id').value;
		if (confirm("Are you sure you want to remove" + id + "?")) {
			const response = await fetch("Model/employee.php?action=delete&id="+id);
			const result = await response.json();
			if (result.success) {
				const editContainer = document.querySelector('.edit-form-container');
				editContainer.classList.add("hidden");
				alert("successfully deleted");
				loadEmployees();
			}
		}
		
	});
	
} 