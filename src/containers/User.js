import React from 'react'
import { connect } from 'react-redux'
import { User as  UserComponent } from '../components/User'

class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <UserComponent name={user.name} />
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
};

export default connect(
  mapStateToProps
)(User)