import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { signOut } from '../actions';
import { stringToColour } from '../components/message';


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

  isDark = () => {
    return(this.props.time < 6 && this.props.time > 19)
  }

// onClick= {() => this.props.signOut()}>

  render(){
    console.log(this.isDark)
  const image = this.props.currentUser.image ? (
        <img className="messaging-logo" src={this.props.currentUser.image} alt="logo" />
      ) : (
        <div className="messaging-logo" style={{ backgroundColor: stringToColour(this.props.currentUser.author) }}>
          <h2>{this.props.currentUser.author[0]}</h2>
        </div>
      );

  const profile = this.state.isToggleOn ? (
    <div>
      <div className={"messaging-logo-container " + (this.isDark() ?
        "background-mid-grey shadow-dark" : "background-white shadow")}>
      {image}
      </div>
      <div className="log-out-container">
        <h6 className="rotate log-out slider" onClick= {this.handleClick}>Log out</h6>
      </div>
    </div>
    ) : (
    <div className={"messaging-logo-container " + (this.isDark() ?
        "background-mid-grey shadow-dark" : "background-white shadow")}>
      {image}
    </div>
    );

    return (
      <div className={ "logo-container hidden-xs " + (this.isDark() ?
              "background-dark-grey" : "background-white")}>
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
    time: state.time
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
