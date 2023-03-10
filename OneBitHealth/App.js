import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Title from './src/components/title';
import Form from './src/components/main/form';
import ResultImc from './src/components/main/resultimc';
import PageHist from './src/components/pages/pagehist';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Calculadora de IMC' component={Form} options={{title: '', headerShown: false}}/>
          <Stack.Screen name='Historico' component={PageHist}/>
        </Stack.Navigator>
    </NavigationContainer>
)}
