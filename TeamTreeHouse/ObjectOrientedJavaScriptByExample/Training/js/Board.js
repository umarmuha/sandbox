class Board {
    constructor(rows, columns, spaces) {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    /**
     * Generate 2D array of spaces
     * @return {Array} An array of space objects
     */
    createSpaces() {
        let spaces = []
        for (let x = 0; x < this.columns; x++) {
            let columns = []
            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                columns.push(space);
                
            }
            console.log(columns);
            spaces.push(columns);
        }
        console.log(spaces);                      
        return spaces;
    }
    /**
     * Creates the HTML components for the Board object
     */
    drawHTMLBoard() {
        for (let column of this.spaces) {
            for (const space of column) {
                space.drawSVGSpace();
            }
        }
    }
}


