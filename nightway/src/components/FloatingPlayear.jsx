import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const imageUrl="https://linkstorage.linkfire.com/medialinks/images/ebb8cde3-1f3b-4b3a-bbf5-e4a1c131da1e/artwork-440x440.jpg"
const FloatingPlayear = () => {
  return (
    <View style={styles.Container}>
          
      <Image source={{ uri: imageUrl }} style={styles.coverImage} />
      <View>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Mortals x Royalty Mashup</Text>
          <Text>Egzod, Neoni, Maestro Chives, Warriyo</Text>
          </View>
      </View>
    </View>
  )
}
export default FloatingPlayear

const styles = StyleSheet.create({
    coverImage:{
        width:70,
        height:70,
    },
    Container: {
      flexDirection:"row"
    },
    titleContainer: {
      flex:1
    },
  title: {
    fontSize: 14,
    color: colors.textPrimary,
    
  },
})