'use strict';

import React, { Component } from 'react'
import {
  ActivityIndicator,
  Image,
  ListView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

// var DayWeather = require('../dayweather/DayWeather');
var styles = require('./Styles');

function urlForQueryAndPage(city: string, page: number) {
  var data = {
      q: city,
      format: 'json',
      num_of_days: '5',
      key: '329c87ezzdxyx73v8wahx9cm',
  };

  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'http://api.worldweatheronline.com/free/v1/weather.ashx?' + querystring;
};

class CityWeather extends Component {

  static navigationOptions = {
    title: 'Bangalore',
  };

  constructor(props) {
    super(props);
    console.log("CityWeather.props");
    console.log(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      city: 'Bangalore',
      isLoading: false,
      message: '',
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  componentDidMount() {
    this._getDataFromServer(this.state.city, '0');
  }

  _getDataFromServer(city, page) {
    this.setState({
      isLoading: true,
      message: 'Please wait...',
    });

    var query = urlForQueryAndPage(city, page);
    fetch(query)
    .then(response => {
      return response.json();
    })
    .then(json => {
      this._handleResponse(json);
    })
    .catch(error => {
      this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error,
      })
    });
  }

  _handleResponse(response) {
    // console.log(response.data.weather);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.date !== r2.date});
    this.setState({
      isLoading: false,
      message: 'Select a day:',
      dataSource: dataSource.cloneWithRows(response.data.weather),
    });
  }

  _onDateSelect(rowData) {
    console.log(rowData.date);
  }

  renderRow(rowData, sectionID, rowID) {
    var icon = rowData.weatherIconUrl ?
    (<Image style={styles.thumb} source={{ uri: rowData.weatherIconUrl[0].value }} />) :
    (<View/>);
    console.log(rowData.weatherIconUrl);
    return (
      <TouchableHighlight
          onPress={() => this._onDateSelect(rowData)}
          underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            {icon}
            <View  style={styles.textContainer}>
              <Text style={styles.temp}>{rowData.tempMinC}&#8451; - {rowData.tempMaxC}&#8451;</Text>
              <Text style={styles.date}>{rowData.date}</Text>
            </View>
            <Text style={styles.chevron}>></Text>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    console.log('CityWeather.render');

    var spinner = this.state.isLoading ?
    (<ActivityIndicator size='large'/>) :
    (<View/>);

    var weatherlist = this.state.isLoading ?
    (<View/>) :
    (<ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.message}>{this.state.message}</Text>
        {spinner}
        {weatherlist}
      </View>
    );
  }
}

module.exports = CityWeather;
