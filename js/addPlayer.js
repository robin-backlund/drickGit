var newPlayerName;
var playerList = [];
var colorList = ["#1abc9c","#f1c40f","#2ecc71","#e67e22","#3498db","#e74c3c","#9b59b6","#f39c12","#c0392b","#2980b9"];
var error = false;
var counter = 1;


function addNewPlayer(){
  error = false;
  counter = playerList.length;

  newPlayerName = $("#playerName").val();

  if(newPlayerName.length < 2){
    alert("ERROR: Spelaren måste ha ett namn");
    error = true;
  }
  if(counter == 10){
    alert("ERROR: Maximalt antal spelare");
    error = true;
  }
  
  if(error == false){
    playerList.push(newPlayerName.toUpperCase());
    console.log(playerList);
    
    $("#playerName").val("");
    console.log(counter);
    $("#playerListCont").append("<div class=\"player animated fadeInUp\" id=\"player" + counter + "\"></div>");

    $("#player"+counter).html(newPlayerName.toUpperCase() + "<div class=\"removeThis\">X</div>");
    

  }

};



$(document).ready(function() {
    $("#addPlayerForm").submit(function(e) {
        addNewPlayer();
        e.preventDefault();
    });
});

function removePlayer(){
  $(".removeThis").each(function(){
    $(this).click(function(){
      $(this).parent().remove();
    })
    
  });
};