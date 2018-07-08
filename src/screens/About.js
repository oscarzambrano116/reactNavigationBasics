import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

class About extends Component {
  handlePress = () => {
    const {
      navigation: {
        navigate,
      },
    } = this.props;
    navigate('Profile', {
      name: 'Oscar Zambrano',
    });
  }

  render() {
    const {
      container,
    } = styles;

    return (
      <View style={container}>
        <Text>{'About'}</Text>
        <Button
          title={'Ir al profile'}
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

export default About;
