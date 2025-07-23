
import { loadProducts } from './load-products.js';

export async function editProduct(){
	const form = document.querySelector('#edit-form');
	const table = document.querySelector('#product-table');

	  table.addEventListener('click', (e) => {
	  	if (e.target.id === "edit-btn") {
	  		const btn = e.target;
	  		form.id.value = btn.dataset.id;
	  		form.name.value = btn.dataset.name;
	  		form.category.value = btn.dataset.category;
	  		form.stock.value = btn.dataset.stock;

	  		const editForm = document.querySelector("#edit-form");
	  		const addForm = document.querySelector("#add-form");

	  		editForm.classList.remove('hidden');
	  		addForm.classList.add('hidden');
	  	}
	  });

	  form.addEventListener('submit', async (e) => {
	  		e.preventDefault();

	  		const formData = new FormData(form);

	  		const res = await fetch('Model/product.php?action=edit', {
	  			method: "POST",
	  			body: formData
	  		});

	  		const result = await res.json();

	  		if (result.success) {
	  			alert("Succesfully Edited!");
	  			loadProducts();
	  		}
	  		else {
	  			alert("Faield")
	  		}

	  });

	  const newBtn = document.getElementById("add-new");
	  newBtn.addEventListener("click", () => {
	  		const editForm = document.querySelector("#edit-form");
	  		const addForm = document.querySelector("#add-form");

	  		editForm.classList.add('hidden');
	  		addForm.classList.remove('hidden');
	  });
}