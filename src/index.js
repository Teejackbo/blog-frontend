// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

const AppElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const root = document.getElementById('root')
if (root === null) {
  console.log('Something went wrong.')
} else {
  ReactDOM.render(AppElement, root) // eslint-disable-line
  registerServiceWorker()
}
