var categories_1player = [
{name:"Ge bort", clr:"#1abc9c"},
{name:"Drick", clr:"#e74c3c"},
{name:"Utmaning", clr:"#f1c40f"},
{name:"Historia", clr:"#2ecc71"}
]
var categories_2player = [

]

var categories_3player = [

]

var chosenCategory = [];

function rollCategory() {
  var chosenChallenge = "";
  $(".roll4").css("display", "block");
  $(".roll4").animate({height: '100vh'});
  $("#playerRollCont").animate({height: '0vh'});
  setTimeout(function() {
  	$("#playerRollCont").css("display","none");
  }, 400); //Basic jQuery animation duration. Denna väntar ut height animationerna och sedan tar bort diven.

  
  setTimeout(function() {
    doRoll(categories_1player, 4, function(){}, chosenCategory);
  }, 800);


}
