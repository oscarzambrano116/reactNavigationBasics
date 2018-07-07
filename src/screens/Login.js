import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

class Login extends Component {
  handlePress = () => {
    const {
      navigation: {
        navigate,
      },
    } = this.props;
    navigate('About');
  }

  render() {
    const {
      container,
    } = styles;

    const {
      navigation: {
        state: {
          params: {
            name,
          },
        },
      },
    } = this.props;

    return (
      <View style={container}>
        <Text>{`Login ${name}`}</Text>
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
