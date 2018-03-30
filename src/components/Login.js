// @flow
import React, { Component, Fragment } from 'react'
import type { Element } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import type { Store } from 'redux'
import { setApiKey } from '../redux/actions/apiActions'
import Spinner from './Spinner'

type State = {
  username: string,
  password: string,
  error: number,
  loggingIn: boolean
}

type Props = {
  apiURL: string,
  setApiKey: (token: string) => mixed
}

export class Login extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: 0,
      loggingIn: false
    }
  }

  onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
      error: 0
    })
  }

  onSubmit = async (e: SyntheticEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    this.setState({ loggingIn: true })
    try {
      const res = await axios.post(`${this.props.apiURL}/authenticate`, {
        username: this.state.username,
        password: this.state.password
      })
      this.props.setApiKey(res.data.token)
    } catch (e) {
      this.setState({ error: e.response.status })
    }
    this.setState({ loggingIn: false })
  }

  checkErrors = (): Element<'h2'> | void => {
    if (this.state.error === 401) {
      return <h2>Please check your credentials and try again.</h2>
    }
  }

  render (): Fragment {
    if (this.state.loggingIn) {
      return <Spinner />
    }
    return (
      <Fragment>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="username" onChange={this.onChange} value={this.state.username} />
          <input type="password" name="password" onChange={this.onChange} value={this.state.password} />
          <button type="submit">Login</button>
        </form>
        {this.checkErrors()}
      </Fragment>
    )
  }
}

const mapStateToProps = (state: Store): { apiURL: string } => ({
  apiURL: state.api.apiURL
})

export default connect(mapStateToProps, { setApiKey })(Login)
