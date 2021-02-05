var form,game,player;
var gameState=0;
var playerCount;
var database


function setup(){
  createCanvas(1000,500);
  database = firebase.database();
  game=new Game();
  game.getState()
  game.start()
}

function draw(){
  background("white");
  
 
  
}




