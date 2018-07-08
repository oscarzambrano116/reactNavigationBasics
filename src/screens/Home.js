import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { StackActions } from 'react-navigation';

class Home extends Component {
  handlePress = () => {
    const {
      navigation: {
        // navigate,
        dispatch,
      },
    } = this.props;
    // navigate('Login');
    const { push } = StackActions;
    dispatch(push({
      routeName: 'Login',
    }));
  }

  render() {
    const {
      container,
    } = styles;

    return (
      <View style={container}>
        <Text>{'Home'}</Text>
        <Button
          title={'Ir al login'}
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

export default Home;
