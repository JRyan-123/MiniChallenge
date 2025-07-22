export function getEmployee(data) {
	const editContainer = document.querySelector('.edit-form-container');
	const addContainer = document.querySelector('.add-form-container');
	editContainer.classList.remove('hidden');
	addContainer.classList.add("hidden");
	document.querySelectorAll('[data-key]').forEach(input => {
		const key = input.getAttribute('data-key');
		input.value = data[key] ?? '';
	});


}
