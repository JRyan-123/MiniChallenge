import { loadEmployees } from './load-employees.js'
import { alertShow } from './alert.js'

export async function addEmployee() {
	const form = document.getElementById('calculate-form');

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		const formData = new FormData(form);

		const response = await fetch('init.php?action=add',{
			method: 'POST',
			body: formData
		});
		const result = await response.json();
		if (result.success) {
			alertShow("success", "You successfully added a record", "success");
			loadEmployees();
			form.reset();
		}
		else{
			alertShow("error",  "Failed", "error")
		}

	});
}