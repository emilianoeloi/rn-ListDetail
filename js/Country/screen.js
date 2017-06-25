import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import {
  theme,
} from  '../styles';

import styles from './styles';

class CountryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.country.name,
  });
  render() {
    const { params } = this.props.navigation.state;
    const { country } = params;
    const photoURI = `https://bodega-a35c0.firebaseapp.com/${country.key}/points/${country.pointsOfInterest[0].photo}`;
    const theme = {
      backgroundColor: country.colors[0],
    };
    const featured = (
      <View style={[styles.cover, styles.relative]}>
        <View style={[styles.coverPlaceholder, styles.absolute, theme]} />
        <Image
          resizeMode='contain'
          style={[styles.coverImage, styles.absolute]}
          source={{
            uri: photoURI
          }}
        />
      </View>
    )
    const json = JSON.stringify(country);
    return (
      <ScrollView>
        <View style={styles.container}>
          {featured}
          <Text>
            {json}
          </Text>
          {featured}
        </View>
      </ScrollView>
    );
  }
}

export default CountryScreen;
