class Deck {
    constructor() {
        this.deck = []
        this.player1 = []
        this.player2 = []
        this.combat = []
        this.round = 1
    }
    newDeck() {
        let card = (suit, face, value) => {
            this.suit = suit
            this.face = face
            this.value = value
            return {suit: this.suit, face: this.face, value: this.value}
        }
        let suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
        let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        for (let s = 0; s < suits.length; s++) {
            for (let f = 0; f < faces.length; f++) {
                let values = f;
                this.deck.push(card(suits[s], faces[f], values));
            }
        }
        let index = this.deck.length, tempIndex, newIndex;
        while (index > 0) {
            newIndex = Math.floor(Math.random() * index);
            index -= 1;
            tempIndex = this.deck[index];
            this.deck[index] = this.deck[newIndex];
            this.deck[newIndex] = tempIndex;
        }
        while (this.deck.length > 26) {
            let deal1 = this.deck.shift();
            this.player1.push(deal1);
        }
        while (this.deck.length > 0) {
            let deal2 = this.deck.shift();
            this.player2.push(deal2);
        }
        this.deckCheck();
    }
    grabCards1() {
        if (this.combat.length > 0) {
            console.log("Player 1 wins this war!")
            while (this.combat.length > 0) { this.player1.push(this.combat.shift()) } }
    }
    grabCards2() {
        if (this.combat.length > 0) {
            console.log("Player 2 wins this war!")
            while (this.combat.length > 0) {  this.player2.push(this.combat.shift()) } }
    }
    deckCheck() {
        console.log("Player 1's Deck: " + this.player1.length); console.log("Player 2's Deck: " + this.player2.length)
    }
    checkWin() {
        if (this.player2.length == 0) { console.log("Player 1 wins!"); this.grabCards1(); this.deckCheck() }
        else if (this.player1.length == 0) { console.log("Player 2 wins!"); this.grabCards2(); this.deckCheck() }
        else { this.round = this.round + 1; this.deckCheck(); this.startGame() }
    }
    prepTurn() {
        console.log("ROUND: " + this.round)
        if (this.player1.length > 0 && this.player2.length > 0) {
            console.log("Player 1's Card: " + this.player1[0].face + " of " + this.player1[0].suit + " || Power: " + this.player1[0].value)
            console.log("Player 2's Card: " + this.player2[0].face + " of " + this.player2[0].suit + " || Power: " + this.player2[0].value)
            if (this.player1[0].value > this.player2[0].value) { console.log("Player 1 wins this turn!")
                this.player1.push(this.player2.shift()); this.grabCards1(); this.checkWin()
            }
            else if (this.player1[0].value < this.player2[0].value) { console.log("Player 2 wins this turn!")
                this.player2.push(this.player1.shift()); this.grabCards2(); this.checkWin()
            }
            else if (this.player1[0].value === this.player2[0].value) { this.prepWar() }
        } else { this.checkWin() }
    }
    prepWar() {
        console.log("Prepare for war!")
        for (let i = 0; i < 3; i++) { this.combat.unshift(this.player1.shift()); this.combat.unshift(this.player2.shift()) }
        this.prepTurn()
    }
    startGame() { if (this.player1.length > 0 && this.player2.length > 0) { this.prepTurn() }
        else { this.checkWin() }
    }
}
deck = new Deck;
deck.newDeck();
deck.startGame();