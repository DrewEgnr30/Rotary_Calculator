$(window).on('load',function(){
	var compressors = JSON.parse(localStorage.getItem("compressors"))
	var compressor_type = localStorage.lbl_comp;
	var container = $("#start_over");
	var html =[];
	$.each(compressors, function(index,value){
		
		console.log(index + "," + value);
		html.push('<div class="row"><div class="col-xl-12 col-xs-12 text-center"><h1 >Recommended Compressor</h1></div></div><div class="row"><div class="col-xl-12 col-xs-12 text-center"><img id="img_compressor' + index + '" ></div></div><div class="row"><div class="col-xl-12 col-xs-12 text-center"><h1 id="rec_compressor' + index + '"></h1></div></div><div class="row top-buffer justify-content-md-center"><div class="col-xl-4 col-xs-12 text-center"><a class="brochure" href = "#" id="brochure'+index+'"><i class="fas fa-book" data-toggle="tooltip" title="Brochure"></i></a></div></div>');
		

		
	});
	container.before(html.join(""));
	$.each(compressors, function(index,value){
		source = "photos/" + value + ".png";
		$("#rec_compressor" + index).text(value);
		$("#img_compressor" + index).attr("src",source);
		if(compressor_type == "Fixed Speed"){
	
			if(value.search("QGS") > -1){
				$("#brochure"+index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&DataID=96215&ft=1");
			}
			else if(value.search("QGD") > -1){
				$("#brochure"+index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&DataID=148860&ft=1");
			}
		}
		else if(compressor_type == "Variable Speed"){
			if(value.search("QGV") > -1){
				$("#brochure"+index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&DataID=1878283&ft=1");
			}
			else if(value.search("QGDV") > -1){
				$("#brochure"+index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&DataID=148860&ft=1");
			}

			
			
		}
		else if(compressor_type == "Modulation"){
			$("#brochure"+index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&DataID=1878283&ft=1");
			

			
			
		}
		else if(compressor_type == "Water-Injected Screw"){
			$(".brochure"+index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&DataID=2343536&ft=1");
			

			
			
		}
		else if(compressor_type == "Scroll"){
			$("#brochure"+index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&DataID=715048&ft=1");
			

			
			
		}
		
		
	});
	

	
	
});