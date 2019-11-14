class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }


    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */

    createPlayers() {
        const players = [];
        const player1 = new Player('Johnny Bravo', 1, '#e15258', true);
        const player2 = new Player('Bat Man', 2, '#e59a13');
        players.push(player1, player2);
        return players;
    }

    /**
     * Returns active player
     * @return {object} player - The active player.
     */
    get activePlayer() {
        return this.players.find(player => player.active);
    }


    /**
     * Gets game ready for play
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
        console.log(this.activePlayer.activeToken.htmlToken);
        console.log(this.activePlayer.activeToken.offsetLeft);
    }

    /**
     * Branches code, depending on what key player presses
     * @param {object} e - Keydown event object  
     */
    handleKeydown(e) {
        if (this.ready) {
            if (e.key === "ArrowLeft") {
                this.activePlayer.activeToken.moveLeft();
                console.log(this.activePlayer.activeToken.offsetLeft);
            } else if (e.key === "ArrowRight") {
                this.activePlayer.activeToken.moveRight(this.board.columns);
                console.log(this.activePlayer.activeToken.offsetLeft);
            } else if (e.key === "ArrowDown") {
                this.playToken();
                //play token
            }
        }
    };

    playToken(){
        let spaces = this.board.spaces;
        let activeToken = this.activePlayer.activeToken;
        let targetColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;

        // Finding an open space in the targetColumn
        for (let space of targetColumn) {
            if (space.token === null) {
                targetSpace = space;
            }
        }

        // Once an open space is avilable drop the token
        if (targetSpace !== null) {
            this.ready = false;
            activeToken.drop(targetSpace);
        }

    };


    
}