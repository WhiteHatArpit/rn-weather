// @flow

// react-native run-android
// adb reverse tcp:8081 tcp:8081

'use strict';

import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import CityWeather from './app/cityweather/CityWeather';
import DayWeather from './app/dayweather/DayWeather';

const Foo = StackNavigator({
	CityWeather: { screen: CityWeather },
	DayWeather: { screen: DayWeather },
});

class App extends React.Component {
   render() {
     return <Foo screenProps={{ city: this.props.city_name }} />
  }
}

AppRegistry.registerComponent('CityWeather', () => App);
