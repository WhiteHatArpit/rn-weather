'use strict';

import React, { Component } from 'react'
import {
  Image,
  Text,
  ScrollView,
  View
} from 'react-native';
import Moment from 'moment';

var styles = require('./Styles');
var ItemDetail = require('./ItemDetail');

class DayWeather extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${Moment(navigation.state.params.data.date, 'YYYY-MM-DD').format('DD MMM')}`,
    headerTintColor: '#FFFFFF',
    headerStyle: { backgroundColor: '#3F51B5', elevation: 0 }
  });

  constructor(props) {
    super(props);
    // console.log("DayWeather.props");
    // console.log(props);
}

  render() {
    const { params } = this.props.navigation.state;
    const data = params.data;
    var icon = data.weatherIconUrl ?
    (<Image style={styles.thumb} source={{ uri: data.weatherIconUrl[0].value }} />) :
    (<View/>);
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.headContainer}>
            <View style={{flex: 1}}>
              <Text style={styles.headText}>{data.tempMinC}&#8451; - {data.tempMaxC}&#8451;</Text>
              <Text style={styles.descText}>{data.weatherDesc[0].value}</Text>
            </View>
            {icon}
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Wind:</Text>
            <ItemDetail label='Speed (kmph)' value={data.windspeedKmph}/>
            <ItemDetail label='Direction' value={data.winddirection}/>
            <ItemDetail label='Dir Degree' value={data.winddirDegree}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

module.exports = DayWeather;
