import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer'
import PageContainer from '../containers/PageContainer'
import NotificationContainer from '../containers/NotificationContainer'

class App extends Component {
    render() {
        return (
            <div className="app">
                <PageContainer />
                <UserContainer />
                <NotificationContainer />
            </div>
        )
    }
}

export default App