
var lightboxHTML = "";
var selectedDemo = "0";

function lightboxContainer() {

  $(".demo").click(function(){
    selectedGame = this.id;
    lightboxContent();
    $("#lightbox").fadeIn(300);
    $("body").addClass("noscroll");
  })

  $("#lightbox #back").click(function(){
    $("#lightbox").fadeOut(300);
    $("body").removeClass("noscroll");    
  })  

  $("#lightbox #close").click(function(){
    $("#lightbox").fadeOut(300);
    $("body").removeClass("noscroll");    
  })  
}

function lightboxContent() {
  console.log(selectedDemo);
  
  var n = selectedDemo;

  //begin screen container div
  lightboxHTML += "<div class=\"screen\">";
  lightboxHTML += "<img ";
  lightboxHTML += "title=\""
  lightboxHTML += sheetContent[n].title_long;
  lightboxHTML += "\" "
  lightboxHTML += "alt=\""
  lightboxHTML += sheetContent[n].title_long;
  lightboxHTML += "\" "
  lightboxHTML += "src=\"/screens/";
  lightboxHTML += sheetContent[n].code_name;
  lightboxHTML += ".jpg\">"
  lightboxHTML += "</div>"

  //begin description container
  lightboxHTML += "<div class=\"description\">"

  //begin text container 
  lightboxHTML += "<div id=\"text\">"

  //description container part 1
  lightboxHTML += "<h3>Title</h3>";
  lightboxHTML += "<p>" + sheetContent[n].title_long; + "</p>";

  //only include aka is there is content there
  if (sheetContent[n].aka.length > 0) {
    lightboxHTML += "<h3>Also known as</h3>";
    lightboxHTML += "<p>" + sheetContent[n].aka; + "</p>";
  }

  //description container part 2
  lightboxHTML += "<h3>Platform</h3>";
  lightboxHTML += "<p>" + sheetContent[n].platform_long; + "</p>";

  //description container part 3
  lightboxHTML += "<h3>Developer</h3>";
  lightboxHTML += "<p>" + sheetContent[n].developer; + "</p>";
  lightboxHTML += "<h3>Publisher</h3>";
  lightboxHTML += "<p>" + sheetContent[n].publisher; + "</p>";
  lightboxHTML += "<h3>First released</h3>";
  lightboxHTML += "<p>" + sheetContent[n].country; + "</p>";
  lightboxHTML += "<h3>Year</h3>";
  lightboxHTML += "<p>" + sheetContent[n].year; + "</p>";

  //only include link if one is there
  if (sheetContent[n].url.length > 0) {
    lightboxHTML += "<h3>Link</h3>";
    lightboxHTML += "<a href=\"";
    lightboxHTML += sheetContent[n].url;
    lightboxHTML += "\" target=\"_blank\"><p>";
    lightboxHTML += sheetContent[n].link;
    lightboxHTML += "</p></a>"
  }

  //end text container
  lightboxHTML += "</div>"

  //box art
  if (sheetContent[n].box == 1) {
    lightboxHTML += "<div id=\"box\">";
    lightboxHTML += "<img ";
    lightboxHTML += "title=\""
    lightboxHTML += sheetContent[n].title_long;
    lightboxHTML += "\" "
    lightboxHTML += "alt=\""
    lightboxHTML += sheetContent[n].title_long;
    lightboxHTML += "\" "
    lightboxHTML += "src=\"/boxes/";
    lightboxHTML += sheetContent[n].code_name;
    lightboxHTML += ".jpg\">"
    lightboxHTML += "</div>"
  }

  //end description container
  lightboxHTML += "</div>"

  //populate lightboxHTML
  document.getElementById("demo").innerHTML = lightboxHTML;

  //reset lightboxHTML
  lightboxHTML = "";
}