'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

var styles = require('./Styles');

class ItemDetail extends Component {
  render() {
    return (
      <View style={styles.itemDetailsContainer}>
        <Text style={styles.itemDetailsText}>{this.props.label}</Text>
        <Text style={styles.itemDetailsText}>{this.props.value}</Text>
      </View>
    );
  }
}

module.exports = ItemDetail;
