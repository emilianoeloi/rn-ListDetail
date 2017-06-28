import React, {
  Component,
} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableHighlight
} from 'react-native';
import {
  Thumbnail,
  Body,
  Container,
  Content,
  List,
  ListItem,
  Text,
} from 'native-base';
import { StackNavigator } from 'react-navigation';

import CountryScreen from '../Country/screen';

import styles from './styles';

let ODD = true;

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      version: '1.0.0',
      name: 'ListDetail',
      countryList: [],
    };
    this.loadCountries = this.loadCountries.bind(this);
  }
  static navigationOptions = {
    title: 'South America',
  };
  loadCountries(error) {
    fetch('https://us-central1-bodega-a35c0.cloudfunctions.net/southAmerica?_=003')
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
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Content>
          <List
            dataArray={this.state.countryList}
            renderRow={(item) => (
              <ListItem onPress={() => {
                navigate('Country', {
                  country: item,
                });
              }}>
                <Thumbnail square size={80} source={{uri: item.flagUri}} />
                <Body>
                  <Text>{item.key}</Text>
                  <Text>{item.name}</Text>
                  <Text note>{item.capital}</Text>
                </Body>
              </ListItem>
            )}
          >
          </List>
        </Content>
      </Container>
    );

  }
}

export default HomeScreen;
