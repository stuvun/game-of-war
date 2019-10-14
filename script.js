class Deck {
    constructor() {
        this.deck = []
        this.player1 = []
        this.player2 = []
        this.combat = []
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

    war () {
        let fight1 = this.player1.pop();
        let fight2 = this.player2.pop();

        let setCombat1 = this.combat.push(fight1);
        let setCombat2 = this.combat.push(fight2);

        function startWar () {
            fight1;
            setCombat1;
            fight1;
            setCombat1;
            fight1;
            setCombat1;

            fight2;
            setCombat2;
            fight2;
            setCombat2;
            fight2;
            setCombat2;

            fight1;
            setCombat2;
            fight2;
            setCombat2;
        }

        function win1 () {
            this.combat.pop();
            this.player1.unshift(combat);
            this.combat.pop();
            this.player1.unshift(combat);
        }

        function win2 () {
            this.combat.pop();
            this.player2.unshift(combat);
            this.combat.pop();
            this.player2.unshift(combat);
        }

        function winWar1 () {
            this.combat.pop();
            this.player1.unshift(combat);
            this.combat.pop();
            this.player1.unshift(combat);
            this.combat.pop();
            this.player1.unshift(combat);
            this.combat.pop();
            this.player1.unshift(combat);
            this.combat.pop();
            this.player1.unshift(combat);
            this.combat.pop();
            this.player1.unshift(combat);
            this.combat.pop();
            this.player1.unshift(combat);
        }

        function winWar2 () {
            this.combat.pop();
            this.player2.unshift(combat);
            this.combat.pop();
            this.player2.unshift(combat);
            this.combat.pop();
            this.player2.unshift(combat);
            this.combat.pop();
            this.player2.unshift(combat);
            this.combat.pop();
            this.player2.unshift(combat);
            this.combat.pop();
            this.player2.unshift(combat);
            this.combat.pop();
            this.player2.unshift(combat);
        }

        while (this.player1.length > 0 || this.player2.length > 0) {
            fight1;
            setCombat1;
            fight2;
            setCombat2;

            if (combat[0] > combat[1]) {
                win1();
            }

            else if (combat[0] < combat[1]) {
                win2();
            }

            else {
                startWar();
                
                if (combat[6] > combat[7]) {
                    winWar1();
                }

                else if (combat[6] < combat[7]) {
                    winWar2();
                }

                else {
                    startWar();

                    if(combat[])
                }
            }
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