
var flow_needed = 0;

$(window).on('load',function(){
	document.getElementById("lbl_type_oil_injected").innerHTML = localStorage.lbl_comp;
	
	

	var comp_type = localStorage.lbl_comp;
	var comp_type_var = "";
	console.log(comp_type);
	option1 = $("<option id='1'></option>").text(100);
	option2 = $("<option id='2'></option>").text(125);
	option3 = $("<option id='3'></option>").text(150);
	option4 = $("<option id='4'></option>").text(175);
	option5 = $("<option id='5'></option>").text(210);
	if(comp_type == "Fixed Speed"){
		
		comp_type_var = "fs";
		$("select").append(option1);
		$("select").append(option2);
		$("select").append(option3);
		$("select").append(option4);
	}
	else if(comp_type == "Variable Speed"){
		
		comp_type_var = "vs";
		$("select").append(option1);
		$("select").append(option2);
		$("select").append(option3);
	}
	else if(comp_type == "Modulation"){
		
		comp_type_var = "mod";
		$("select").append(option1);
		$("select").append(option2);
		$("select").append(option3);
		$("select").append(option4);
		$("select").append(option5);
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
	if(comp_type == "Fixed Speed"){
		comp_type_var = "fs";
		top_100 = 456;
		top_125 = 434;
		top_150 = 176.4;
		top_175 = 152.1;
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
	else if(comp_type == "Variable Speed"){
		comp_type_var = "vs";
		top_100 = 976;
		top_125 = 918;
		top_150 = 805;
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

			
		}
		
	}
	else if(comp_type == "Modulation"){
		comp_type_var = "mod";
		top_100 = 1521;
		top_125 = 1515;
		top_150 = 1242;
		top_175 = 1216;
		top_210 = 969;
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
			case 210:
				if(flow_needed > top_210){
					
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




	
