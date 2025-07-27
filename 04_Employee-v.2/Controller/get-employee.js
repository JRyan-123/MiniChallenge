export function getEmployee(employee) {
	const editContainer = document.querySelector('.edit-form-container');
	const addContainer = document.querySelector('.add-form-container');
	editContainer.classList.remove('hidden');
	addContainer.classList.add("hidden");
	document.querySelectorAll('[data-key]').forEach(input => {
		const key = input.getAttribute('data-key');
		input.value = employee[key] ?? '';
	});


}
//gets all the element with data-key attr(input)
//gets the data key attr value as key(name, age position)
//assigning value to each input