import { Player } from './player/player'
import { Card } from './cards/card'
import { CardHand } from './cards/cardHand'
import { Alexandria } from './city/alexandria'
import { CardDeck } from './cards/cardDeck'

const cards: Card[] = []
const cardDeck = new CardDeck(cards);
const player1Hand = new CardHand(cardDeck.drawCards(7))
const player1 = new Player(
    "Dani",
    Alexandria,
    player1Hand
)