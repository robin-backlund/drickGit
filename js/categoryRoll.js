var categories_1player = [
  {name:"Ge bort", clr:"#1abc9c", list:[]},
  {name:"Drick", clr:"#e74c3c",list:[]},
  {name:"Utmaning", clr:"#f1c40f",list:[]},
  {name:"Historia", clr:"#2ecc71",list:[]}
]
var categories_2player = [
  {name:"Ge bort", clr:"#1abc9c",list:[]},
  {name:"Drick", clr:"#e74c3c",list:[]},
  {name:"Utmaning", clr:"#f1c40f",list:[]},
  {name:"Historia", clr:"#2ecc71",list:[]}
]

var categories_3player = [
  {name:"Ge bort", clr:"#1abc9c",list:[]},
  {name:"Drick", clr:"#e74c3c",list:[]},
  {name:"Utmaning", clr:"#f1c40f",list:[]},
  {name:"Historia", clr:"#2ecc71",list:[]}
]


var chosenCategory

function rollCategory() {
  var chosenChallenge = "";
  chosenCategory = [];
  var categoriesList;
  $(".roll4").css("display", "block");
  $(".roll4").animate({height: '100vh'});
  $("#playerRollCont").animate({height: '0vh'});
  setTimeout(function() {
  	$("#playerRollCont").css("display","none");
  }, 400); //Basic jQuery animation duration. Denna väntar ut height animationerna och sedan tar bort diven.

  switch(chosenPlayers.length) {
    case 1:
      categoriesList = categories_1player;
      break;
    case 2:
      categoriesList = categories_2player;
      break;
    default:
      categoriesList = categories_3player;
  }
  setTimeout(function() {
    doRoll(categoriesList, 4, function(){
      displayFinal();
    }, chosenCategory);
  }, 800);


}

function displayFinal() {
  $("#finalDisplay").css("display", "block");

  $("#finalDisplay").addClass("animated slideInLeft");
  setTimeout(function() {
    $("#categoryRoll").css("display", "none");
  }, 200);

  $("#finalCategory").html(chosenCategory[0].name);
  var string = ""
  for(var i = 0; i < chosenPlayers.length; i++) {
    string+=chosenPlayers[i].name+" ";
  }

  var challengeString = chosenCategory[0].list[Math.floor(Math.random()*chosenCategory[0].list.length)]

  $("#finalNames").html(string);
  $("#finalChallenge").html(challengeString);

}

function restart() {
  $("#finalDisplay").css("display", "none");

  playerRoll(playerList, 1);
}
