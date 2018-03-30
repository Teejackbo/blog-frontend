// @flow
import { SET_API_KEY } from '../actions/types'
import type { APIAction } from '../actions/apiActions'

type State = {
  +apiKey: string,
  +apiURL: string,
  +loggedIn: boolean
}

const initialState = {
  apiKey: '',
  apiURL: '//localhost:3333/api',
  loggedIn: false
}

export default function (state: State = initialState, action: APIAction): State {
  switch (action.type) {
    case SET_API_KEY:
      return {
        ...state,
        apiKey: action.apiKey,
        loggedIn: true
      }
    default:
      return state
  }
}
