function setStorage(comp_type){
	
	
	if(comp_type == "scroll"){
		
		localStorage.lbl_comp = document.getElementById("scroll_btn").innerHTML;
		
	}
	else if(comp_type == "wis"){
		
		localStorage.lbl_comp = document.getElementById("wis_btn").innerHTML;	
		
	}
	
	
	
}
