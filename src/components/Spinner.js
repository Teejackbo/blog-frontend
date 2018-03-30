// @flow
import React from 'react'
import type { Element } from 'react'

const Spinner = (): Element<'div'> => (
  <div className="fullscreen-center">
    <div className="spinner"></div>
  </div>
)

export default Spinner
