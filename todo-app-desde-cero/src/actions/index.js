import {ADD_CARD, 
    DELETE_CARD_BY_ID, EDIT_CARD_BY_ID,
    CARD_LIST} from '../constants'
import axios from 'axios'

export const deleteCardById = cardId => ({
    type: DELETE_CARD_BY_ID,
    cardId
})

export const cardList = () => {

    return (dispatch) => {

        axios.get("http://localhost:4000/cards")
            .then(result => {

                dispatch({

                    type: CARD_LIST,
                    retrievedCards: result.data
                })
            })
    }
}

export const deleteRemoteCard = (cardId) => {

    return (dispatch) => {

        axios.delete(`http://localhost:4000/cards/${cardId}`)
            .then(result => {

                dispatch({

                    type: DELETE_CARD_BY_ID,
                    cardId: cardId
                })
            })
    }
}

export const addCard = (title, description) => {

    return (dispatch) => {

        axios.post("http://localhost:4000/cards", 
                {title: title, description: description})
            .then(result => {
                dispatch({
                    type: ADD_CARD,
                    title,
                    description
                })
            })
    }
}

export const editCardById = (cardId, title, description) => {

    return (dispatch) => {

        axios.put(`http://localhost:4000/cards/${cardId}`, 
                {title: title, description: description})
            .then(result => {
                dispatch({
                    type: EDIT_CARD_BY_ID,
                    cardId,
                    title,
                    description
                })
            })
    }
}