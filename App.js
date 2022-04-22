import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './src/layout/Menu';
import MostraClima from './src/layout/MostraClima';
import Sobre from './src/layout/Sobre';


const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Menu'
      >
        <Stack.Screen
          name='Menu'
          component={Menu}
          options={{headerShown:false}}
        />
        
        <Stack.Screen
          name='MostraClima'
          component={MostraClima}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name='Sobre'
          component={Sobre}
          options={{headerShown:false}}
        />


      </Stack.Navigator>


    </NavigationContainer>
  );
}

export default App;