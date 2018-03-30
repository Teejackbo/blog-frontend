// @flow
import { SET_API_KEY } from './types'

export type APIAction = {
  +type: string,
  +apiKey?: string
}

export function setApiKey (apiKey: string): APIAction {
  return {
    type: SET_API_KEY,
    apiKey
  }
}
