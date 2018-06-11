import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { selectChannel, fetchMessages } from '../actions';

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.selectChannel();
    this.props.fetchMessages(channel);
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
      >
        <Link
          className={channel === this.props.selectedChannel ? 'active' : null}
          to={`/channels/${channel}`}
          onClick={() => this.handleClick(channel)}>
          {channel}
        </Link>
      </li>
    );
  }

  isDark = () => {
    if (this.props.time > 6 && this.props.time < 19) {
      return "channels-container background-black hidden-xs"
    } else {
      return "channels-container channels-bright hidden-xs"
    }
  }


  render() {
    console.log(this.props.time)
    return (
      <div className={this.isDark()}>
        <ul>
          { this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    time: state.time
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
