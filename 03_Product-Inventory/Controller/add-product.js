import { loadProducts } from './load-products.js';

export async function addProduct(){
	const form = document.getElementById('add-form');
	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		
		const formData = new FormData(form);
		const response = await fetch('Model/product.php?action=add', {
			method: "POST",
			body: formData
		});
		const result = await response.json();
		console.log(result.success);
		if (result.success) {
			alert("Succesfully add");
			form.reset();
			loadProducts();
			const editForm = document.querySelector("#edit-form");
	  		const addForm = document.querySelector("#add-form");

	  		editForm.classList.remove('hidden');
	  		addForm.classList.add('hidden');
		}

	});

	
}