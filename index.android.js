// @flow

// react-native run-android
// adb reverse tcp:8081 tcp:8081

'use strict';

import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

var CityWeather = require('./app/cityweather/CityWeather');
var DayWeather = require('./app/dayweather/DayWeather');

const App = StackNavigator({
  CityWeather: { screen: CityWeather },
  DayWeather: { screen: DayWeather },
});

AppRegistry.registerComponent('CityWeather', () => App);
