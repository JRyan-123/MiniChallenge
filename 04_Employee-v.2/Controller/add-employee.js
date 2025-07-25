import { loadEmployees } from './load-employees.js';


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

		const response = await fetch("Model/employee.php?action=add", {
			method: "POST",
			body: formData
		});
		const result = await response.json();



		if (result.success) {
			addContainer.classList.add("hidden")
			alert("success");
			form.reset();
			loadEmployees();
		}
		else{
			alert("failed");
		}
	});
}