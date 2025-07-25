import { loadEmployees } from './load-employees.js';
import { displayPage } from './load-employees.js';
import { setupPagination } from './load-employees.js';

let rowsPerPage = 3;
let currentPage = 1;
let employeeData = [];
export async function searchEmpployee() {

	const searchBar = document.getElementById('keyword');
	searchBar.addEventListener('input', async () => {
		let searchValue = searchBar.value
		
		
		const response = await fetch('Model/employee.php?action=search&keyword='+ encodeURIComponent(searchValue));
		const employeeData = await response.json();

		const btnDiv = document.getElementById("page-btn");
		
		displayPage(employeeData, currentPage, rowsPerPage);
		setupPagination(employeeData, btnDiv);
		
 	});
}