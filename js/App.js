import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';

import InViewPort from './inViewPort';
import styles from './styles';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      version: '1.0.0',
      name: 'ListDetail',
    };
    this.checkVisibility = this.checkVisibility.bind(this);
  }
  checkVisibility(id, isVisible) {
    console.info('checkVisibility [' + id + '][' + isVisible + ']');
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
            {key: 'row4'},
            {key: 'row5'},
            {key: 'row6'},
            {key: 'row7'},
            {key: 'row8'},
            {key: 'row9'},
            {key: 'row10'},
            {key: 'row11'},
            {key: 'row12'},
            {key: 'row13'},
            {key: 'row14'},
            {key: 'row15'},
            {key: 'row16'},
            {key: 'row17'},
            {key: 'row18'},
          ]}
          renderItem={({item}) => (
            <InViewPort
              id='item'
              onChange={this.checkVisibility}
            >
              <Text style={styles.item}>Value: {item.key}</Text>
            </InViewPort>
          )}
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
