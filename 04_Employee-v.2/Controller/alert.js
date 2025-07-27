export  function alertConfirm(title, msg, confirmText) {
	return Swal.fire({
	  title: title,
	  text: msg,
	  icon: "warning",
	  showCancelButton: true,
	  confirmButtonColor: "#3085d6",
	  cancelButtonColor: "#d33",
	  confirmButtonText: confirmText
	});
}

export function alertShow(title, msg, icon) {
	Swal.fire({
	  title: title,
	  text: msg,
	  icon: icon
	});
}

