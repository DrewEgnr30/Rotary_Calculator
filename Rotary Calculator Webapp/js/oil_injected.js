function setStorage(comp_type){
	
	
	if(comp_type == "modulation"){
		
		localStorage.lbl_comp = document.getElementById("mod_btn").innerHTML;
		
	}
	else if(comp_type == "vs"){
		
		localStorage.lbl_comp = document.getElementById("vs_btn").innerHTML;	
		
	}
	else if(comp_type == "fs"){
		
		localStorage.lbl_comp = document.getElementById("fix_btn").innerHTML;	
		
	}
	

	
}