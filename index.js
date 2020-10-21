/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  // only android needs polyfill
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/id-ID'); // load the required locale details
}

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import configureStore from  './src/redux/store';

const {persistore,store} = configureStore();

const reactRedux = ()=>{
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <App/>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => reactRedux);
