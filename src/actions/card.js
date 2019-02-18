/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import ApiUrl from '../controllers/api.config'
import { cardConstants } from './actions.constants'

export const getSuccess = payload => {
  return {
    type: cardConstants.GET_CARDS,
    payload
  }
}

export const postSuccess = payload => {
  return {
    type: cardConstants.POST_CARD,
    payload
  }
}

export const putSuccess = payload => {
  return {
    type: cardConstants.PUT_CARD,
    payload
  }
}

export const failure = payload => {
  return {
    type: cardConstants.ERROR,
    payload
  }
}

export const externalPost = payload => {
  return {
    type: cardConstants.EXTERNAL_CARD_ADDED,
    payload
  }
}

export const externalPut = payload => {
  return {
    type: cardConstants.EXTERNAL_CARD_UPDATED,
    payload
  }
}

export const getCards = () => {
  return dispatch =>
    axios
      .get(`${ApiUrl}/api/cards`)
      .then(response => {
        dispatch(getSuccess(response.data))
      })
      .catch(error => dispatch(failure(error)))
}

export const createCard = card => {
  return dispatch =>
    axios
      .post(`${ApiUrl}/api/cards`, { card })
      .then(response => {
        dispatch(postSuccess(response.data))
      })
      .catch(error => dispatch(failure(error)))
}

export const updateCard = card => {
  return dispatch =>
    axios
      .put(`${ApiUrl}/api/cards/${card._id}`, { card })
      .then(response => {
        dispatch(putSuccess(response.data))
      })
      .catch(error => dispatch(failure(error)))
}
