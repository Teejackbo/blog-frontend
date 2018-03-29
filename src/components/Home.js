// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { Element } from 'react'
import type { Store } from 'redux'
import Login from './Login'

type Props = {
  loggedIn: boolean,
  loggingIn: boolean
}

const Home = ({ loggedIn, loggingIn }: Props): Element<'h1'> | typeof Login => {
  if (loggedIn) {
    return <h1>Hello World</h1>
  }
  if (loggingIn) {
    return <h1>Spinner</h1>
  }
  return <Login />
}

const mapStateToProps = (state: Store): Props => ({
  loggedIn: state.api.loggedIn,
  loggingIn: state.api.loggingIn
})

export default connect(mapStateToProps, null)(Home)
