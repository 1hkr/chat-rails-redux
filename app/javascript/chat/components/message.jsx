import React from 'react';
import { connect } from 'react-redux';
import { emojify } from 'react-emojione';

export function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}
// className={props.currentUser === props.author ? 'message-container message-right' : 'message-container message-left'}
// style={{ color: stringToColour(props.author) }}
 // <small>{props.created_at.slice(11, 16)}</small>
 // { emojify(props.content) }

const Message = (props) => {
  const time = new Date(props.message.created_at).toLocaleTimeString().slice(0,5);
  return (
    <div className={document.cookie.slice(9) === props.message.author ? 'message-container message-right' : 'message-container message-left'}>
      <i style={{ color: stringToColour(props.message.author) }}>
        {props.message.author}
        <small>{time}</small>
      </i>
      <p> {emojify(props.message.content) } </p>
    </div>
  );
};


export default Message;
