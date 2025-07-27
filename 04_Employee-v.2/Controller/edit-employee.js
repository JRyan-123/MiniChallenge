
import { loadEmployees } from './load-employees.js';
import { alertConfirm, alertShow } from './alert.js'
import { validateAdd, validateEdit } from './validate-form.js'; 


export function editEmployee() {
	const form = document.getElementById('edit-form');
	const cancelBtn = document.getElementById('cancel-edit');
	
	cancelBtn.addEventListener('click', () => {
		document.querySelector('.edit-form-container').classList.add('hidden');
		form.reset();
	});

	form.addEventListener('submit', async e => {
		e.preventDefault();

		const formData = new FormData(form);
		const errors = await validateEdit(formData);
		alertShow("error", errors.name + " \n " +  errors.age, "error")
	
		if (Object.keys(errors).length > 0) return;


		const id = document.getElementById('id').value;
		try {
			const res = await fetch('Model/employee.php?action=edit&id='+id, {
				method: 'POST',
				body: formData
			});
			const result = await res.json();

			if (result.success) {
				alertShow("Update", "Updated successfully", "success");
				document.querySelector('.edit-form-container').classList.add('hidden');
				loadEmployees();
			} else {
				alertShow("Update", "Update failed", "error");
			}
		} catch (err) {
			alertShow("Error", "Update Error", "error");
			
		}
	});
}
