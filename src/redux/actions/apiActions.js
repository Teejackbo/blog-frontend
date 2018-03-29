// @flow
import { SET_API_KEY, SET_LOGGING_IN } from './types'

export type APIAction = {
  +type: string,
  +apiKey?: string,
  +loggingIn?: boolean
}

export function setApiKey (apiKey: string): APIAction {
  return {
    type: SET_API_KEY,
    apiKey
  }
}

export function setLoggingIn (loggingIn: boolean): APIAction {
  return {
    type: SET_LOGGING_IN,
    loggingIn
  }
}
