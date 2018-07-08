import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

class Login extends Component {
  handlePress = () => {
    const {
      navigation: {
        // navigate,
        dispatch,
      },
    } = this.props;
    const { navigate } = NavigationActions;
    dispatch(navigate({
      routeName: 'About',
    }));
    // navigate('About');
  }

  render() {
    const {
      container,
    } = styles;

    return (
      <View style={container}>
        <Text>{'Login'}</Text>
        <Button
          title={'Ir al about'}
          onPress={this.handlePress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
