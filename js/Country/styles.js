import {
  StyleSheet,
} from 'react-native';

import commonStyles from '../styles';

const styles = StyleSheet.create({
  ...commonStyles,
  cover: {
    width: 320,
    height: 200,
  },
  coverPlaceholder: {
    width: 320,
    height: 200,
    backgroundColor: 'green',
  },
  coverImage: {
    width: 320,
    height: 200,
  }
});

export default styles;
