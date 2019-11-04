class Deck {
    constructor() {
        this.deck = []
        this.player1 = []
        this.player2 = []
        this.combat = []
        this.currentCard = ""
    }

    newDeck () {
        let card = (suit, face, value) => {
            this.suit = suit
            this.face = face
            this.value = value
            return {suit: this.suit, face: this.face, value: this.value}
        }
        let suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
        let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        for (let s = 0; s < suits.length; s++) {
            for (let f = 0; f < faces.length; f++) {
                let values = f;
                this.deck.push(card(suits[s], faces[f], values));
            }
        }
    }
    shuffleDeck () {
        let index = this.deck.length, tempIndex, newIndex;
        while (index > 0) {
            newIndex = Math.floor(Math.random() * index);
            index -= 1;
            tempIndex = this.deck[index];
            this.deck[index] = this.deck[newIndex];
            this.deck[newIndex] = tempIndex;
        }
    }
    dealPlayer1 () { while (this.deck.length > 26) {
        let deal1 = this.deck.shift();
        this.player1.push(deal1); }
    }
    dealPlayer2 () { while (this.deck.length > 0) {
        let deal2 = this.deck.shift();
        this.player2.push(deal2); }
    }
    showFullDeck () { for (let c = 0; c < this.deck.length; c++) {
        console.log(this.deck[c]) }
    }
    showPlayer1 () { for (let c1 = 0; c1 < this.player1.length; c1++) {
        console.log(this.player1[c1]) }
    }
    showPlayer2 () { for (let c2 = 0; c2 < this.player2.length; c2++) {
        console.log(this.player2[c2]) }
    }
    prepareWar() {
        this.newDeck();
        this.shuffleDeck();
        this.dealPlayer1();
        this.dealPlayer2();
        this.showFullDeck();
        this.showPlayer1();
        this.showPlayer2();
    }

    turns() {
        this.combat.push(this.player1.pop())
        this.combat.push(this.player2.pop())
    }
    announceCombat() {
        console.log("Player 1's Card: " + JSON.stringify(this.combat[0]))
        console.log("Player 2's Card: " + JSON.stringify(this.combat[1]))
    }
    announceDecks() {
        console.log("Player 1's Deck: " + this.player1.length)
        console.log("Player 2's Deck: " + this.player2.length)
    }
    endTurn() {
        this.announceCombat();
        if (this.combat[0].value > this.combat[1].value) {
            console.log("Player 1 wins this turn!")
            for (let i = 0; i <= this.combat.length; i++) {
                this.player1.unshift(this.combat.pop())
            }
            this.announceDecks();
        } else if (this.combat[0].value < this.combat[1].value) {
            console.log("Player 2 wins this turn!")
            for (let i = 0; i <= this.combat.length; i++) {
                this.player2.unshift(this.combat.pop())
            }
            this.announceDecks();
        }
    }
}
deck = new Deck;
deck.prepareWar();