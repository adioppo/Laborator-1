function openModalImages(img) {
	//alert("new open merge");
	
  var modal = document.getElementById("modal_imagini");
  var modalImg = document.getElementById("imagini-display");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModalImages() {
  var modal = document.getElementById("modal_imagini");
  modal.style.display = "none";
}
