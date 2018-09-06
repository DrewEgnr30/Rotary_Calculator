// function getStorage(){
	// document.getElementById("lbl_type_oil_free").innerHTML = localStorage.lbl_comp;
	
	// var comp_type = localStorage.lbl_comp;


	// if(comp_type == "Scroll"){
		
		// document.getElementById("op_1").innerHTML = 116;
		
		// document.getElementById("op_2").innerHTML = 145;
		
	// }
	// else if(comp_type == "Water-Injected Screw"){
		
		// document.getElementById("op_1").innerHTML = 175;
		
		
	// }
	// console.log(comp_type);

// }
// var comp_type = localStorage.lbl_comp;
// var compressor = "";
// var idx = 0;
// var wis_units = ['WIS20V','WIS25V','WIS30V','WIS40V','WIS50V','WIS75V'];
// var wis_flows = [98,114,139,175,220,328];
// var scroll_units = ['QOF-2','QOF-3','QOF-5','QOF-7.5','QOF-10','QOF-15','QOF-20','QOF-22','QOF-30'];
// var scroll_flows_116 = [6.1,8.9,14,20.8,28.4,43,55.1,64.8,86];
// var scroll_flows_145 = [4,7.2,12.5,14,23.9,31.8,47.9,49.8,62.9];
// function getCalculation(){
	// var flow = parseInt(document.getElementById("needed_flow").value);
	
	// var pressure = parseInt(document.getElementById("pressure_select").value);
	// console.log(flow);
	// console.log(pressure);
	// console.log(comp_type);
	// if(comp_type == 'Water-Injected Screw'){
		
		// if(isNaN(flow)){
			
			// alert("Please enter a flow");
			// return;
			
		// }
		// else if(isNaN(pressure)){
			
			// alert("Please select a selectable pressure");
			// return;
			
		// }
		// else if(flow > wis_flows[wis_flows.length - 1]){
			
			// alert("Your flow is to high for this model.  Please input a lower flow");
			// return;
			
		// }
		
		// for(i = 0; i < wis_units.length; i++){
			

			
			
			// if(flow < wis_flows[i]){
				
				// idx = i;
				// break;
				
			// }
			
		// }
		// compressor = wis_units[idx];
	// }
	
	// else if(comp_type == 'Scroll' && pressure == 116){
		
		// if(isNaN(flow)){
			
			// alert("Please enter a flow");
			// return;
			
		// }
		// else if(isNaN(pressure)){
			
			// alert("Please select a selectable pressure");
			// return;
			
		// }
		// else if(flow > scroll_flows_116[scroll_flows_116.length - 1]){
			
			// alert("Your flow is to high for this model.  Please input a lower flow");
			// return;
			
		// }
		
		// for(i = 0; i < scroll_units.length; i++){
			
			// if(flow < scroll_flows_116[i]){
				
				// idx = i;
				// break;
				
			// }
			
		// }
		// compressor = scroll_units[idx];
	// }
	
	// else if(comp_type == 'Scroll' && pressure == 145){
		
		// if(isNaN(flow)){
			
			// alert("Please enter a flow");
			// return;
			
		// }
		// else if(isNaN(pressure)){
			
			// alert("Please select a selectable pressure");
			// return;
			
		// }
		// else if(flow > scroll_flows_145[scroll_flows_145.length - 1]){
			
			// alert("Your flow is to high for this model.  Please input a lower flow");
			// return;
			
		// }
		
		// for(i = 0; i < scroll_units.length; i++){
			
			// if(flow < scroll_flows_145[i]){
				
				// idx = i;
				// break;
				
			// }
			
		// }
		// compressor = scroll_units[idx];
	// }
	
	
	
	// localStorage.compressor = compressor;
	// console.log(compressor);
	// document.getElementById('results').href = "results.html";
// }

var flow_needed = 0;

$(window).on('load',function(){
	document.getElementById("lbl_type_oil_free").innerHTML = localStorage.lbl_comp;
	
	

	var comp_type = localStorage.lbl_comp;
	var comp_type_var = "";
	console.log(comp_type);
	option1 = $("<option id='1'></option>").text(100);
	option2 = $("<option id='2'></option>").text(125);
	option3 = $("<option id='3'></option>").text(150);
	option4 = $("<option id='4'></option>").text(175);
	option5 = $("<option id='5'></option>").text(210);
	option6 = $("<option id='6'></option>").text(116);
	option7 = $("<option id='7'></option>").text(145);
	if(comp_type == "Water-Injected Screw"){
		
		comp_type_var = "wis";
		$("select").append(option1);
		$("select").append(option2);
		$("select").append(option3);
		$("select").append(option4);
	}
	else if(comp_type == "Scroll"){
		
		comp_type_var = "scroll";
		$("select").append(option6);
		$("select").append(option7);
	}
	
	
});



$("#calculate").click(function(){
	
	
	var comp_type = localStorage.lbl_comp;
	var flow_needed = parseInt($("#needed_flow").val());
	var pressure_needed = parseInt($("#pressure_select").val());
	var idx = 0;
	var psi_flag = 0;
	var compressor = "";
	var comp_type_var = "";
	var compressors = [];
	var cfm = 0;
	var psi = 0;
	var last_comp = "";
	if(comp_type == "Water-Injected Screw"){
		comp_type_var = "wis";
		top_100 = 328;
		top_125 = 328;
		top_150 = 328;
		top_175 = 328;
		switch(pressure_needed){
			
			case 100:
				if(flow_needed > top_100){
					
					alert("Flow is too high for this pressure.");
					return;
					
				}
				break;
			case 125:
				if(flow_needed > top_125){
					
					alert("Flow is too high for this pressure.");
					return;
					
				}
				break;
			case 150:
				if(flow_needed > top_150){
					
					alert("Flow is too high for this pressure.");
					return;
					
				}
				break;
			case 175:
				if(flow_needed > top_175){
					
					alert("Flow is too high for this pressure.");
					return;
					
				}
				break;
			
		}
		
	}
	else if(comp_type == "Scroll"){
		comp_type_var = "scroll";
		top_116 = 86;
		top_145 = 86;
		
		switch(pressure_needed){
			
			case 116:
				if(flow_needed > top_116){
					
					alert("Flow is too high for this pressure.");
					return;
					
				}
				break;
			case 145:
				if(flow_needed > top_145){
					
					alert("Flow is too high for this pressure.");
					return;
					
				}
				break;

			
		}
		
	}

	console.log(flow_needed);
	console.log(pressure_needed);
	if(isNaN(flow_needed)){
		
		alert("Please enter a flow.");
		return;
	}
	$.ajax({
		type: "GET",
		url: "compressors_final.xml",
		cache: false,
		dataType: "xml",
		success: function(xml){
			$(xml).find(comp_type_var).each(function(){
				$(this).find('compressor').each(function(){
					$(this).find("model").each(function(){
						 compressor = $(this).text();
					});
					$(this).find("pressure").each(function(){
						$(this).find("psi").each(function(){
							psi = $(this).text();
							
							if(psi == pressure_needed){
								psi_flag = 1;
								
							}
							else{
								
								psi_flag = 0;
								
							}
						});
						$(this).find("flow").each(function(){
							cfm = $(this).text();
							

							
							if(psi_flag == 1 && cfm > flow_needed){

								
								if(compressor.substr(0,compressor.search("-")) != last_comp){
									
									idx = 0;
									
								}
								idx = idx + 1;
								if(idx == 1){
								
									
									
								
									compressors.push(compressor);
									
								}
								
								last_comp = compressor.substr(0,compressor.search("-"));
								
							}
							
						});
					});
				});
			});
			localStorage.setItem("compressors", JSON.stringify(compressors));
			$(location).attr("href","results.html");
		}
	});
	
	
	// console.log(compressors);
	
	// console.log(cfm);
	// console.log(last_cfm);
	// console.log(psi);
	// $(location).attr("href","results.html");
	
});




	
	
