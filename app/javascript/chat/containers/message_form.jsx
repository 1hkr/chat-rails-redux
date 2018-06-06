import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { stringToColour } from '../components/message';
import { createMessage } from '../actions/index';


class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.channelFromParams, this.state.value);
    this.setState({ value: '' }); // Reset message input
  }

//

  render () {
    return (
      <form className="channel-editor" onSubmit={this.handleSubmit}>
        <input ref={input => this.messageBox = input} type="text" value={this.state.value} onChange={this.handleChange} />
        <button style={{ backgroundColor: stringToColour(this.props.currentUser.author) }}>send</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
