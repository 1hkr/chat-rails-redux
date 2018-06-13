const darkReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'SWITCH_LIGHT':
      let newState = Object.assign({}, state)
      newState.isDark = !newState.isDark
      console.log(newState)
      return newState;
    default:
      return state;
  }
};

export default darkReducer;
