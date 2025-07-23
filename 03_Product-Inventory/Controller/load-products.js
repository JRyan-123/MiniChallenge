let currentPage = 1;
const rowsPerPage = 10; // Customize how many rows to show per page
let productsData = []; // Store fetched data globally

// 1. Main function to fetch and initialize pagination
export async function loadProducts() {
	const res = await fetch("Model/product.php?action=list");
	productsData = await res.json();

	displayPage(currentPage);
	setupPagination(productsData, document.getElementById("pagination"));
}

// 2. Show only the items for the current page
function displayPage(page) {
	const tbody = document.querySelector('#product-table tbody');
	tbody.innerHTML = "";

	const start = (page - 1) * rowsPerPage;
	const end = start + rowsPerPage;
	const pageItems = productsData.slice(start, end);

	pageItems.forEach(data => {
		const row = document.createElement('tr');

		['id', 'name', 'category', 'stock'].forEach(key => {
			const cell = document.createElement('td');
			cell.textContent = data[key];
			row.appendChild(cell);
		});

		const actionCell = document.createElement('td');

		const editBtn = document.createElement('button');
		editBtn.textContent = "Edit";
		editBtn.id = "edit-btn";
		editBtn.dataset.id = data.id;
		editBtn.dataset.name = data.name;
		editBtn.dataset.category = data.category;
		editBtn.dataset.stock = data.stock;

		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = "Delete";
		deleteBtn.id = "delete-btn";
		deleteBtn.dataset.id = data.id;

		actionCell.appendChild(editBtn);
		actionCell.appendChild(deleteBtn);

		row.appendChild(actionCell);
		tbody.appendChild(row);
	});
}

// 3. Create pagination buttons
function setupPagination(items, wrapper) {
	wrapper.innerHTML = "";

	const pageCount = Math.ceil(items.length / rowsPerPage);
	for (let i = 1; i <= pageCount; i++) {
		const btn = paginationButton(i);
		wrapper.appendChild(btn);
	}
}

// 4. Individual page button
function paginationButton(page) {
	const button = document.createElement("button");
	button.textContent = page;

	if (page === currentPage) button.classList.add("active");

	button.addEventListener("click", () => {
		currentPage = page;
		displayPage(currentPage);

		// Highlight active button
		document.querySelectorAll("#pagination button").forEach(btn => btn.classList.remove("active"));
		button.classList.add("active");
	});

	return button;
}
