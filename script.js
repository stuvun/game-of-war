class Deck {
    constructor() {
        this.deck = []
        this.player1 = []
        this.player2 = []
    }

    newDeck () {
        let card = (suit, face, value) => {
            this.name = face + " of " + suit
            this.face = face
            this.value = value

            return this.name
            return this.face
            return this.value
        }

        let suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
        let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        
        for (let s = 0; s < suits.length; s++) {
            for (let f = 0; f < faces.length; f++) {
                for (let v = 0; v < values.length; v++) {
                    this.deck.push(card(suits[s], faces[f], values[v]))
                }
            }
        }
    }
    
    showDeck() {
        for (let c = 0; c < this.deck.length; c++) {
            console.log(this.deck[c])
        }
    }

    shuffleDeck () {
        var i = 0;
        var i2 = 0;
        var i3;

        for (i = this.deck.length - 1; i > 0; i -= 1) {
            i2 = Math.floor(Math.random() * (i + 1));
            i3 = this.deck[i];
            this.deck[i] = this.deck[i2];
            this.deck[i2] = i3;
        }

    }
}

deck = new Deck