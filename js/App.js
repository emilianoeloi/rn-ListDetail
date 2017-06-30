import { StackNavigator } from 'react-navigation';

import HomeScreen from './Home/screen';
import CountryScreen from './Country/screen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Country: { screen: CountryScreen },
}, {
    // see next line
    headerMode: 'none',
});

export default App;
