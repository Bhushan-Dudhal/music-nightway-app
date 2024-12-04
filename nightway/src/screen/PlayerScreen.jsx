import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

import { FontSize, iconSizes, spacing } from '../constants/dimensions'
import { FlatList } from 'react-native-gesture-handler'


const PlayerScreen = () => {
  const imageUrl = "https://linkstorage.linkfire.com/medialinks/images/5f280916-1b8a-4bae-b323-1e04f06c8e01/artwork-440x440.jpg"
  
  const isLiked = false
  const isMute = true
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <AntDesign name="arrowleft"  color={colors.iconPrimary}
      size={iconSizes.md}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Playing Now</Text>

      </View>
      <View style={styles.coverImageContainer}>
      <Image source={{uri:imageUrl}} style={styles.coverImage} />
      </View>

      <View style={styles.titleRowHeartContainer}>
      <View style={styles.titleContainer}>
              <Text style={styles.title}>Believer </Text>
              <Text style={styles.artist}>IMAGINE DRAGON </Text>
        </View>
        <TouchableOpacity>
          <AntDesign name={isLiked?"heart":"hearto"} color={colors.iconSecondary} size={iconSizes.md}/>
        </TouchableOpacity>
      </View>

      <View style={styles.playerControlContainer}>
        <TouchableOpacity>
          <Feather name={isMute?"volume-2":"volume-x"} color={colors.iconSecondary} size={iconSizes.lg}/>
        </TouchableOpacity>

        <View>

          <TouchableOpacity style={styles.playPauseButton}>

          </TouchableOpacity>
          
        </View>

      </View>
       
      </View>
  )
}

export default PlayerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding:spacing.lg
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width:"100%"
  },
  headerText: {
    fontSize: FontSize.lg,
    color: colors.textPrimary,
   
    fontWeight: "400",
    flex: 1,
    textAlign:"center"
  },
  coverImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical:spacing.xl
  },
  coverImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    
  },
  title: {
    fontSize: FontSize.xl,
    color: colors.textPrimary,
    fontWeight:"500"
    
  },
  artist: {
    fontSize: FontSize.md,
    color:colors.textSecondary

  },
  titleRowHeartContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    
    justifyContent:"center"
  }
  
})