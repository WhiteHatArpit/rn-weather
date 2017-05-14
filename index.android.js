// @flow

// react-native run-android
// adb reverse tcp:8081 tcp:8081

'use strict';

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './app/Screens';

registerScreens();

const navigatorStyle = {
	statusBarColor: '#1A237E',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#3F51B5',
	navBarTextColor: '#FFFFFF',
  navBarButtonColor: '#FFFFFF'
};

Navigation.startSingleScreenApp({
	screen: {
		screen: 'CityWeather',
		title: 'Bangalore',
		navigatorStyle: navigatorStyle,
    leftButtons: [
			{
				id: 'back'
			}
		]
	}
});
