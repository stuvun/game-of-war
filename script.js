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
    }
}