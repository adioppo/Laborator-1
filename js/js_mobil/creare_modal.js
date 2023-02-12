    function createModal() {
				
		  // Create the modal element
		  var modal = document.createElement("div");
		  modal.id = "myModal";
		  modal.className = "modal";

		  // Create the content container for the modal
		  var modalContent = document.createElement("div");
		  modalContent.className = "modal-content";
		  modal.appendChild(modalContent);
		  
		  // Add any additional content to the modal
		  var modalText = document.createElement("p");
		  modalText.id = "modal_p";
		  modalText.className = "modal_p";
		  //modalText.style = "flex: 55%";
		  modalText.innerHTML = '<div id="sticky_mobil_id" onclick="openMenuModal()"><a id="logo_mobil_id">Cristian Instructor Auto</a><div id="meniu_mobil_id" class="header-right_class"><a id="home_button_mobil_id" class="active_class" onclick="goToHome()">Home</a><a id="contact_button_mobil_id" onclick="goToContact()">Galerie foto</a><a id="about_button_mobil_id" onclick="goToAbout()">About</a></div></div>';
		  modalContent.appendChild(modalText);	  
		  

		  // Create the close button for the modal
		  var closeButton = document.createElement("span");
		  closeButton.id="buton_x";
		  closeButton.className = "close";
		  //closeButton.style = "flex: 45%";
		  closeButton.innerHTML = "&times;";
		  modalContent.appendChild(closeButton);
		  		  

		  // Add the modal to the page
		  document.body.appendChild(modal);		  
		 

		  // Add event listener to the close button to hide the modal when it's clicked
		  closeButton.addEventListener("click", function() { 
		  modal.style.display = "none";
		  document.getElementById('container_meniu_mobil_id').style.display="flex";
		  }); 
				  
}
createModal();
	
