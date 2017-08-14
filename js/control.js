//control filters
function addControls() {

	//remove selected class from all filters when any is clicked
	$("#controls .control").click(function(){
		clearContent();
		$(".control").removeClass("selected");
	})

	//filter by BouncePrograms controls
	$("#controls #BouncePrograms .control").click(function(){
		filterByBouncePrograms(this.id);
		drawContent();
		$(this).addClass("selected");
	})

	//filter by Pings controls
	$("#controls #Pings .control").click(function(){
		filterByPings(this.id);
		drawContent();
		$(this).addClass("selected");
	})	

	//filter by Pongs controls
	$("#controls #Pongs .control").click(function(){
		filterByPongs(this.id);
		drawContent();
		$(this).addClass("selected");
	})

	//filter by Squash and Stretch controls
	$("#controls #SquashandStretch .control").click(function(){
		filterBySquashandStretch(this.id);
		drawContent();
		$(this).addClass("selected");
	})

	//filter by Kitchen Sink controls
	$("#controls #theKitchenSink .control").click(function(){
		filterBytheKitchenSink(this.id);
		drawContent();
		$(this).addClass("selected");
	})

	//filter reset (display all) controls
	$("#controls #reset-toggle").click(function(){
		resetFilter();
		drawContent();
		$(this).addClass("selected");
	})

	//toggle open/close controls (general)
	$("#controls .toggle").click(function(){

		if ($(this).hasClass("closed")) {
			$(this).removeClass("closed").addClass("opened");
		}

		else if ($(this).hasClass("opened")) {
			$(this).removeClass("opened").addClass("closed");
		}

	})

	//toggle Bounce Programs controls
	$("#controls .toggle#BouncePrograms-toggle").click(function(){
		
		$("#BouncePrograms").slideToggle(400);

		if ($("#Pings-toggle").hasClass("opened")) {
			$("#Pings").slideUp(400);
			$("#Pings-toggle").removeClass("opened").addClass("closed");
		}

		if ($("#Pongs-toggle").hasClass("opened")) {
			$("#Pongs").slideUp(400);
			$("#Pongs-toggle").removeClass("opened").addClass("closed");
		}

		if ($("#SquashandStretch-toggle").hasClass("opened")) {
			$("#SquashandStretch").slideUp(400);
			$("#SquashandStretch-toggle").removeClass("opened").addClass("closed");
		}

		if ($("#theKitchenSink-toggle").hasClass("opened")) {
			$("#theKitchenSink").slideUp(400);
			$("#theKitchenSink-toggle").removeClass("opened").addClass("closed");
		}
	})

	//toggle Pings controls
	$("#controls .toggle#Pings-toggle").click(function(){
		
		$("#Pings").slideToggle(400);

		if ($("#BouncePrograms-toggle").hasClass("opened")) {
			$("#BouncePrograms").slideUp(400);
			$("#BouncePrograms-toggle").removeClass("opened").addClass("closed");
		}
	})

	//toggle Pongs controls
	$("#controls .toggle#Pongs-toggle").click(function(){
		
		$("#Pongs").slideToggle(400);

		if ($("#BouncePrograms-toggle").hasClass("opened")) {
			$("#BouncePrograms").slideUp(400);
			$("#BouncePrograms-toggle").removeClass("opened").addClass("closed");
		}
	})

	//toggle Squash and Stretch controls
	$("#controls .toggle#SquashandStretch-toggle").click(function(){
		
		$("#SquashandStretch").slideToggle(400);

		if ($("#BouncePrograms-toggle").hasClass("opened")) {
			$("#BouncePrograms").slideUp(400);
			$("#BouncePrograms-toggle").removeClass("opened").addClass("closed");
		}
	})

	//toggle Kitchen Sink controls
	$("#controls .toggle#theKitchenSink-toggle").click(function(){
		
		$("#theKitchenSink").slideToggle(400);

		if ($("#BouncePrograms-toggle").hasClass("opened")) {
			$("#BouncePrograms").slideUp(400);
			$("#BouncePrograms-toggle").removeClass("opened").addClass("closed");
		}
	})
}

//reset filter (display all)
function resetFilter() {
	//show all
	for (var i=0; i<gamesArray.length; i++) {
		gamesArray[i][1] = 1;
	}
}

function filterByBouncePrograms(BouncePrograms_name) {

	for (var i=0; i<gamesArray.length; i++) {
		//grab row id of game
		var row = gamesArray[i][0];

		//if game matches selected platform give it a "1" flag, otherwise hide
		if (sheetContent[row].platform_short == BouncePrograms_name) {
			gamesArray[i][1] = 1;
		}
		else {
			gamesArray[i][1] = 0;
		}
	}
}

function filterByPings(Pings) {
	for (var i=0; i<gamesArray.length; i++) {

		//grab row id of game
		var row = gamesArray[i][0];

		//if game matches selected year give it a "1" flag, otherwise hide
		if (sheetContent[row].Pings == Pings) {
			gamesArray[i][1] = 1;
		}
		else {
			gamesArray[i][1] = 0;
		}
	}	
}

function filterByPongs(Pongs) {
	for (var i=0; i<gamesArray.length; i++) {

		//grab row id of game
		var row = gamesArray[i][0];

		//if game matches selected year give it a "1" flag, otherwise hide
		if (sheetContent[row].Pongs == Pongs) {
			gamesArray[i][1] = 1;
		}
		else {
			gamesArray[i][1] = 0;
		}
	}	
}

function filterBySquashandStretch(SquashandStretch) {
	for (var i=0; i<gamesArray.length; i++) {

		//grab row id of game
		var row = gamesArray[i][0];

		//if game matches selected year give it a "1" flag, otherwise hide
		if (sheetContent[row].SquashandStretch == SquashandStretch) {
			gamesArray[i][1] = 1;
		}
		else {
			gamesArray[i][1] = 0;
		}
	}	
}

function filterBytheKitchenSinke(theKitchenSink) {
	for (var i=0; i<gamesArray.length; i++) {

		//grab row id of game
		var row = gamesArray[i][0];

		//if game matches selected year give it a "1" flag, otherwise hide
		if (sheetContent[row].theKitchenSink == theKitchenSink) {
			gamesArray[i][1] = 1;
		}
		else {
			gamesArray[i][1] = 0;
		}
	}	
}
