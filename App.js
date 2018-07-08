/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
} from 'react-native';
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
    initialRouteKey: 'login',
    initialRouteParams: {
      name: 'Oscar Zambrano',
    },
    navigationOptions: {
      title: 'Title',
      headerTitleAllowFontScalling: true,
      headerBackTitle: 'Atrás',
      gesturesEnable: true,
      // headerBackImage: <Text>😀</Text>
      // header: <Text style={{ color: 'white' }}>{'Custom Header'}</Text>,
      // header: null, // Remove Header component
    },
    headerTransitionPreset: 'uikit',
    // headerTransitionPreset: 'fade-in-place',
    // cardStyle: {
    //   borderWidth: 2,
    //   backgroundColor: 'black',
    // },
    // mode: 'modal',
    // mode: 'card',
    // headerMode: 'none',
    // headerMode: 'screen',
  },
);

export default AppNavigator;
