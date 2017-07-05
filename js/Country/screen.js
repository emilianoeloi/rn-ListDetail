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
  Linking,
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
  Thumbnail,
} from 'native-base';

import {
  theme,
} from  '../styles';

import styles from './styles';

class CountryScreen extends Component {
  render() {
    const { goBack } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const { country } = params;
    const photoURI = `https://bodega-a35c0.firebaseapp.com/${country.key}/points/${country.pointsOfInterest[0].photo}`;
    const flagURI = `https://bodega-a35c0.firebaseapp.com/${country.key}/flag/${country.flag}`;
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
    console.info('this.flagURI', flagURI);
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
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:flagURI}} />
                <Body>
                  <Text>{country.pointsOfInterest[0].name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: photoURI}} style={{resizeMode: 'contain', height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent onPress={() => {
                  Linking.openURL(country.pointsOfInterest[0].moreUrl)
                }}>
                  <Icon active name="navigate" />
                  <Text>Saiba Mais</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default CountryScreen;
