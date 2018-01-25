import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import Auth from './screens/Auth';
import Profile from './screens/Profile';

import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: Profile },
  // Profile: { screen: Profile }
});
export default App;
