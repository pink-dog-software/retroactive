import axios from 'axios'
import ApiUrl from '../controllers/api.config'
import { cardConstants } from './actions.constants'

export const getSuccess = payload => {
  return {
    type: cardConstants.GET_CARDS,
    payload
  }
}

export const getFailure = payload => {
  return {
    type: cardConstants.ERROR,
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
      .catch(error => dispatch(getFailure(error)))
}
