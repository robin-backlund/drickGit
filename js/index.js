var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
app.initialize();
var newPlayerName;
var playerList = [];
var colorList = ["#1abc9c","#f1c40f","#2ecc71","#e67e22","#3498db","#e74c3c","#9b59b6","#f39c12","#c0392b","#2980b9"];
var error = false;
var counter = 0;


function addNewPlayer(){
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
    counter = counter + 1;
    $("#player"+counter).html(newPlayerName.toUpperCase());
    $("#playerName").val("");
    $("#player"+counter).addClass("fadeInUp");
    $("#player"+counter).css("opacity","1");

  }

};
$(document).ready(function() {
    $("#addPlayerForm").submit(function() {
        addNewPlayer();
    });
});
