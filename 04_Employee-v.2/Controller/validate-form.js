export async function validateAdd(formData) {
  const errors = {};

  const name = formData.get("name").trim();
  const age = parseInt(formData.get("age"));


  // You can check taken names using a request or passed list
  // const takenNames = ["john", "alice"];
 	const res = await fetch('Model/employee.php?action=list');
	const employees = await res.json();
	const nameTaken = employees.some(emp => emp.name.toLowerCase() === name.toLowerCase());
  if (nameTaken) {
    errors.name = "Name is already taken.";
  }

  if (!age || age < 18) {
    errors.age = "Age must be at least 18.";
  }

  return errors;
}

export async function validateEdit(formData) {
  const errors = {};

  const name = formData.get("name").trim();
  const age = parseInt(formData.get("age"));
  const id = parseInt(formData.get("id"));

  // You can check taken names using a request or passed list
  // const takenNames = ["john", "alice"];
  const res = await fetch('Model/employee.php?action=list');
  const employees = await res.json();
  
  const nameTaken = employees.filter(emp => emp.name.toLowerCase() === name.toLowerCase() && emp.id !== id);
  
  if (nameTaken.length > 0) {
    errors.name = "Name is already taken.";
  }

  if (!age || age < 18) {
    errors.age = "Age must be at least 18.";
  }

  return errors;
}


