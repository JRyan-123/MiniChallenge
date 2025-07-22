
import { loadEmployees } from './load-employees.js';

export function editEmployee() {
	const form = document.getElementById('edit-form');
	const cancelBtn = document.getElementById('cancel-edit');
	

	form.addEventListener('submit', async e => {
		e.preventDefault();

		const formData = new FormData(form);
		
		try {
			const res = await fetch('Controller/update-employee.php', {
				method: 'POST',
				body: formData
			});
			const result = await res.json();


			if (result.success) {
				alert('Updated successfully.');
				loadEmployees();
			} else {
				alert(result.message || 'Update failed.');
			}
		} catch (err) {
			alert('Server error.');
			console.error(err);
		}
	});

	cancelBtn.addEventListener('click', () => {
		document.querySelector('.edit-form-container').classList.add('hidden');
		form.reset();
	});


}

