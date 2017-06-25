import {
  StyleSheet,
} from 'react-native';

import {
  commonStyles,
  theme,
} from '../styles';

const styles = StyleSheet.create({
  ...commonStyles,
  cover: {
    width: 320,
    height: 200,
  },
  coverPlaceholder: {
    width: 320,
    height: 200,
    backgroundColor: theme.primaryColor,
  },
  coverImage: {
    width: 320,
    height: 200,
  }
});

export default styles;
