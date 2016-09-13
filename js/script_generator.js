
function generate_script(){
	var inputs = {
		segment : $('#segment-select').val(),
		audiences: $(".audience-select:checked").map(function() {
			return this.value;
		}).get(),
		notification_interest: $('input[name=notification-interest]:checked').val(),
		objectives_selected: $(".customer-objectives:checked").map(function() {
			return this.value;
		}).get()
	};
	console.log(inputs);
	console.log(get_modules(inputs));
	generate_demo(get_modules(inputs));
}

function get_modules(input){
	var modules = [];
	var segment = input.segment;
	if(input.audiences.length == 0 || input.audiences.length > 1){
		var audiences = 'product/marketing';
	} else {
		var audiences = input.audiences[0];
	} 
	if(input.notification_interest == 'yes'){
		var notification_interest = 'notif_yes';
	} else{
		var notification_interest = 'notif_no';
	}
	for(var i = 0; i < input.objectives_selected.length; i++){
		if(input.objectives_selected[i] in input_combos_to_reports[segment][audiences][notification_interest]){
			modules = modules.concat(input_combos_to_reports[segment][audiences][notification_interest][input.objectives_selected[i]]);
		}
	}
	return Array.from(new Set(modules));
}

function generate_demo(modules){
	// Initialize stuff
	var body = "<h1>Intro</h1><br />"+script_intro+"<br /><br /><ul>";
	var report_set = new Set();

	// Create intro text
	for(var i = 0; i < modules.length; i++){
		if(modules[i].includes("segmentation")){
			report_set.add("- Segmentation")
		}else if(modules[i].includes("funnels")){
			report_set.add("- Funnels")
		}else if(modules[i].includes("retention")){
			report_set.add("- Retention")
		} else if(modules[i].includes("notification")){
			report_set.add("- Notifications")
		}  
	}
	report_set = Array.from(report_set);
	for(var i = 0; i < report_set.length; i++){
		body +="<li>"+report_set[i]+"</li>";
	}
	body+="</ul><br /><br />";

	// Create script body
	for(var i = 0; i < modules.length; i++){
		if(modules[i] in script_modules){
			body += "<h1>"+modules[i]+"</h1><br />";
			body += "<b><a target='_blank' href='"+script_modules[modules[i]].link+"'>Report Link</a></b><br /><br />";
			body += script_modules[modules[i]].script+"<br /><br /><br />";
		}
	}
	console.log(body);
	document.getElementById("script-text-box").innerHTML = body;
	document.getElementById('script-text-box').setAttribute("style","height:100%");
}