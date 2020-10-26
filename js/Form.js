class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
        this.resetButton = createButton('Reset');
    }

    display() {
        let c = color('grey');
        var title = createElement('h1')
        title.html("Sumo Game");
        title.position(displayWidth/2-35, 0);
        this.input.position(displayWidth/2-120, displayHeight/2-80);
        this.button.position(displayWidth/2+10, displayHeight/2);
        this.button.style('background-color', c);
        this.button.style('border', 'none');
        this.button.style('font-size', '24px');
        this.button.style('padding', '16px');
        this.button.style('border-radius', '5px');
        this.resetButton.position(displayWidth-100, 20);
        this.input.style('width', '20%');
        this.input.style('border', 'none');
        this.input.style('background-color', 'grey');
        this.input.style('height', '50px');
        this.input.style('text-align', 'CENTER');
        this.input.style('font-size', '20px');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
      
            player.name = this.input.value();
            var name = player.name;
            
            room.playerCount++;
            player.index++;
            player.updateName(name);
            room.updatePlayerCount(room.playerCount);
            console.log(room.playerCount);
            console.log(player.index);
            this.greeting.html("Hello " + name );
            this.greeting.position(displayWidth/2-40, displayHeight/2-80);
        });
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}