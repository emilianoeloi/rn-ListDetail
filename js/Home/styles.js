import {
  StyleSheet,
} from 'react-native';

import {
  theme,
  commonStyles,
} from '../styles';

const styles = StyleSheet.create({
  ...commonStyles,
  item: {
    flex: 1,
    flexDirection: 'row',
    height: 120
  },
  box: {
    padding: 0,
  },
  keyFlag: {
    width: 120,
    height: 120,
    opacity: 0.3
  },
  keyBox: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataBox: {
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  names: {
  },
  namesText: {
    fontSize: 24,
  },
  keyText: {
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 60,
    color: '#a1a1a1',
    backgroundColor: 'rgba(1,1,1,0.0)'
  },
  appVersion: {
    color: 'red',
  },
  odd: {
    backgroundColor: '#f1f1f1',
  },
});

export default styles;
