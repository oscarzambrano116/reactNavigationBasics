import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { withNavigation } from 'react-navigation';

function Name(props) {
  const { navigation } = props;

  return(
    <View>
      <Text>{navigation.getParam('name')}</Text>
    </View>
  );
}

export default withNavigation(Name);
