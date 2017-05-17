import {
  StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3F51B5',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headText: {
    fontSize: 16,
    color: '#FFFFFF'
  },
  descText: {
    fontSize: 24,
    color: '#FFFFFF',
    marginRight: 20
  },
  thumb: {
    width: 80,
    height: 80
  },
  detailsContainer: {
    flex: 3,
    backgroundColor: '#FFFFFF',
    padding: 20
  },
  detailsText: {
    fontSize: 16,
    color: '#3F51B5',
    marginBottom: 8
  },
  itemDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    marginBottom: 8,
    paddingRight: 100
  },
  itemDetailsText: {
    fontSize: 18,
    color: '#000000',
  },
});

module.exports = styles;
