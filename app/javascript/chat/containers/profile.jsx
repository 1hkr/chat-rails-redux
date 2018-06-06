import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { signOut } from '../actions';

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
    <p
    onClick= {() => this.props.signOut()}>
      Log out
    </p>
    ) : (
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signOut }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
