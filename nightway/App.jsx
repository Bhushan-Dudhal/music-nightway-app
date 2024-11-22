import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import { StyleSheet } from 'react-native';


const Stack =createNativeStackNavigator()
const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
 <Stack.Screen name='home' component={HomeScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
      </GestureHandlerRootView>
  )
}

export default App
const style = StyleSheet.create({
  
})



