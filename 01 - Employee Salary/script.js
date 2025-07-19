const form =  document.querySelector('#salary-form');

form.addEventListener('submit', async function(e) {
	e.preventDefault();

	

	if (isEmpty('employee-name') || isEmpty('position') ||isEmpty('working-hours')) {
		document.getElementById('result').innerHTML =  "Error: Required input fields";
		e.preventDefault();
		return; 
	}
	if (isNegative('working-hours')) {
		document.getElementById('result').innerHTML =  "Error: working-hours should be postive";
		e.preventDefault();
		return; 
	}

	const formData =  new FormData(form);
	try {
		const response = await fetch("calculate.php",{
			method: 'post',
			body: formData
		});
		const resultText = await response.text();
		document.getElementById('result').innerHTML = resultText;
	}
	catch(error) {
		document.getElementById('result').innerHTML =  "Error: " + error.message;
	}
});

function isEmpty(id) 
{
  const el = document.getElementById(id);
  const value = el?.value;
  return !value || value.trim() === "";
}

function isNegative(id){
	const el = document.getElementById(id)?.value;
	const value = Number(el);	
	return !isNaN(value) && value < 0;
}
document.addEventListener('input', function(e) {
  if (e.target.id === 'search') {
    const searchValue = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#result table tbody tr');

    rows.forEach(row => {
      const nameCell = row.cells[0]?.textContent.toLowerCase();
      if (nameCell.includes(searchValue)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }
});