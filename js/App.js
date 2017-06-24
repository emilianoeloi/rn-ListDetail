import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';

import InViewPort from './inViewPort';
import styles from './styles';

let ODD = true;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      version: '1.0.0',
      name: 'ListDetail',
      countryList: [],
    };
    this.checkVisibility = this.checkVisibility.bind(this);
    this.loadCountries = this.loadCountries.bind(this);
  }
  checkVisibility(id, isVisible) {
    console.info('checkVisibility [' + id + '][' + isVisible + ']');
  }
  loadCountries(error) {
    fetch('https://us-central1-bodega-a35c0.cloudfunctions.net/southAmerica?_=002')
      .then((response) => response.json())
      .then((responseJson) => {
        const list = responseJson.map((country) => {
          const o = ODD;
          ODD = !ODD;
          const flagUri = `https://bodega-a35c0.firebaseapp.com/${country.key}/flag/${country.flag}`;
          return {
            ...country,
            odd: o,
            flagUri
          };
        });
        this.setState({
          countryList: list
        });
      })
      .catch((error) => error(error));
  }
  render() {
    this.loadCountries((e) => {
      console.log('loadCountries', 'error', e)
    });
    return (
      <View
        style={styles.container}
      >
        <FlatList
          data={this.state.countryList}
          renderItem={({item}) => (
            <View style={[styles.item, item.odd ? styles.odd : null]}>
              <View style={[styles.box, styles.keyBox, styles.relative]}>
                <Image
                  style={[styles.keyFlag, styles.absolute]}
                  source={{uri: item.flagUri}}
                />
                <View style={styles.absolute}>
                  <Text style={styles.keyText}>{item.key}</Text>
                </View>
              </View>
              <View style={[styles.box, styles.dataBox]}>
                <View style={styles.names}>
                  <Text style={styles.namesText}>{item.name}</Text>
                </View>
                <View style={styles.names}>
                  <Text style={styles.namesText}>{item.capital}</Text>
                </View>
              </View>
            </View>
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
