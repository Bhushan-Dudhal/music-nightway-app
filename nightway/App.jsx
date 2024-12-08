import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import { StyleSheet } from 'react-native';
import LikeScreen from './src/screen/LikeScreen';
import PlayearScreen from './src/screen/PlayerScreen';


const Stack =createNativeStackNavigator()
const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
        }}
        initialRouteName='PLAYER_SCREEN'>
      <Stack.Screen name='HOME_SCREEN' component={HomeScreen}/>
      <Stack.Screen name='LIKE_SCREEN' component={LikeScreen}/>
      <Stack.Screen name='PLAYER_SCREEN' component={PlayearScreen}/>


      </Stack.Navigator>
      </NavigationContainer>
      </GestureHandlerRootView>
  )
}

export default App
const style = StyleSheet.create({
        
})





 