import { loadProducts } from './load-products.js';
export async function deleteProduct() {
	const form = document.querySelector("#product-table");

	form.addEventListener("click", async (e) => {
		if (e.target.id === "delete-btn") {
			const btn = e.target;
			const id = btn.dataset.id;
			if (confirm(`Are you sure you want to delete ${id}?`)) {
				const res = await fetch(`Model/product.php?action=delete&id=${id}`);
				loadProducts();
			}
		}

	});
}