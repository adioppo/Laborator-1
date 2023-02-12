function goToHome()
  {	
			
	if(window.innerWidth>600)
	{
		const element0 = document.getElementById("span_meniu");
		const cssObj0 = window.getComputedStyle(element0, null);
		let bgColor0 = cssObj0.getPropertyValue("height");
		var count0 = parseFloat(bgColor0.slice(0, -2));	

		document.getElementById("homeButonHandler").style.height= count0+"px";
		
		window.scrollTo(0, 0);
	}
	else
	{		
		document.getElementById("myModal").style.display = "none";	
		document.getElementById("container_meniu_mobil_id").style.display="flex";
		
		const element0 = document.getElementById("container_meniu_mobil_id");
		const cssObj0 = window.getComputedStyle(element0, null);
		let bgColor0 = cssObj0.getPropertyValue("height");
		var count0 = parseFloat(bgColor0.slice(0, -2));	

		document.getElementById("modalHomeButonHandler").style.height= count0+"px";
			
		window.scrollTo(0, 0);
	}	
  }
  
  function goToContact()
  {	
	if(window.innerWidth>600)
	{
		var homeHeight = document.getElementById("home_section_id").offsetHeight;	
		
		const element = document.getElementById("contactH3_id");
		const cssObj = window.getComputedStyle(element, null);
		let bgColor = cssObj.getPropertyValue("margin-block-start");
		var count = parseFloat(bgColor.slice(0, -2));
		
		const element0 = document.getElementById("span_meniu");
		const cssObj0 = window.getComputedStyle(element0, null);
		let bgColor0 = cssObj0.getPropertyValue("height");
		var count0 = parseFloat(bgColor0.slice(0, -2));	

		document.getElementById("homeButonHandler").style.height= count0+"px";
		
		window.scrollTo(0, homeHeight+count);
	}
	else
	{		
		document.getElementById("myModal").style.display = "none";	
		document.getElementById("container_meniu_mobil_id").style.display="flex";
		var homeHeight = document.getElementById("home_section_id").offsetHeight;
				
		const element = document.getElementById("contactH3_id");
		const cssObj = window.getComputedStyle(element, null);
		let bgColor = cssObj.getPropertyValue("margin-block-start");
		var count = parseFloat(bgColor.slice(0, -2));
		
		const element0 = document.getElementById("container_meniu_mobil_id");
		const cssObj0 = window.getComputedStyle(element0, null);
		let bgColor0 = cssObj0.getPropertyValue("height");
		var count0 = parseFloat(bgColor0.slice(0, -2));
		
		document.getElementById("modalHomeButonHandler").style.height= count0+"px";
		
		window.scrollTo(0, homeHeight+count);
	}	
  }
  
  function goToAbout()
  {
	
	if(window.innerWidth>600)
	{
		var homeHeight = document.getElementById("home_section_id").offsetHeight;
		var contactHeight = document.getElementById("contact_section_id").offsetHeight;
		
		const element = document.getElementById("contactH3_id");
		const cssObj = window.getComputedStyle(element, null);
		const element2 = document.getElementById("aboutH3_id");
		const cssObj2 = window.getComputedStyle(element2, null);
		let bgColor = cssObj.getPropertyValue("margin-block-start");
		var count = parseFloat(bgColor.slice(0, -2));
		let bgColor2 = cssObj2.getPropertyValue("margin-block-start");
		var count2 = parseFloat(bgColor2.slice(0, -2));
		
		const element0 = document.getElementById("span_meniu");
		const cssObj0 = window.getComputedStyle(element0, null);
		let bgColor0 = cssObj0.getPropertyValue("height");
		var count0 = parseFloat(bgColor0.slice(0, -2));	

		document.getElementById("homeButonHandler").style.height= count0+"px";
		
		window.scrollTo(0, homeHeight+contactHeight+count+count2);
	}
	else
	{		
		document.getElementById("myModal").style.display = "none";	
		document.getElementById("container_meniu_mobil_id").style.display="flex";
		var homeHeight = document.getElementById("home_section_id").offsetHeight;
		var contactHeight = document.getElementById("contact_section_id").offsetHeight;
		
		const element = document.getElementById("contactH3_id");
		const cssObj = window.getComputedStyle(element, null);
		const element2 = document.getElementById("aboutH3_id");
		const cssObj2 = window.getComputedStyle(element2, null);
		let bgColor = cssObj.getPropertyValue("margin-block-start");
		var count = parseFloat(bgColor.slice(0, -2));
		let bgColor2 = cssObj2.getPropertyValue("margin-block-start");
		var count2 = parseFloat(bgColor2.slice(0, -2));
		
		const element0 = document.getElementById("container_meniu_mobil_id");
		const cssObj0 = window.getComputedStyle(element0, null);
		let bgColor0 = cssObj0.getPropertyValue("height");
		var count0 = parseFloat(bgColor0.slice(0, -2));
		
		document.getElementById("modalHomeButonHandler").style.height= count0+"px";
				
		window.scrollTo(0, homeHeight+contactHeight+count+count2);
	}	
  }