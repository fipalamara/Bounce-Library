var resetHTML, BounceProgramsHeaderHTML, PingsHeaderHTML, PongsHTML, SquashandStretchHTML, theKitchenSinkHTML;
var barHeight = 5;

//Draw menus

function drawMenu() {

	drawReset();
	drawBouncePrograms();
	drawPings();
	drawPongs();
	drawSquashandStretch();
	drawtheKitchenSink();

}


//Display reset
function drawReset() {

  //clear platformsHTML
  resetHTML = "";

  //count
  resetHTML += "[";
  resetHTML += gamesArray.length;
  resetHTML += "]";

  //write content to #content div
  document.getElementById("count-all").innerHTML = resetHTML;

}

//Display Bounce Programs
function drawBouncePrograms() {

  //clear BounceProgramsHTML
  BounceProgramsHTML = "";

  for (var i=0; i<platformsArrayShort.length; i++) {

  	//begin div
  	BounceProgramsHTML += "<div class=\"control\" id=\"";
  	BounceProgramsHTML += BounceProgramsArrayShort[i][1];
  	BounceProgramsHTML += "\">";

  	//text content
  	BounceProgramsHTML += BounceProgramsArrayShort[i][0];

  	//count
  	BounceProgramsHTML += "<span class=\"count\">";
  	BounceProgramsHTML += "[";
  	BounceProgramsHTML += BounceProgramsArrayShort[i][2];
  	BounceProgramsHTML += "]";
  	BounceProgramsHTML += "</span>";

  	//end div
  	BounceProgramsHTML += "</div>";

  }

  //write content to #content div
  document.getElementById("Bounce Programs").innerHTML = BounceProgramsHTML;

}

//Display Pings
function drawPings() {

  //clear PingsHTML
  PingsHTML = "";

  for (var i=0; i<PingsArrayShort.length; i++) {

  	//begin div
  	PingsHTML += "<div class=\"control\" id=\"";
  	PingsHTML += PingsArrayShort[i][0];
  	PingsHTML += "\"";
  	PingsHTML += " title=\"";
  	PingsHTML += PingsArrayShort[i][1] + " game";
  	if (PingsArrayShort[i][1] > 1) { PingsHTML += "s"; } //add plural if more than one
  	PingsHTML += "\" >";

  	//bar graph div
  	PingsHTML += "<div class=\"bar\" style=\"height:";
  	PingsHTML += PingsArrayShort[i][1] * barHeight + "px;\"";
  	PingsHTML += ">"
  	PingsHTML += "</div>"

  	//text content
  	PingsHTML += PingsArrayShort[i][0];

/*
  	//count
  	yearsHTML += "<span class=\"count\">";
  	yearsHTML += "[";
  	yearsHTML += yearsArrayShort[i][1];
  	yearsHTML += "]";
  	yearsHTML += "</span>";
*/

  	//end div
  	PingsHTML += "</div>";

  }

  //write content to #content div
  document.getElementById("Pings").innerHTML = yearsHTML;

}

//Display Pongs
function drawPongs() {

  //clear PingsHTML
  PongsHTML = "";

  for (var i=0; i<PongsArrayShort.length; i++) {

  	//begin div
  	PongsHTML += "<div class=\"control\" id=\"";
  	PongsHTML += PongsArrayShort[i][0];
  	PongsHTML += "\"";
  	PongsHTML += " title=\"";
  	PongsHTML += PongsArrayShort[i][1] + " game";
  	if (PongsArrayShort[i][1] > 1) { PongsHTML += "s"; } //add plural if more than one
  	PongsHTML += "\" >";

  	//bar graph div
  	PongsHTML += "<div class=\"bar\" style=\"height:";
  	PongsHTML += PongsArrayShort[i][1] * barHeight + "px;\"";
  	PongsHTML += ">"
  	PongsHTML += "</div>"

  	//text content
  	PongsHTML += PongsArrayShort[i][0];

  	//end div
  	PongsHTML += "</div>";

  }

  //write content to #content div
  document.getElementById("Pongs").innerHTML = yearsHTML;

}

//Display Squash and Stretch
function drawSquashandStretch() {

  //clear Squash and Stretch HTML
  SquashandStretchHTML = "";

  for (var i=0; i<SquashandStretchArrayShort.length; i++) {

  	//begin div
  	SquashandStretchHTML += "<div class=\"control\" id=\"";
  	SquashandStretchHTML += SquashandStretchArrayShort[i][1];
  	SquashandStretchHTML += "\">";

  	//text content
  	SquashandStretchHTML += SquashandStretchArrayShort[i][0];

  	//count
  	SquashandStretchHTML += "<span class=\"count\">";
  	SquashandStretchHTML += "[";
  	SquashandStretchHTML += SquashandStretchArrayShort[i][2];
  	SquashandStretchHTML += "]";
  	SquashandStretchHTML += "</span>";

  	//end div
  	SquashandStretchHTML += "</div>";

  }

  //write content to #content div
  document.getElementById("Squash and Stretch").innerHTML = SquashandStretchHTML;

}

//Display Kitchen Sink
function drawtheKitchenSink() {

  //clear Kitchen and Sink HTML
  theKitchenSinkHTML = "";

  for (var i=0; i<theKitchenSinkArrayShort.length; i++) {

  	//begin div
  	theKitchenSinkHTML += "<div class=\"control\" id=\"";
  	theKitchenSinkHTML += theKitchenSinkArrayShort[i][1];
  	theKitchenSinkHTML += "\">";

  	//text content
  	theKitchenSinkHTML += theKitchenSinkArrayShort[i][0];

  	//count
  	theKitchenSinkHTML += "<span class=\"count\">";
  	theKitchenSinkHTML += "[";
  	theKitchenSinkHTML += theKitchenSinkArrayShort[i][2];
  	theKitchenSinkHTML += "]";
  	theKitchenSinkHTML += "</span>";

  	//end div
  	theKitchenSinkHTML += "</div>";

  }

  //write content to #content div
  document.getElementById("... the Kitchen Sink").innerHTML = theKitchenSinkHTML;

}






