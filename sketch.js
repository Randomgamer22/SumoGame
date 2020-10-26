var database;
var form, room, player;
var player1Image, player2Image;

function preload() {
    player1Image = loadImage("images/player1.png");
    player2Image = loadImage("images/player2.png");
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    

    database = firebase.database();

    room = new Room();
    room.readGameState();
    room.readRoomStatus();
    room.start();
}

function draw() {
    background(255);

    if(room.playerCount >= 2){
        room.play;
    }

}