import { toggleList } from './actions.constants'

export const expandList = payload => {
  return {
    type: toggleList.SHOW_LIST,
    payload
  }
}

export const collapseList = payload => {
  return {
    type: toggleList.HIDE_LIST,
    payload
  }
}
