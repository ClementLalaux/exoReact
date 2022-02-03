import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './src/Components/Pages/Home/Home';
import Liste from '../src/Components/Pages/Liste/Liste';
import Ajout from '../src/Components/Pages/Ajout/Ajout';

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Liste" component={Liste} />
        <Stack.Screen name="Ajout" component={Ajout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;