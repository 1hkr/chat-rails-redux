import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
  }

  handleChange = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render(){
  const profile = this.state.isToggleOn ? (
    <h6>Log out</h6>) : (
    <img className="messaging-logo" src={this.props.currentUser.image} alt="logo" />
    );

    return (
      <div className="logo-container hidden-xs">
        <div className="messaging-logo-container shadow" onClick={this.handleChange}>
          {profile}
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(Profile);
