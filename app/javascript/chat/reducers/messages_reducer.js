const messagesReducer = (state = null, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload;
    case 'MESSAGE_POSTED':
      if (state.map(message => message.id).includes(action.payload.id)) {
        return state;
      } else {
        const copiedState = state.slice(0);
        copiedState.push(action.payload);
        return copiedState;
      }
    default:
      return state;
  }
};

export default messagesReducer;
