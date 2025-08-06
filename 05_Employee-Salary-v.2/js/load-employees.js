let currentPage = 1;
let rowsPerPage = 5;
let employees = [];

export async function loadEmployees() {
	const form = document.getElementById('calculate-form');

		const response = await fetch('init.php?action=list');
		employees =  await response.json();	

		const divBtn = document.querySelector('#pagination');

		displayPage(employees, currentPage, rowsPerPage);
		pagination(employees, divBtn, rowsPerPage);
}

function displayPage(data, page, rowsPerPage){
	const tbody =  document.querySelector('#table tbody');
	tbody.innerHTML = '';

	let start = (page-1) * rowsPerPage;
	let end = start + rowsPerPage;
	let sliceData = data.slice(start, end);

	sliceData.forEach(employee => {
		const row = document.createElement('tr');
		const keys = [ 'id', 'name', 'position', 'working_hours','rate', 'earnings', 'tax', 'net_salary'];
		keys.forEach(key => {
			const cell = document.createElement('td');
			cell.innerHTML = employee[key];
			row.appendChild(cell);
		});


	tbody.appendChild(row);

	});

}

function pagination(data, wrapper, rowsPerPage) {
	wrapper.innerHTML = '';

	let totalPages = Math.ceil(data.length / rowsPerPage);
	for (var i = 1; i <= totalPages; ++i) {
	    const btn = createBtn(i);
	    wrapper.appendChild(btn);
	}
}

function createBtn(page) {
	const button = document.createElement('button');
	button.innerHTML = page;

	if (currentPage === page) {
		button.classList.add('active');
	}

	button.addEventListener('click', () => {
		currentPage = page;
		displayPage(employees, currentPage, rowsPerPage);

		const allBtn = document.querySelectorAll('#pagination button');
		allBtn.forEach(ebtn => {
			ebtn.classList.remove('active');
		});
		button.classList.add('active');
	})
	return button;
}