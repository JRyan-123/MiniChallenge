import { loadEmployees } from './load-employees.js';
import { alertConfirm, alertShow } from './alert.js'
import { validateAdd } from './validate-form.js'; 


export async function addEmployee() {
	const showBtn = document.getElementById('show-add-form')
	const addContainer = document.querySelector('.add-form-container');
	const editContainer = document.querySelector('.edit-form-container');
	const cancelBtn = document.getElementById('cancel-add');
	const form = document.getElementById('add-form');


	showBtn.addEventListener("click", () => {
		addContainer.classList.remove("hidden");
		editContainer.classList.add("hidden");

	});

	cancelBtn.addEventListener("click", () => {
		addContainer.classList.add("hidden");
	});

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		


		const formData = new FormData(form);
		const errors = await validateAdd(formData);
  		
  		alertShow("error", errors.name + " \n " +  errors.age, "error")
  		if (Object.keys(errors).length > 0) return;
  	

		const response = await fetch("Model/employee.php?action=add", {
			method: "POST",
			body: formData
		});
		const result = await response.json();



		if (result.success) {
			addContainer.classList.add("hidden")
			alertShow("Success", "successfully added", "success");
			form.reset();
			loadEmployees();
		}
		else{
			alertShow("Error", "Failed to add", "error");
		}
	});
}