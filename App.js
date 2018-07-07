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

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: '/home',
      navigationOptions: {
        title: 'Home Screen',
      },
    },
    About,
    Login,
    Profile,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      title: 'Title',
    },
    initialRouteKey: 'login',
    initialRouteParams: {
      name: 'Oscar Zambrano',
    },
  },
);

export default AppNavigator;
