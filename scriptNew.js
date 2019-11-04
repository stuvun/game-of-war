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
        if (this.player1.length > 0) {
            this.currentCard = this.player1.pop();
            this.combat.push(this.currentCard);
        } else {
            this.player2Wins();
        }

        if (this.player2.length > 0) {
            this.currentCard = this.player2.pop();
            this.combat.push(this.currentCard);
        } else {
            this.player1Wins();
        }
    }
    win1 () {
        this.currentCard = this.combat.pop();
        if (this.player2.length > 0) {
            this.player1.unshift(this.currentCard);
        } else {
            this.player1Wins();
        }
        this.currentCard = this.combat.pop();
        if (this.player2.length > 0) {
            this.player1.unshift(this.currentCard);
        } else {
            this.player1Wins();
        }
    }
    setWar1 () {
        for (let i = 0; i < 3; i++) {
            if (this.player1.length > 0) {
                this.currentCard = this.player1.pop();
                this.combat.push(this.currentCard);
            } else {
                this.player2Wins();
                break;
            }
        }
    }

    setWar2 () {
        for (let i = 0; i < 3; i++) {
            if (this.player2.length > 0) {
                this.currentCard = this.player2.pop();
                this.combat.push(this.currentCard);
            } else {
                this.player1Wins();
                break;
            }
        }
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

    player1Wins () {
        console.log("Player 1 wins the game!")
    }

    player2Wins () {
        console.log("Player 2 wins the game!")
    }

    war () {
        this.shuffleDeck();
        this.dealPlayer1();
        this.dealPlayer2();

        while (this.player1.length > 0 && this.player2.length > 0) {
            this.fight();

            console.log("Player 1's Card", this.combat[0].value)
            console.log("Player 2's Card", this.combat[1].value)
            
            if (this.combat[0].value > this.combat[1].value) {
                console.log("Player 1 wins the battle!")

                this.win1();

                console.log("Player 1's Deck: " + this.player1.length);
                console.log("Player 2's Deck: " + this.player2.length);

            } else if (this.combat[0].value < this.combat[1].value) {
                console.log("Player 2 wins the battle!")

                this.win2();

                console.log("Player 1's Deck: " + this.player1.length);
                console.log("Player 2's Deck: " + this.player2.length);

            } else {
                console.log("Initiate war!!");

                this.startWar();

                console.log("Player 1's Card", this.combat[6].value)
                console.log("Player 2's Card", this.combat[7].value)

                if (this.combat[6].value > this.combat[7].value) {
                    console.log("Player 1 wins the war!");

                    this.winWar1();

                    console.log("Player 1's Deck: " + this.player1.length);
                    console.log("Player 2's Deck: " + this.player2.length);

                } else if (this.combat[6].value < this.combat[7].value) {
                    console.log("Player 2 wins the war!");

                    this.winWar2();

                    console.log("Player 1's Deck: " + this.player1.length);
                    console.log("Player 2's Deck: " + this.player2.length);

                } else {
                    console.log("Initiate war!! AGAIN!");

                    this.startWar();

                    console.log("Player 1's Card", this.combat[14].value)
                    console.log("Player 2's Card", this.combat[15].value)

                    if (this.combat[14].value > this.combat[15].value) {
                        console.log("Player 1 wins the war!");

                        this.winWar1();
                        this.winWar1();

                        console.log("Player 1's Deck: " + this.player1.length);
                        console.log("Player 2's Deck: " + this.player2.length);

                    } else if (this.combat[14].value < this.combat[15].value) {
                        console.log("Player 2 wins the war!");

                        this.winWar2();
                        this.winWar2();

                        console.log("Player 1's Deck: " + this.player1.length);
                        console.log("Player 2's Deck: " + this.player2.length);

                    } else {
                        console.log("Initiate war!! AGAIN!");

                        this.startWar();

                        console.log("Player 1's Card", this.combat[22].value)
                        console.log("Player 2's Card", this.combat[23].value)

                        if (this.combat[22].value > this.combat[23].value) {
                            console.log("Player 1 wins the war!");

                            this.winWar1();
                            this.winWar1();
                            this.winWar1();

                            console.log("Player 1's Deck: " + this.player1.length);
                            console.log("Player 2's Deck: " + this.player2.length);

                        } else if (this.combat[22].value > this.combat[23].value) {
                            console.log("Player 2 wins the war!");

                            this.winWar2();
                            this.winWar2();
                            this.winWar2();

                            console.log("Player 1's Deck: " + this.player1.length);
                            console.log("Player 2's Deck: " + this.player2.length);

                        } else {
                            console.log("Initiate war!! AGAIN!");

                            this.startWar();

                            console.log("Player 1's Card", this.combat[30].value)
                            console.log("Player 2's Card", this.combat[31].value)

                            if (this.combat[30].value > this.combat[31].value) {
                                console.log("Player 1 wins the war!");

                                this.winWar1();
                                this.winWar1();
                                this.winWar1();
                                this.winWar1();

                                console.log("Player 1's Deck: " + this.player1.length);
                                console.log("Player 2's Deck: " + this.player2.length);

                            } else if (this.combat[30].value > this.combat[31].value) {
                                console.log("Player 2 wins the war!");

                                this.winWar2();
                                this.winWar2();
                                this.winWar2();
                                this.winWar2();

                                console.log("Player 1's Deck: " + this.player1.length);
                                console.log("Player 2's Deck: " + this.player2.length);

                            } else {
                                console.log("Initiate war!! AGAIN!");

                                this.startWar();

                                console.log("Player 1's Card", this.combat[38].value)
                                console.log("Player 2's Card", this.combat[39].value)

                                if (this.combat[38].value > this.combat[39].value) {
                                    console.log("Player 1 wins the war!");

                                    this.winWar1();
                                    this.winWar1();
                                    this.winWar1();
                                    this.winWar1();
                                    this.winWar1();

                                    console.log("Player 1's Deck: " + this.player1.length);
                                    console.log("Player 2's Deck: " + this.player2.length);

                                } else if (this.combat[38].value > this.combat[39].value) {

                                    console.log("Player 2 wins the war!");
                                    this.winWar2();
                                    this.winWar2();
                                    this.winWar2();
                                    this.winWar2();
                                    this.winWar2();
                                    console.log("Player 1's Deck: " + this.player1.length);
                                    console.log("Player 2's Deck: " + this.player2.length);
                                
                                } else {
                                    console.log("Initiate war!! AGAIN!");

                                    this.startWar();

                                    console.log("Player 1's Card", this.combat[46].value)
                                    console.log("Player 2's Card", this.combat[47].value)

                                    if (this.combat[46].value > this.combat[47].value) {
                                        console.log("Player 1 wins the war!");

                                        this.winWar1();
                                        this.winWar1();
                                        this.winWar1();
                                        this.winWar1();
                                        this.winWar1();
                                        this.winWar1();

                                        console.log("Player 1's Deck: " + this.player1.length);
                                        console.log("Player 2's Deck: " + this.player2.length);
                                    
                                    } else if (this.combat[46].value > this.combat[47].value) {
                                        console.log("Player 2 wins the war!");

                                        this.winWar2();
                                        this.winWar2();
                                        this.winWar2();
                                        this.winWar2();
                                        this.winWar2();
                                        this.winWar2();

                                        console.log("Player 1's Deck: " + this.player1.length);
                                        console.log("Player 2's Deck: " + this.player2.length);
                                    
                                    } else {
                                        this.player2Wins();
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

deck.war()