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

var styles = require('./Styles');
var DayWeather = require('../dayweather/DayWeather');

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

  static navigationOptions = ({ navigation, screenProps }) => ({
      title: screenProps.city,
      headerTintColor: '#FFFFFF',
      headerStyle: { backgroundColor: '#3F51B5'},
    });

  constructor(props) {
    super(props);
    // console.log("CityWeather.props");
    // console.log(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      city: this.props.screenProps.city,
      isLoading: false,
      message: '',
      dataSource: ds.cloneWithRows([]),
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
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.date !== r2.date});
    this.setState({
      isLoading: false,
      message: 'Select a day:',
      dataSource: dataSource.cloneWithRows(response.data.weather),
    });
  }

  _onDateSelect(rowData) {
    const { navigate } = this.props.navigation;
    navigate('DayWeather', { data: rowData });
  }

  renderRow(rowData, sectionID, rowID) {
    var icon = rowData.weatherIconUrl ?
    (<Image style={styles.thumb} source={{ uri: rowData.weatherIconUrl[0].value }} />) :
    (<View/>);
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
    var spinner = this.state.isLoading ?
    (<View style={styles.loaderContainer}>
      <ActivityIndicator size='large'/>
    </View>) :
    (<View/>);

    var weatherlist = this.state.isLoading ?
    (<View/>) :
    (<ListView
        enableEmptySections={true}
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
