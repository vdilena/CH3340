import {ADD_CARD, DELETE_CARD_BY_ID, EDIT_CARD_BY_ID} from '../constants'

export const addCard = (title, description) =>({
    type: ADD_CARD,
    title,
    description
})

export const deleteCardById = cardId => ({
    type: DELETE_CARD_BY_ID,
    cardId
})

export const editCardById = (cardId, title, description) => ({
    type: EDIT_CARD_BY_ID,
    cardId,
    title,
    description
})