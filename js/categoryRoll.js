var categories_1player = [
{name:"Ge bort", clr:"#1abc9c"},
{name:"Drick", clr:"#e74c3c"},
{name:"cateory3", clr:"#f1c40f"},
{name:"cateory4", clr:"#2ecc71"},
{name:"cateory5", clr:"#3498db"}
]
var categories_2player = [

]

var categories_3player = [

]

var chosenCategory = [];

function rollCategory() {
  var chosenChallenge = "";
  $("#playerRollCont").css("display", "none");
  $(".roll4").addClass("animated slideInUp");
  $(".roll4").css("display", "block");
  $(".roll4").css("background-color", "lightgray");
  $(".roll4").html("Kategori");
  setTimeout(function() {
    doRoll(categories_1player, 4, function(){}, chosenCategory);
  }, 1500);


}
