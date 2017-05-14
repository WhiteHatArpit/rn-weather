/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import CityWeather from './cityweather/CityWeather';
import DayWeather from './dayweather/DayWeather';

export function registerScreens() {
	Navigation.registerComponent('CityWeather', () => CityWeather);
	Navigation.registerComponent('DayWeather', () => DayWeather);
}
