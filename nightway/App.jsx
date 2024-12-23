import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import { StyleSheet } from 'react-native';
import LikeScreen from './src/screen/LikeScreen';
import PlayearScreen from './src/screen/PlayerScreen';
import StackNavigation from './src/navigation/StackNavigation';


const Stack =createNativeStackNavigator()
const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
   <StackNavigation/>
      </NavigationContainer>
      </GestureHandlerRootView>
  )
}

export default App
const style = StyleSheet.create({
  new: {
    height: 20, 
    width: 30,
    borderBlockColor: 10,
    padding: 2,
    marginTop:2
  }      
})





 