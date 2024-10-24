import { Image, StyleSheet, Text, View, } from 'react-native'
import React from 'react'


const imageUrl="https://linkstorage.linkfire.com/medialinks/images/300f46c8-b0a0-4cea-a953-1e47342da5ca/artwork-440x440.jpg"
const SongCard = () => {
  return (
      <View style={styles.container}>
          <Image source={{ uri: imageUrl }} style={styles.coverImage} />
          <Text>Faster</Text>
          <Text>Progressive House</Text>
    </View>
  )
}


export default SongCard

const styles = StyleSheet.create({
    container: {
        height:250
    },
    coverImage: {
        height: 250,
        width: 250,
        borderRadius:10
         
    }
})