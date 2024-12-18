import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import LikeScreen from '../screen/LikeScreen';
import PlayerScreen from '../screen/PlayerScreen';



const StackNavigation = () => {

    const Stack =createNativeStackNavigator()
    
  return (
     <Stack.Navigator screenOptions={{
        headerShown:false
        }}
        initialRouteName='LIKE_SCREEN'>
      <Stack.Screen name='HOME_SCREEN' component={HomeScreen}/>
      <Stack.Screen name='LIKE_SCREEN' component={LikeScreen}/>
      <Stack.Screen name='PLAYER_SCREEN' component={PlayerScreen}/>


      </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({
  new: {
    height: 10,
    width: 20,
    borderBlockColor:"red"
  },
  new: {
    height: 10,
    margin:2
  }
})