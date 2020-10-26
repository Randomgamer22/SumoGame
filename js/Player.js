class Player {
    constructor() {
        this.index = null;
        this.taps = 0;
        this.name = null;
    }

    updateName(name){
        var playerIndex ="room1/" + "players/player" + this.index;
        this.name = name;
        database.ref(playerIndex).set({
          name:this.name,
          taps:this.taps
        });
    }

    addTaps() {
        this.taps++;
        database.ref("players/player" + this.index).update({
            taps:this.taps
        });
    }
}