import React, { Component } from 'react'
import User from './User'
import Page from './Page'
import Notification from './Notification'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Page />
        <User />
        <Notification />
      </div>
    )
  }
}

export default App