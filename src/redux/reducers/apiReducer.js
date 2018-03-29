// @flow
import { SET_API_KEY, SET_LOGGING_IN } from '../actions/types'
import type { APIAction } from '../actions/apiActions'

type State = {
  +apiKey: string,
  +apiURL: string,
  +loggedIn: boolean,
  +loggingIn: boolean
}

const initialState = {
  apiKey: '',
  apiURL: '//localhost:3333/api',
  loggedIn: false,
  loggingIn: false
}

export default function (state: State = initialState, action: APIAction): State {
  switch (action.type) {
    case SET_API_KEY:
      return {
        ...state,
        apiKey: action.apiKey,
        loggedIn: true,
        loggingIn: false
      }
    case SET_LOGGING_IN:
      return {
        ...state,
        loggingIn: action.loggingIn
      }
    default:
      return state
  }
}
