// index.js
import 'react-native-gesture-handler';
import React, {Component} from "react"
import "react-native-gesture-handler"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { NavigationContainer } from '@react-navigation/native';

import Screen1 from "./screens/Screen1"
import Screen2 from "./screens/Screen2"

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer> 
        <Stack.Navigator> 

          <Stack.Screen
            name="Home"
            component={Screen1}
          /> 
          <Stack.Screen
            name="About"
            component={Screen2}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



const styles = StyleSheet.create({
  container: {
     backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;


