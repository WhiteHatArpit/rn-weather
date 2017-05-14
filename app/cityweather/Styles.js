import {
  StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 150
  },
  message: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginLeft: 10
  },
  temp: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3F51B5'
  },
  date: {
    fontSize: 20,
    color: '#000000'
  },
  chevron: {
    fontSize: 36,
    color: '#AAAAAA',
    marginRight: 10
  }
});

module.exports = styles;
