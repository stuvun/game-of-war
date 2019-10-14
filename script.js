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
                let values = f + 2;
                this.deck.push(card(suits[s], faces[f], values));
            }
        }
    }

    shuffleDeck () {
        let index = this.deck.length, temp, newIndex;
        
        while (index > 0) {
            newIndex = Math.floor(Math.random() * index);
            index -= 1;
            temp = this.deck[index];
            this.deck[index] = this.deck[newIndex];
            this.deck[newIndex] = temp;
        }
    }

    dealPlayer1 () {
        while (this.deck.length > 26) {
            let deal1 = this.deck.shift();
            this.player1.push(deal1);
        }
    }

    dealPlayer2 () {
        while (this.deck.length > 0) {
            let deal2 = this.deck.shift();
            this.player2.push(deal2);
        }
    }

    showFullDeck () {
        for (let c = 0; c < this.deck.length; c++) {
            console.log(this.deck[c])
        }
    }

    showPlayer1 () {
        for (let c1 = 0; c1 < this.player1.length; c1++) {
            console.log(this.player1[c1])
        }
    }

    showPlayer2 () {
        for (let c2 = 0; c2 < this.player2.length; c2++) {
            console.log(this.player2[c2])
        }
    }

    fight () {
        this.currentCard = this.player1.pop();
        this.combat.push(this.currentCard);
        this.currentCard = this.player2.pop();
        this.combat.push(this.currentCard);
    }

    setWar1 () {
        this.currentCard = this.player1.pop();
        this.combat.push(this.currentCard);
        this.currentCard = this.player1.pop();
        this.combat.push(this.currentCard);
        this.currentCard = this.player1.pop();
        this.combat.push(this.currentCard);
    }

    setWar2 () {
        this.currentCard = this.player2.pop();
        this.combat.push(this.currentCard);
        this.currentCard = this.player2.pop();
        this.combat.push(this.currentCard);
        this.currentCard = this.player2.pop();
        this.combat.push(this.currentCard);
    }

    startWar () {
        this.setWar1();
        this.setWar2();
        this.fight();
    }

    win1 () {
        this.currentCard = this.combat.pop();
        this.player1.unshift(this.currentCard);
        this.currentCard = this.combat.pop();
        this.player1.unshift(this.currentCard);
    }

    win2 () {
        this.currentCard = this.combat.pop();
        this.player2.unshift(this.currentCard);
        this.currentCard = this.combat.pop();
        this.player2.unshift(this.currentCard);
    }

    winWar1 () {
        this.win1();
        this.win1();
        this.win1();
        this.win1();
    }

    winWar2 () {
        this.win2();
        this.win2();
        this.win2();
        this.win2();
    }

    endWar1 () {
        console.log("Player 1 Wins!")
    }

    endWar2 () {
        console.log("Player 2 Wins!")
    }

    war () {
        let combat = [];
        this.shuffleDeck();
        this.dealPlayer1();
        this.dealPlayer2();

        while (this.player1.length > 0 && this.player2.length > 0) {
            this.fight();

            if (this.player1.length == 0) {
                this.endWar2();
            } else if (this.player2.length == 0) {
                this.endWar1();
            } else if (combat[0].value > combat[1].value) {
                this.win1();
            } else if (combat[0].value < combat[1].value) {
                this.win2();
            } else {
                this.startWar();
                
                if (combat[6].value > combat[7].value) {
                    this.winWar1();
                } else if (combat[6].value < combat[7].value) {
                    this.winWar2();
                } else {
                    this.startWar();

                    if (combat[14].value > combat[15].value) {
                        this.winWar1();
                        this.winWar1();
                    } else if (combat[14].value < combat[15].value) {
                        this.winWar2();
                        this.winWar2();
                    } else {
                        this.startWar();

                        if (combat[22].value > combat[23].value) {
                            this.winWar1();
                            this.winWar1();
                            this.winWar1();
                        } else if (combat[22].value > combat[23].value) {
                            this.winWar2();
                            this.winWar2();
                            this.winWar2();
                        } else {
                            this.startWar();
    
                            if (combat[30].value > combat[31].value) {
                                this.winWar1();
                                this.winWar1();
                                this.winWar1();
                                this.winWar1();
                            } else if (combat[30].value > combat[31].value) {
                                this.winWar2();
                                this.winWar2();
                                this.winWar2();
                                this.winWar2();
                            } else {
                                this.startWar();
        
                                if (combat[38].value > combat[39].value) {
                                    this.winWar1();
                                    this.winWar1();
                                    this.winWar1();
                                    this.winWar1();
                                    this.winWar1();
                                } else if (combat[38].value > combat[39].value) {
                                    this.winWar2();
                                    this.winWar2();
                                    this.winWar2();
                                    this.winWar2();
                                    this.winWar2();
                                } else {
                                    this.startWar();
            
                                    if (combat[46].value > combat[47].value) {
                                        this.winWar1();
                                        this.winWar1();
                                        this.winWar1();
                                        this.winWar1();
                                        this.winWar1();
                                        this.winWar1();
                                    } else if (combat[46].value > combat[47].value) {
                                        this.winWar2();
                                        this.winWar2();
                                        this.winWar2();
                                        this.winWar2();
                                        this.winWar2();
                                        this.winWar2();
                                    } else {
                                        this.endWar2();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

deck = new Deck

deck.newDeck()

deck.shuffleDeck()

deck.dealPlayer1()

deck.dealPlayer2()

console.log("Player 1's Deck")
deck.showPlayer1()

console.log("Player 2's Deck")
deck.showPlayer2()