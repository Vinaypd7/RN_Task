import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={{flex:1}}>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}

export function Navigation() {
  return (
 
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen  name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}


