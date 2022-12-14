import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from "react-redux";
import { store } from './store';

import BasketScreen from './screens/BasketScreen';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} />
          <Stack.Screen
            name='Basket'
            component={BasketScreen}
            options={{
              presentation: 'transparentModal',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='PreparingOrderScreen'
            component={PreparingOrderScreen}
            options={{
              presentation: 'fullScreenModal',
              headerShown: false
            }}
          />

          <Stack.Screen
            name='Delivery'
            component={DeliveryScreen}
            options={{
              presentation: 'fullScreenModal',
              headerShown: false
            }}
          /> 
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}