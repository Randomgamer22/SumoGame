class Room {
    constructor() {
        this.status = 0;
        this.playerCount = 0;
        this.gameState = 0;
        this.roomIndex = 1;
        this.player1 = null;
        this.player2 = null;
        this.players = [];
        this.allPlayers = [];
    }

    //getting gameState of the room
    readGameState() {
        var gameStateRef = database.ref('room'+this.roomIndex+'/gameState');
        gameStateRef.on('value',(data) => {
            this.gameState = data.val();
        })
    }

    //updating gameState of the room
    updateGameState(data) {
        database.ref('room'+this.roomIndex).update({
            gameState: data
        });
    }

    //getting room status
    readRoomStatus() {
        var roomStatusRef = database.ref('room'+this.roomIndex+'/status');
        roomStatusRef.on('value',(data) => {
            this.status = data.val();
        })
    }

    //updating room status
    updateRoomStatus(data) {
        database.ref('room'+this.roomIndex).update({
            status: data
        });
    }

    //getting playerInfo
    getPlayerInfo() {
        var playerInfoRef = database.ref("room"+this.roomIndex+"/players");
        playerInfoRef.on ("value", (data) => {
            this.allPlayers = data.val();
        })
    }
    
    //removing all games
    removePlayers() {
        var playersRef = database.ref("room"+this.roomIndex+"/players");
        playersRef.remove();
    }

    //gaming playerCount
    getPlayerCount() {
        var playerCountRef = database.ref("room"+this.roomIndex+"/playerCount");
        playerCountRef.on('value', (data) => {
            this.playerCount = data.val();
        })
    }

    //updating playerCount
    updatePlayerCount(data) {
        database.ref("room"+this.roomIndex).update({
            playerCount: data
        });
    }

    async start() {
        if(this.gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form()
            form.display();

            this.player1 = createSprite(560, 460);
            this.player2 = createSprite(440, 340);

            this.player1.addImage(player1Image);
            this.player2.addImage(player2Image);

            this.players = [this.player1, this.player2];
        }
    }

    play() {
        form.hide();
        room.updateRoomStatus(1);
        room.getPlayerInfo();

        if(this.allPlayers !== undefined){
            for(i in this.allPlayers) {
                if(index === player.index){
                    push();
                    ellipseMode(CENTER);
                    fill("red");
                    tint(255, 0, 0, 25);
                    ellipse(players[index-1].x, players[index-1].y, 60, 60);
                    pop();
                  }
            }
        }
        drawSprites();

    }

}