import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { FontSize, iconSizes, spacing } from '../constants/dimensions'
import { GotoNextButton, GotoPreviousButton, PlayPauseButtton } from './PlayearControls'

const imageUrl="https://linkstorage.linkfire.com/medialinks/images/ebb8cde3-1f3b-4b3a-bbf5-e4a1c131da1e/artwork-440x440.jpg"
const FloatingPlayear = () => {
  return (
    <TouchableOpacity style={styles.Container} activeOpacity={0.85}>
          
      <Image source={{ uri: imageUrl }} style={styles.coverImage} />
     
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Mortals x </Text>
          <Text style={styles.artist}>Egzod,Neoni, </Text>
      </View>
      <View style={styles.PlayearControlContainer}>
        <GotoPreviousButton  />
        <PlayPauseButtton />
        <GotoNextButton/>
      </View>
    </TouchableOpacity>
  )
}
export default FloatingPlayear

const styles = StyleSheet.create({
    coverImage:{
        width:60,
        height:60,
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
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingRight:spacing.lg
  }
})