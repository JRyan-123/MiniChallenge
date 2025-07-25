import { getEmployee } from './get-employee.js'

let rowsPerPage = 3;
let currentPage = 1;
let employeeData = [];

export async function loadEmployees() {
	const response = await fetch('Model/employee.php?action=list');
	employeeData = await response.json();

	const btnDiv = document.getElementById("page-btn");
	displayPage(employeeData, currentPage, rowsPerPage);
	setupPagination(employeeData, btnDiv);


}

export function displayPage(data, page, rowsPerPage) {
	const tbody = document.querySelector('.employee-table tbody');
	tbody.innerHTML = "";

	let start = (page - 1) * rowsPerPage;
	let end = start + rowsPerPage;
	let pageData = data.slice(start, end); 

	pageData.forEach(employee => {
		const row = document.createElement('tr');

		['id', 'name', 'position', 'age'].forEach(key => {
			const td = document.createElement('td');
			td.textContent = employee[key];
			row.appendChild(td);
		});

		const actionCell = document.createElement('td');
		const btn = document.createElement('button');
		btn.textContent = 'View';
		btn.addEventListener('click', () =>getEmployee(employee));
		actionCell.appendChild(btn);
		row.appendChild(actionCell);

		tbody.appendChild(row);
	});
}
export function setupPagination(data,  wrapper) {
	wrapper.innerHTML = "";

	const pageCount = Math.ceil(data.length / rowsPerPage);

	for (let i = 1; i <= pageCount; i++) {
		const btn = paginationBtn(i);
		wrapper.appendChild(btn);
	}
}
 function paginationBtn(page) {
	const button = document.createElement("button");
	button.textContent = page;
	
	if (currentPage === page) {
		button.classList.add("active");
	}
	button.addEventListener('click' , () => {
		currentPage = page;
		displayPage(employeeData, currentPage, rowsPerPage);

		const buttons = document.querySelectorAll("#page-btn button");
		buttons.forEach(eBtn => {
			eBtn.classList.remove("active");
		});

		button.classList.add("active");
	});
	return button;
}