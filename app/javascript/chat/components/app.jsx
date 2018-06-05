import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';
import Profile from '../containers/profile';

const App = (props) => {
  return (
   <div className="app">
     <div className="messaging-wrapper">
      <Profile />
      <ChannelList selectedChannel={props.match.params.channel} />
      <MessageList selectedChannel={props.match.params.channel} />
     </div>
   </div>
   );
};

export default App;
