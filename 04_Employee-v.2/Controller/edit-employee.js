
import { loadEmployees } from './load-employees.js';


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
		const id = document.getElementById('id').value;
		try {
			const res = await fetch('Model/employee.php?action=edit&id='+id, {
				method: 'POST',
				body: formData
			});
			const result = await res.json();

			if (result.success) {
				alert('Updated successfully.');
				document.querySelector('.edit-form-container').classList.add('hidden');
				loadEmployees();
			} else {
				alert(result.message || 'Update failed.');
			}
		} catch (err) {
			alert('Server error.');
			
		}
	});
}
