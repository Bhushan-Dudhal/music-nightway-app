import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { FontSize, spacing } from '../constants/dimensions'


const imageUrl="https://linkstorage.linkfire.com/medialinks/images/300f46c8-b0a0-4cea-a953-1e47342da5ca/artwork-440x440.jpg"
const SongCard = () => {
  return (
 <TouchableOpacity style={styles.container}>
          <Image source={{ uri: imageUrl }} style={styles.coverImage} />
          <Text style={styles.title}>Faster</Text>
          <Text style={styles.artist}>Progressive House</Text>
          </TouchableOpacity>
  )
}


export default SongCard

const styles = StyleSheet.create({
    container: {
        height: 330,
        width:250
      
    },
    coverImage: {
        height: 250,
        width: 250,
        borderRadius:15
         
    },
    title: {
        color: colors.textPrimary,
        fontWeight: "400",
        textAlign: "center",
        fontSize: FontSize.lg,
        paddingVertical:spacing.sm
        
    },
    artist: {
        color: colors.textSecondary,
        textAlign: 'center',
        fontSize:FontSize.md
        
    }
})