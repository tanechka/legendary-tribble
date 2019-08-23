import React from 'react'
import Notification from '../components/Notification'
import { connect } from 'react-redux'

class NotificationContainer extends React.Component {
    render(){
        const { text } = this.props;
        return (
            <Notification text={text}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        text: state.notification.text,
    }
};

export default connect(
    mapStateToProps
)(NotificationContainer)