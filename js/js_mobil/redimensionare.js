function reportWindowSize() 
		{
			if(window.innerWidth>600)
			{				
				document.getElementById("myModal").style.display="none";
				document.getElementById("container_meniu_mobil_id").style.display="none";
				document.getElementById("3lines").style.display="none";
				document.getElementById("sticky_web_id").style.display="block";
				document.getElementById("homeButonHandler").style.display="block";		
				document.getElementById("modalHomeButonHandler").style.display="none";					
			}  
			else
			{
				document.getElementById("container_meniu_mobil_id").style.display="flex";
				document.getElementById("3lines").style.display="block";
				document.getElementById("sticky_web_id").style.display="none";	
				document.getElementById("homeButonHandler").style.display="none";
				document.getElementById("modalHomeButonHandler").style.display="block";				
			}
			top_resize();
		}	
window.onresize = reportWindowSize;

function top_resize()
{
	if(window.innerWidth>600)
	{
		const element0 = document.getElementById("span_meniu");
		const cssObj0 = window.getComputedStyle(element0, null);
		let bgColor0 = cssObj0.getPropertyValue("height");
		var count0 = parseFloat(bgColor0.slice(0, -2));	

		document.getElementById("homeButonHandler").style.height= count0+"px";		
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
	}
}