import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
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
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name='main' component={Form}/>
          <Stack.Screen name='historico' component={PageHist}/>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
)}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
  },
});
