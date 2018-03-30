// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { Element } from 'react'
import type { Store } from 'redux'
import Login from './Login'

type Props = {
  loggedIn: boolean
}

const Home = ({ loggedIn }: Props): Element<'h1'> | typeof Login => {
  if (loggedIn) {
    return <h1>Hello World</h1>
  }
  return <Login />
}

const mapStateToProps = (state: Store): Props => ({
  loggedIn: state.api.loggedIn
})

export default connect(mapStateToProps, null)(Home)
