var playerList = [];
//var colorList = ["#f44336", "#9c27b0", "#3f51b5", "#03a9f4", "#009688", "#8bc34a", "", "#ff9800", "#795548", "#607d8b"]
var colorList = ["#1FDA9A", "#EE4B3E", "#E9BC1B", "#75A3D1", "#3B5998", "#ffeb3b", "#5588FF", "#F99600", "#64cd4c", "#a45ce0"];

var container = document.getElementById("container");
var rollNr = [21,22,23,24];

var sound = new Howl({urls:['tick.mp3']});
var winSound = new Howl({urls:['plop.wav']});
var doubleSound = new Howl({urls:['swoosh.av']});

function rollPlayer() {

  var players = playerList.slice(0);
  var colors = colorList.slice(0);
  var rollName_div = "rollName";
  var rollContainer = "roll";
  container.style.display = "none";
  document.getElementById("roll").style.display = "block";
  var rolls = rollNr[Math.floor(Math.random()*rollNr.length)];
  doRoll(0, rolls, 0, players, colors, rollName_div, rollContainer);

}

function doRoll(i, n, index, playerList, colorList, div, roller) {
  index+=Math.floor(Math.random()*(playerList.length-2))+1
  index = index%playerList.length;
  sound.play();

  //sounds[i%sounds.length].play();
  document.getElementById(div).innerHTML = playerList[index];
  document.getElementById(roller).style.backgroundColor = colorList[index];
  if(i < n) {
    setTimeout(function() {
      doRoll(i+1,n, index, playerList, colorList, div, roller);
    }, 80+0.03*Math.pow(i, 3));
  }
  else {
    rollDone(div, index, playerList, colorList);
    return index;
  }
}

function rollDone(div, prevRoll, list, colorList){
  colorList.splice(prevRoll, 1);
  list.splice(prevRoll, 1);
  $("#"+div).addClass("animated tada");
  setTimeout(function() {
    winSound.play();
    setTimeout(function() {
      winSound.play();
      if(div=="rollName") {
        setTimeout(function() {
          roll2Display();
          setTimeout(function() {
            doRoll(0, 23, 0, list, colorList, "rollName2", "roll2");
          },400);
        }, 1500);
      };
    },100);
  },200);
};

function roll2Display(){
  doubleSound.play();
  $("#roll2").css("display","block");
  $("#roll").animate({height: '50%'},{duration: "slow", easing: "easeOutBounce"});
}
