import firebaseApp from './firebase'
class CardRepository{
    syncCards(userId, onUpdate){
        const ref = firebaseApp.database().ref(`${userId}/cards`);
        ref.on(`value`, snapshot => {
            const value = snapshot.val();
            value && onUpdate(value)
        })
        return () => ref.off()
    }
    saveCard(userId, card){
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card)
    }
    delCard(userId, card){
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove(card)
    }
}

export default CardRepository;