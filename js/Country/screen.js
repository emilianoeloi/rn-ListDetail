import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight
} from 'react-native';

import styles from './styles';

class CountryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.country.name,
  });
  render() {
    const { params } = this.props.navigation.state;
    const { country } = params;
    const photoURI = `https://bodega-a35c0.firebaseapp.com/${country.key}/points/${country.pointsOfInterest[0].photo}`;
    const featured = (
      <Image
        style={styles.featured}
        source={{
          uri: photoURI
        }}
      />
    )
    const json = JSON.stringify(country);
    return (
      <View style={styles.container}>
        {featured}
        <Text>
          {json}
        </Text>
      </View>
    );
  }
}

export default CountryScreen;