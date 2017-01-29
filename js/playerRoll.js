var prevRoll = 0;


var tick = new Howl({src:['tick.mp3']});
var plop = new Howl({src:['plop.wav']});

var roll = 0;
function playerRoll(array, div) {
  if(array.length<2 ) {
    displayError("Minst 2 spelare!");
    return;
  }
  $("#addPlayersCont").css("display", "none");
  $("#playerRollCont").css("display", "block");
  $(".roll1").css("display","block");
  $(".roll2").css("display","block");
  $(".roll3").css("display","block");
  rollnr = Math.floor(Math.random()*15+30);
  var prev = 0;
  for(var i = 0; i < rollnr;i++) {
    var currentTiming = Math.floor((300+rollnr)*Math.pow(Math.E,(i/(0.32*rollnr))))-300;
    setTimeout(function() {
      if(roll == rollnr-1) {
        setTimeout(function() {
          plop.play();
        }, 200);
        setTimeout(function() {
          plop.play();
        }, 300);
      }
      else {
      var ind = getIndex(array.length,prevRoll);
      rollDisplay(ind,div);
      prevRoll = ind;
      }

      roll+=1;
    }, currentTiming);
  }
}


function doStuff(array,div,index) {
  console.log(index);
}

function getIndex(length,prev) {

  var index = Math.floor((prev+Math.random()*(length-2)+1))%length;
  return index;
}

function rollDisplay(id,roller) {
  className = ".roll"+roller;
  tick.play();
  $(className).html(playerList[id].name);
  $(className).css("background-color", playerList[id].clr);
}
