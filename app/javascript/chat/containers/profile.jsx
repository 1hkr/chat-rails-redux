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

  handleClick = () => {
    this.props.signOut()
  }

// onClick= {() => this.props.signOut()}>

  render(){
  const profile = this.state.isToggleOn ? (
    <div>
      <div className="messaging-logo-container shadow">
        <img className="messaging-logo" src={this.props.currentUser.image} alt="logo" />
      </div>
      <div className="log-out-container">
        <h6 className="rotate log-out slider" onClick= {this.handleClick}>Log out</h6>
      </div>
    </div>
    ) : (
    <div className="messaging-logo-container shadow">
      <img className="messaging-logo" src={this.props.currentUser.image} alt="logo" />
    </div>
    );

    return (
      <div className="logo-container hidden-xs">
        <div onClick={this.handleChange}>
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
