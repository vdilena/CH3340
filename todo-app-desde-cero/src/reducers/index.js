import {combineReducers} from 'redux'
import {ADD_CARD} from '../constants'

const initialCards = [
    {id: 1, title: 'Mi Card #1', description: 'My description Card #1'},
    {id: 2, title: 'Mi Card #2', description: 'My description Card #2'},
    {id: 3, title: 'Mi Card #3', description: 'My description Card #3'},
    {id: 4, title: 'Mi Card #4', description: 'My description Card #4'},
    {id: 5, title: 'Mi Card #5', description: 'My description Card #55'},
]

const cardReducer = (cards = initialCards, action) => {

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
        default:
            return cards
    }
}

export default combineReducers({
    cardReducer
})