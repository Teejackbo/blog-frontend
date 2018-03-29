// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './components/Home'

const App = (): Provider => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Provider>
  )
}

export default App
