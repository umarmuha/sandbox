class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }

    get htmlToken() {
        return document.getElementById(this.id);
    }

    get offsetLeft() {
        return this.htmlToken.offsetLeft;
    }

    drawHTMLToken() {
        const $token = $('<div></div>').attr('id', this.id).addClass("token").css('background-color', this.owner.color);
        $('#game-board-underlay').append($token);
    }

    /** 
     * Moves html token one column to left.
     */
    moveLeft() {
        if (this.columnLocation > 0) {
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation -= 1;
        };
    }

    /** 
     * Moves html token one column to right.
     * @param   {number}    columns - number of columns in the game board
     */
    moveRight(columns) {
        if (this.columnLocation < columns-1) {
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation += 1;
        };

    }

    drop(target, reset){
        this.dropped = true;
        $(this.htmlToken).animate({top: "228px"});
    }

    // I used JQuery first to come with the method below. 
    // Wrong method approach  as this will add values to the game-board and not the newly created div element
    // This resulted in the Token being created with arond values and the id and class were added to the game-board DOM object
    // drawHTMLToken(){
    //     $('#game-board-underlay')
    //     .append('<div></div>')
    //     .attr('id', this.id)
    //     .addClass("token")
    //     .css('background-color', this.owner.color);
    // }

    // Solution provided by the class teacher
    // drawHTMLToken(){
    //     const token = document.createElement('div');
    //     document.getElementById('game-board-underlay').appendChild(token);
    //     token.setAttribute('id', this.id);
    //     token.setAttribute('class', 'token');
    //     token.style.backgroundColor = this.owner.color;
    // }

    /**
     * Draws the new HTML token
     */

}