import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {
  Card,
  CardItem,
  Container,
  Content,
  Body,
  Header,
  Left,
  Button,
  Title,
  Right,
  Icon,
} from 'native-base';

import {
  theme,
} from  '../styles';

import styles from './styles';

class CountryScreen extends Component {
  render() {
    const {goBack} = this.props.navigation;
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
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={() => goBack()} />
            </Button>
          </Left>
          <Body>
            <Title>{country.name}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Text>
                Geography
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {country.geography}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default CountryScreen;
