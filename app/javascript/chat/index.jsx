import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import messagesReducer from './reducers/messages_reducer';
import darkReducer from './reducers/dark_reducer'
import identityReducer from './reducers/identity_reducer';

const chatContainer = document.getElementById('chat_app');
const currentUser = JSON.parse(chatContainer.dataset.currentUser);
const time = Date().slice(16,18);
const isDark = (time < 6 || time > 19);
const initialState = {
  messages: [],
  currentUser: currentUser,
  time: Date().slice(16,18),
  isDark: {isDark: isDark},
  channels: ["Main", "Berlin", "Lolex"]
};

const reducers = combineReducers({
  messages: messagesReducer,
  time: identityReducer,
  isDark: darkReducer,
  currentUser: identityReducer,
  channels: (state = null, action) => state
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/channels/:channel" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  chatContainer
);
