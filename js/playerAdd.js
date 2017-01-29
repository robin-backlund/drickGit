var currentColorIndex = 1;
var value = "";
$("#playerNameSubmit").removeAttr("disabled");
document.getElementById('playerNameInput').addEventListener('touchstart', function() {
  $("#playerNameInput").focus();
  setTimeout(function(){
    $("#header").css("background-color", "white");
    $("#titleError").html("Lägg till spelare");
  }, 300)
  value = document.getElementById("playerNameInput").value;
  document.getElementById("playerNameInput").value = "";
  e.preventDefault();
  importantFunction();
  $("#playerNameSubmit").attr("disabled", "true");
  setTimeout(function() {
    $("#playerNameSubmit").removeAttr("disabled");
  }, 2000);
})
//document.getElementById('playerNameSubmit').addEventListener('touchstart', function() {
document.getElementById('form').addEventListener('submit', function(e) {
  $(".element").append('<div class=\"playerListed\" style=\"background-color:' + colorList[currentColorIndex] + '\">' + '</div>');
  value = document.getElementById("playerNameInput").value;;
  document.getElementById("playerNameInput").value = "";
  e.preventDefault();
  importantFunction();
  $("#playerNameSubmit").attr("disabled", "true");
  setTimeout(function() {
    $("#playerNameSubmit").removeAttr("disabled");
  }, 2000);
})

function importantFunction() {
  $("#playerNameInput").focus();
  setTimeout(function() {
    $("#animatorIcon").removeClass("glyphicon-remove-sign");
    $("#animatorIcon").addClass("glyphicon-plus-sign");
  }, 2000)

    if(currentColorIndex > 9){
      $("#inputContainer").animate({
            backgroundColor: "#c3c3c3"
      }, 200 );
      $("#animatorIcon").removeClass("glyphicon-plus-sign");
      $("#animatorIcon").addClass("glyphicon-remove-sign");

      ;
      $("#playerNameInput").addClass("grayColor");
      $("#playerNameInput").attr("placeholder", "Max antal spelare");
      $("#playerNameInput").prop('disabled', true);
        return;
    }

    var pattern = /[\W[^p]]/i;
    if(pattern.test(value)) {
      error("Använd endast bokstäver!");
      return;
    }

    if(value == "" || value.length < 3){
      $("#animator").css("display", "block");
      $("#animatorIcon").css("display", "none");
      $("#animatorIcon").removeClass("glyphicon-plus-sign");
      $("#animatorIcon").addClass("glyphicon-remove-sign");
      if(value == ""){
        error("Spelarens namn får inte vara tomt");
      }else{
        error("Spelarens namn är för kort");
      }
      $('#animator').animate({
         borderRadius: "100px",
         height: "600px",
         width: "600px"
      }, 250);

      $('#animator').animate({
         borderRadius: "30px",
         height: "30px",
         width: "30px"
      }, 250);

        setTimeout(function(){
          $('#header').animate({
             backgroundColor: "white"
          }, 250);
          setTimeout(function(){
            $("#titleError").css("color", "gray");
            $("#titleError").html("Lägg till spelare");
          }, 250 );
        }, 2000 );

    setTimeout(function(){
      $("#animatorIcon").css("display", "block");
      $("#animator").css("display", "none");
    }, 500);
      return;
    }

    $("#animator").css("display", "block");
    $("#animatorIcon").css("display", "none");
    $('#animator').animate({
       borderRadius: "100px",
       height: "600px",
       width: "600px"
    }, 250);
    playerAdd(value, currentColorIndex-1);
    $('#animator').animate({
       borderRadius: "30px",
       height: "30px",
       width: "30px"
    }, 250);

  setTimeout(function(){
    $("#animatorIcon").css("margin-top", "16px");
    $("#animatorIcon").css("display", "block");
    $("#animator").css("display", "none");
  }, 500);
    $("#inputContainer").animate({
          backgroundColor: colorList[currentColorIndex],
    }, 300 );
    currentColorIndex = currentColorIndex + 1;
}

function playerAdd(player, index) {
  $("#titleError").css("color", "white");
  $("#header").css("opacity", "0.8");
  $('#header').animate({
     backgroundColor: colorList[index]
  }, 250);
  playerList.push(player);
  $("#titleError").html(player + " är tillagd");

  setTimeout(function(){
    $('#header').animate({
       backgroundColor: "white"
    }, 250);
    setTimeout(function(){
      $("#titleError").css("color", "gray");
      $("#titleError").html("Lägg till spelare");
  }, 250 );
  }, 2000 );
}
function error(error){
  $('#header').animate({
     backgroundColor: "rgb(238, 75, 62)"
  }, 250);
  $("#titleError").css("color", "white");
  $("#titleError").css("opacity", "0.9");
  $("#titleError").html(error);
  setTimeout(function(){
    $('#header').animate({
       backgroundColor: "white"
    }, 250);
    setTimeout(function(){
      $("#titleError").css("color", "gray");
      $("#titleError").html("Lägg till spelare");
  }, 250 );
  }, 2000 );
};
