import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import ChatUI from './components/ChatUI';
import LoginUI from './components/LoginUI';
import rootReducer from './reducers';
import { fetchMessages, checkUserExits } from './actions';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

import { Examples  } from '@shoutem/ui';

const LoginOrChat = connect(
  (state) => ({
    authorized: state.user.authorized
  })
)(({ authorized, dispatch}) => {
  if (authorized){
    return(<ChatUI/>);
  }
  else{
    dispatch(checkUserExits());
    return(<LoginUI/>);
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LoginOrChat/>
      </Provider>
    );
  }
}


