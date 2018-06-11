import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from './message_form';

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

  isDark = () => {
    return(this.props.time < 6 && this.props.time > 19)
  }

  render() {
    return (
      console.log(this.props.messages),
      <div className={"channel-container " + (this.isDark() && "background-dark-grey")}>
        <div className={"channel-title " + (this.isDark() ?
          "background-mid-grey shadow-dark font-dark" : "shadow")}>
          <span>
            <h3>{this.props.selectedChannel}</h3>
          </span>
        </div>

        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {this.props.messages.map(
            message => <Message
            message={message}
            currentUser={this.props.currentUser}
            isDark={this.isDark()}
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
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser,
    time: state.time,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
