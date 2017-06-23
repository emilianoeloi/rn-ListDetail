import {
  StyleSheet,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    padding: 5,
  },
  keyBox: {
    width: 120,
  },
  dataBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  names: {
  },
  namesText: {
    fontSize: 20,
  },
  keyText: {
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 50,
  },
  appVersion: {
    color: 'red',
  },
  odd: {
    backgroundColor: '#f1f1f1',
  }
});

export default styles;
