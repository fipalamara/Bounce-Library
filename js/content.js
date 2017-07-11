//Set spreadsheet url
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1KeSf1hfJZ-UdiwbXku1TTeRGxRyWaqGhvUoAMDHygvw/pubhtml';
var sheetContent;
var gamesArray;
var gamesHTML = "";
var gamesCount = 0;

//Call content functions
$(document).ready(function() {

  init();

});


//Get data from Google spreadsheet (bounce content is stored via url)
function init() {
  Tabletop.init( { key: public_spreadsheet_url,
    callback: showInfo,
    simpleSheet: true } 
  )
}

//Log successful data grab from spreadsheet
function showInfo(data, tabletop) {
  //print success message
  console.log("Successfully processed!")

  //populate sheetContent with data
  sheetContent = data;

  //create array of content
  createContentArray();
}

//Create array of content
function createContentArray() {

  //count games with screenshots
  for (var i=0; i<sheetContent.length; i++) {

    //only count if there is a screenshot
    if (sheetContent[i].screen == 1) {  

      //add to gamesCount
      gamesCount++;

    }
  }

  //create gamesArray of the correct size using gamesCount number
  gamesArray = new Array(gamesCount); 
  for (var i=0; i<gamesCount; i++) {
    gamesArray[i] = new Array(2);
  }

  //create a temporary counter variable to cycle through array
  var tempCounter = 0; 

  //add games with screenshots to gamesArray
  for (var i=0; i<sheetContent.length; i++) {

    //only include if there is a screenshot
    if (sheetContent[i].screen == 1) {  

      //give unique ID from spreadsheet row in column one
      gamesArray[tempCounter][0] = i;

      //give a visible flag in column 2
      gamesArray[tempCounter][1] = 1;

      //count up through array
      tempCounter++;
    }
  }

  //now draw content
  drawContent();

  //run counters from count.js
  countYears();
  countPlatforms();

  //now draw menu
  drawMenu();

  //add controls
  addControls();

}


//Display content
function drawContent() {

  //clear gamesHTML
  gamesHTML = "";

  for (var i=0; i<gamesArray.length; i++) {

    if (gamesArray[i][1] == 1) {

      //grab unique id of row
      var row = gamesArray[i][0];

      //begin container div
      gamesHTML += "<div id=\"";
      gamesHTML += row;
      gamesHTML += "\" class=\"game ";
      gamesHTML += sheetContent[row].year;
      gamesHTML += " ";
      gamesHTML += sheetContent[row].platform_short;
      gamesHTML += "\">";
      gamesHTML += "<div class=\"screen\">";
      
      //img content
      gamesHTML += "<img ";
      gamesHTML += "title=\""
      gamesHTML += sheetContent[row].title_long;
      gamesHTML += "\" "
      gamesHTML += "alt=\""
      gamesHTML += sheetContent[row].title_long;
      gamesHTML += "\" "
      gamesHTML += "src=\"/screens/";
      gamesHTML += sheetContent[row].code_name;
      gamesHTML += ".jpg\">"

      //end container div
      gamesHTML += "</div>"
      gamesHTML += "</div>"
    }

  }

  //write content to #content div
  document.getElementById("content").innerHTML = gamesHTML;

  //once content is loaded, call lightbox functions in lightbox.js
  lightboxContainer();
}


//clear content
function clearContent() {
  document.getElementById("content").innerHTML = "";
}