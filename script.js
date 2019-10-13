class Deck {
    constructor() {
        this.deck = []
        this.player1 = []
        this.player2 = []
    }

    newDeck () {
        let card = (suit, face, value) => {
            this.name = face + " of " + suit + ", Score: " + value
            this.face = face
            this.value = value

            return this.name
            return this.face
            return this.value
        }

        let suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
        let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        
        for (let s = 0; s < suits.length; s++) {
            for (let f = 0; f < faces.length; f++) {
                let values = f + 2;
                this.deck.push(card(suits[s], faces[f], values));
                }
            }
        }
    
    showDeck() {
        for (let c = 0; c < this.deck.length; c++) {
            console.log(this.deck[c])
        }
    }

    shuffleDeck () {
        let index = this.deck.length, temp, newIndex;
        
        while (index != 0) {
            newIndex = Math.floor(Math.random() * index);
            index -= 1;
            temp = this.deck[index];
            this.deck[index] = this.deck[newIndex];
            this.deck[newIndex] = temp;
        }
    }
}

deck = new Deck

deck.newDeck()

deck.shuffleDeck()

deck.showDeck()