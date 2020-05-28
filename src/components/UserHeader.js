import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  // destruction in the first const line below.
  // I think this assigns this.props.user to user variable
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

// can pass mapStateToProps a second argument called ownProps that allows you
// to do precalcuations in this function and keep out of class code
// passes state as props to itself
const mapStateToProps = (state, ownProps) => ({
  user: state.users.find((user) => user.id === ownProps.userId),
});

export default connect(mapStateToProps)(UserHeader);
