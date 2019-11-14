class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /**
     * Create token objects for players
     * @param {integer} num - Number of token objects to be created
     * @returns {Array} tokens - an array of new object tokens 
     */
    createTokens(num) {
        let tokens = [];

        for (let i = 0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

    get unusedTokens(){
        return this.tokens.filter(token => !token.dropped);
    }

    get activeToken(){
        return this.unusedTokens[0];
    }
}