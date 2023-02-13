import { Player } from './player'
import { CardDeck } from './cardDeck'
import { Card } from './cards/card'
import { CardHand } from './cardHand'
import { Alexandria } from './city/alexandria'

const cards: Card[] = []
const cardDeck = new CardDeck(cards);
const player1Hand = new CardHand(cardDeck.drawCards(7))
const player1 = new Player(
    "Dani",
    Alexandria,
    player1Hand
)