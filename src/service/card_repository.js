import firebaseApp from './firebase'
class CardRepository{
    saveCard(userId, card){
        firebaseApp.database().ref(`${userId}/card/${card.id}`).set(card)
    }
    delCard(userId, card){
        firebaseApp.database().ref(`${userId}/card/${card.id}`).remove(card)
    }
}

export default CardRepository;