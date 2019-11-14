class Library {
    constructor() {
        this.books = [];
        this.patrons = [];
        this.dailyFine = .1;
    }

    addBook(book){
        this.books.push(book);
    }

    addPatron(patron){
        this.patrons.push(patron);
    }

    chargeFines(){
        const now = new Date();
        const latePatrons = this.patrons.filter(
            parton => (patron.currentBook !== null && patron.currentBook.dueDate < now)
        );
        console.log(latePatrons);
        for (const patron of latePatrons) {
            const daysLate = now.getDate() - patron.currentBook.dueDate.getDate();
            patron.balance = this.dailyFine * daysLate;
            //console.log(daysLate);
        }
    }    
}

