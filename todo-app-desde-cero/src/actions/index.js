import {ADD_CARD} from '../constants'

export const addCard = (title, description) =>({
    type: ADD_CARD,
    title,
    description
})