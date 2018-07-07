/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';

const AppNavigator = createStackNavigator({
  Home,
  About,
  Login,
  Profile,
});

export default AppNavigator;
