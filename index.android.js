// @flow

// react-native run-android
// adb reverse tcp:8081 tcp:8081

'use strict';

import React from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

var CityWeather = require('./app/cityweather/CityWeather');
// var DayWeather = require('./app/dayweather/DayWeather');

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy'})}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

const App = StackNavigator({
  CityWeather: { screen: CityWeather }
  // DayWeather: { screen: DayWeather },
});

AppRegistry.registerComponent('CityWeather', () => App);
