import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors } from '../constants/colors'



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.hedingText}>Recommended for your</Text>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex:1
  },
  hedingText: {
    fontSize: 25,
    color:colors.textPrimary
  }
  
})