import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { FontSize, spacing } from '../constants/dimensions'
import { GotoPreviousButton } from './PlayearControls'

const imageUrl="https://linkstorage.linkfire.com/medialinks/images/ebb8cde3-1f3b-4b3a-bbf5-e4a1c131da1e/artwork-440x440.jpg"
const FloatingPlayear = () => {
  return (
    <View style={styles.Container}>
          
      <Image source={{ uri: imageUrl }} style={styles.coverImage} />
     
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Mortals x </Text>
          <Text style={styles.artist}>Egzod,Neoni, </Text>
      </View>
      <View style={styles.PlayearControlContainer}>
        <GotoPreviousButton/>
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
      flexDirection: "row",
      alignItems:"center"
      
    },
    titleContainer: {
      flex: 1,
      paddingHorizontal: spacing.sm,
      // marginVertical:10
    },
  title: {
    fontSize: FontSize.lg,
    color: colors.textPrimary,
    fontWeight:"400"
    
  },
  artist: {
    // fontSize: FontSize.sm,
    color:colors.textSecondary,
  },
  PlayearControlContainer:{
    
  }
})