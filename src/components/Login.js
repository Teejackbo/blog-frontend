// @flow
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setApiKey } from '../redux/actions/apiActions'

type State = {
  username: string,
  password: string
}

export class Login extends Component<{}, State> {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    console.log(this.state)
  }

  onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  render (): Fragment {
    return (
      <Fragment>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="username" onChange={this.onChange} value={this.state.username} />
          <input type="password" name="password" onChange={this.onChange} value={this.state.password} />
          <button type="submit">Login</button>
        </form>
      </Fragment>
    )
  }
}

export default connect(null, { setApiKey })(Login)
