import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import Name from '../profile/components/Name';

class Profile extends Component {
  handlePress = () => {
    const {
      navigation: {
        navigate,
      },
    } = this.props;
    navigate('Home');
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('name')} ${navigation.getParam('age', 27)}`,
    };
  }

  setParams = () => {
    const { navigation } = this.props;
    navigation.setParams({
      name: 'Other Oscar',
    })
  }

  render() {
    const {
      container,
    } = styles;

    return (
      <View style={container}>
        <Text>{'Profile'}</Text>
        <Button
          title={'Ir al home'}
          onPress={this.handlePress}
        />
        <Button
          title={'Cambiar nombre'}
          onPress={this.setParams}
        />
        <Name />
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

export default Profile;
