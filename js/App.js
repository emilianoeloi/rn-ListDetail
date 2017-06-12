import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';

import styles from './styles';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      version: '1.0.0',
      name: 'ListDetail',
    };
  }
  render() {
    return (
      <View
        style={styles.container}
      >
        <FlatList
          data={[
            {key: 'row1'},
            {key: 'row2'},
            {key: 'row3'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>Value: {item.key}</Text>}
        />
        <Text
          style={styles.appVersion}
        >
          {this.state.version}
        </Text>
      </View>
    );
  }
}

export default App;
