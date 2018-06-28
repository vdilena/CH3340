import {combineReducers} from 'redux'
import {ADD_CARD,DELETE_CARD_BY_ID, 
    EDIT_CARD_BY_ID, CARD_LIST} from '../constants'

const editCardById = (cards, action) => {

    let filteredCards = cards.filter(card => {

        if(card.id === parseInt(action.cardId)) {

            card.title = action.title
            card.description = action.description
        }

        return true
    })

    return filteredCards
}

const cardReducer = (cards = [], action) => {

    switch (action.type) {
        case ADD_CARD:
            return [
                ...cards,
                {
                    id: cards[cards.length -1].id +1,
                    title: action.title,
                    description: action.description
                }
            ]
        case DELETE_CARD_BY_ID:
            return cards.filter(card => card.id !== action.cardId)
        case EDIT_CARD_BY_ID:
            return editCardById(cards, action)
        case CARD_LIST:
            return action.retrievedCards
        default:
            return cards
    }
}

export default combineReducers({
    cardReducer
})