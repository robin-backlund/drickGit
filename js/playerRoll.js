var prevRoll = 0;
var tick = new Howl({src:['tick.mp3']});
var plop = new Howl({src:['plop.wav']});
var copy = [];
var roll;
function playerRoll(array, div) {
  for(var i = 0; i < array.length; i++) {
    copy[i] = array[i];
  }
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
  doRoll(array, 1, function(){
    if(Math.random()>0.66&&array.length>=3) {
      $(".roll1").animate({
        height: '50vh',
        lineHeight: '50vh'
      });
      $(".roll2").animate({
        height: '50vh',
        lineHeight: '50vh'
      });
      copy.splice(prevRoll,1)
      doRoll(copy, 2, function() {
        if(Math.random()>0.66&&array.length>=4) {
          $(".roll1").animate({
            height: '33.333vh',
            lineHeight: '33.333vh'
          });
          $(".roll2").animate({
            height: '33.333vh',
            lineHeight: '33.333vh'
          });
          $(".roll3").animate({
            height: '33.333vh',
            lineHeight: '33.333vh'
          });
          copy.splice(prevRoll,1)
          doRoll(copy, 3);
        }
      });
    }
  });
}

function doRoll(array, div, callback) {

  if(array.length<2) {
    return;
  }

  rollnr = Math.floor(Math.random()*15+30);
  prevRoll = 0;
  roll = 0;
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
        setTimeout(function() {
          if(typeof(callback)=="function") {
            callback();
          }
        }, 500);

      }
      else {
      var ind = getIndex(array.length,prevRoll);
      rollDisplay(array,ind,div);
      prevRoll = ind;
      }

      roll+=1;
    }, currentTiming);
  }
}

function getIndex(length,prev) {
  var index = Math.floor((prev+Math.random()*(length-1)+1))%length;
  return index;
}

function rollDisplay(array,id,roller) {
  className = ".roll"+roller;
  tick.play();
  $(className).html(array[id].name);
  $(className).css("background-color", array[id].clr);
}
