var newPlayerName;
var playerList = [];
var colorList = ["#1abc9c","#f1c40f","#2ecc71","#e67e22","#3498db","#e74c3c","#9b59b6","#f39c12","#c0392b","#2980b9"];
var ids = [0,1,2,3,4,5,6,7,8,9];
var displayColor = [];
var error = false;
var counter = 0;

$(document).ready(function() {

    $("#addPlayerForm").submit(function(e) {
        addNewPlayer();
        $(':focus').blur();
        e.preventDefault();
    });

});
function debugList() {
  playerList[0] = {name:"Fredrik", clr:colorList[0]}
  playerList[1] = {name:"Axel", clr:colorList[1]}
  playerList[2] = {name:"Robin", clr:colorList[2]}
  playerList[3] = {name:"Philip", clr:colorList[3]}
  playerList[4] = {name:"Asta", clr:colorList[4]}
  playerList[5] = {name:"Svahn", clr:colorList[5]}
}
function addNewPlayer(){
    newPlayerName = $("#playerName").val();

  if(newPlayerName.length < 2){
    displayError("Spelaren måste ha ett namn");
    return;
  }
  if(ids.length==0){
    displayError("Max 10 spelare");
    return;
  }

  counter = ids.shift();





    var color;
    if(displayColor.length!=0) {
      color = displayColor.shift();
      colorList.unshift(color);
    }
    else {
      color = colorList.splice(0,1)[0];
    }
    playerList.push({name:newPlayerName.toUpperCase(), clr:color});
    $("#playerName").val("");
    $("#playerListCont").append("<div class=\"player animated fadeInUp\" id=\"player" + counter + "\"></div>");
    $("#player"+counter).css("background-color",color);
    $("#player"+counter).html(newPlayerName.toUpperCase() + "<div class=\"removeThis\"><span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span></div>");
    $("#player"+counter).children("div").click(function() {
      colorList.unshift($(this).parent().css("background-color"));
      playerList.splice(parseInt($(this).parent().attr("id")[6]),1);
      counter-=1;
      console.log($(this).parent());
      ids.unshift(parseInt($(this).parent().attr("id")[6]));
      var divParent = $(this).parent();
      $(this).remove();
      divParent.css("height", "0px");
      divParent.delay(200).fadeOut(0, function(){
         divParent.remove();
      });




    })

};
var alreadyRunning = false;
function displayError(errorMessage){
  if(alreadyRunning == false){
    alreadyRunning = true;
    $("#errorCont").css("display","block");
    $("#errorCont").css("opacity","1");
    $("#errorCont").addClass("bounceIn");
    $("#errorCont").html(errorMessage);
    setTimeout(function(){
      $("#errorCont").removeClass("bounceIn");
      $("#errorCont").addClass("bounceOut");
      setTimeout(function(){
        $("#errorCont").removeClass("bounceOut");
        $("#errorCont").css("display","none");
        $("#errorCont").css("opacity","0");
        $("#errorCont").html("");
        alreadyRunning = false;
      },700)
    },3000);
  }

};

$("#playerName").on('click', function(){
  $("#playerName").focus();
});

$("#startBtn").on('click', function() {
  playerRoll(playerList);
})
$("#rollAgain").on('click', function() {
  restart();
})
