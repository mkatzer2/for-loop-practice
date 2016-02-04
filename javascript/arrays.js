//create an array
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];

//variables IN function (function scope), can see global variables

var imageList1 = new Array();

//defining items in the imageList array
imageList1[0] = "images/drawing/thumbs/artwork_1.jpg";
imageList1[1] = "images/drawing/thumbs/artwork_2.jpg";
imageList1[2] = "images/drawing/thumbs/artwork_3.jpg";
imageList1[3] = "images/drawing/thumbs/artwork_4.jpg";
imageList1[4] = "images/drawing/thumbs/artwork_5.jpg";
imageList1[5] = "images/drawing/thumbs/artwork_6.jpg";
imageList1[6] = "images/drawing/thumbs/artwork_7.jpg";
imageList1[7] = "images/drawing/thumbs/artwork_8.jpg";
imageList1[8] = "images/drawing/thumbs/artwork_9.jpg";
imageList1[9] = "images/drawing/thumbs/artwork_10.jpg";
imageList1[10] = "images/drawing/thumbs/artwork_11.jpg";
imageList1[11] = "images/drawing/thumbs/artwork_12.jpg";
imageList1[12] = "images/drawing/thumbs/artwork_13.jpg";
imageList1[13] = "images/drawing/thumbs/artwork_14.jpg";
imageList1[14] = "images/drawing/thumbs/artwork_15.jpg";
imageList1[15] = "images/drawing/thumbs/artwork_16.jpg";
imageList1[16] = "images/drawing/thumbs/artwork_17.jpg";
imageList1[17] = "images/drawing/thumbs/artwork_18.jpg";
imageList1[18] = "images/drawing/thumbs/artwork_19.jpg";
imageList1[19] = "images/drawing/thumbs/artwork_20.jpg";
imageList1[20] = "images/drawing/thumbs/artwork_21.jpg";
imageList1[21] = "images/drawing/thumbs/artwork_22.jpg";
imageList1[22] = "images/drawing/thumbs/artwork_23.jpg";
imageList1[23] = "images/drawing/thumbs/artwork_24.jpg";
imageList1[24] = "images/drawing/thumbs/artwork_25.jpg";

var imageList2 = new Array();

imageList2[0] = "images/oil/thumbs/artwork_1.jpg";
imageList2[1] = "images/oil/thumbs/artwork_2.jpg";
imageList2[2] = "images/oil/thumbs/artwork_3.jpg";
imageList2[3] = "images/oil/thumbs/artwork_4.jpg";
imageList2[4] = "images/oil/thumbs/artwork_5.jpg";
imageList2[5] = "images/oil/thumbs/artwork_6.jpg";
imageList2[6] = "images/oil/thumbs/artwork_7.jpg";
imageList2[7] = "images/oil/thumbs/artwork_8.jpg";

var imageList3 = new Array();

imageList3[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageList3[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageList3[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageList3[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageList3[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageList3[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageList3[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageList3[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageList3[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageList3[9] = "images/watercolor/thumbs/artwork_10.jpg";

//create the buildThumbnail function
function buildThumbnails()
{
  //hook onto the thumbs div
  var drawingsDiv = document.getElementById("drawings");
  var oilDiv = document.getElementById("oil");
  var waterColorDiv = document.getElementById("waterColor");
  //create an output variable, it will be changed below so leave blank
  var drawingOutput = "";
  var oilOutput = "";
  var waterColorOutput = "";
  
  //first part: counter (we set up 0 to start counting the loop)
  //second part: condition (the loop will keep looping as long as the condition is true.)
  //third part: incrementor (adds one to the counter AFTER the code is executed in the brackets
  
  for(var i=0; i < imageList1.length; i++)
  {
    //concatenation assignment operator
    drawingOutput += '<img src="' + imageList1[i] +'" />'; 
  }
  for(var j=0; j < imageList2.length; j++)
  {
    oilOutput += '<img src="' + imageList2[j] + '" />';
  }
  for(var k=0; k < imageList3.length; k++)
  {
    waterColorOutput += '<img src="' + imageList3[k] + '" />';
  }
  
  drawingsDiv.innerHTML = drawingOutput;
  oilDiv.innerHTML = oilOutput;
  waterColorDiv.innerHTML = waterColorOutput;
  
  /*thumbsDiv.innerHTML = 
  '<img src="' + imageList[0] + '" />' + 
  '<img src="' + imageList[1] + '" />' +
  '<img src="' + imageList[2] + '" />' +
  '<img src="' + imageList[3] + '" />' +
  '<img src="' + imageList[4] + '" />' +
  '<img src="' + imageList[5] + '" />'; */
}


window.onload = function()
{
  buildThumbnails(); //use or "fire off" this function or invoke the function
};
