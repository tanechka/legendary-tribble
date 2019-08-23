import React from 'react'
import NotificationComponent from '../components/Notification'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render(){
    const {text} = this.props;
    return (
      <NotificationComponent text={text}/>
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
)(Notification)