import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages, switchLight } from '../actions';
import Message from '../components/message';
import MessageForm from './message_form';
import FontAwesome from 'react-fontawesome';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 1000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  handleClick = () => {
    this.props.switchLight()
    this.forceUpdate()
  }

  render() {
    return (
      <div className={"channel-container " + (this.props.isDark && "background-dark-grey")}>
        <div className={"channel-title " + (this.props.isDark ?
          "background-mid-grey shadow-dark font-dark" : "shadow")}>
          <div className="titles">
            <h3>{this.props.selectedChannel}</h3>
            <h3
              onClick={this.handleClick}
              className="pointer">
              {this.props.isDark ? <FontAwesome name='fas fa-sun' /> : <FontAwesome name='far fa-moon' />}
            </h3>
          </div>
        </div>

        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {this.props.messages.map(
            message => <Message
            message={message}
            currentUser={this.props.currentUser}
            isDark={this.props.isDark}
            key={message.content} />
            )}
        </div>
        <MessageForm channelFromParams={this.props.selectedChannel} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages, switchLight },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser,
    isDark: state.isDark.isDark
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
