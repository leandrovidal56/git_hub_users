import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../pages/Splash';
import Home from '../pages/Home';

const Open = createStackNavigator();

const OpenRoutes: React.FC = () => (
  <Open.Navigator
    initialRouteName="Homes"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Open.Screen name="Splash" component={Splash} />
    <Open.Screen name="Homes" component={Home} />
  </Open.Navigator>
);

export default OpenRoutes;
