import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { FontSize, iconSizes, spacing } from '../constants/dimensions'
import { GotoNextButton, GotoPreviousButton, PlayPauseButtton } from './PlayearControls'
import MovingText from './MovingText';
import { useRoute,useNavigation } from '@react-navigation/native';

const imageUrl="https://linkstorage.linkfire.com/medialinks/images/ebb8cde3-1f3b-4b3a-bbf5-e4a1c131da1e/artwork-440x440.jpg"
const FloatingPlayear = () => {

  const navigation = useNavigation();

  const progress = useSharedValue(0.2);
  const min = useSharedValue(0);
  const max = useSharedValue(1);

  const handleOpenPlayerScreen = () => {
   navigation.navigate("PLAYER_SCREEN")
 }
  return (

   
    <View>
      <View style={{
        zIndex:1,
      }}>
         <Slider
      style={styles.SliderContainer}
      progress={progress}
      minimumValue={min}
      maximumValue={max}
        theme={{
    maximumTrackTintColor:colors.MaximumTintColor,
    minimumTrackTintColor: colors.minimumTintColor,
    
          }} 
          containerStyle={{}}
          renderBubble={() => <View />}
         
        
        />
      </View>
      <TouchableOpacity style={styles.Container} activeOpacity={0.85}
      onPress={handleOpenPlayerScreen}
      >
          
      <Image source={{ uri: imageUrl }} style={styles.coverImage} />
     
        <View style={styles.titleContainer}>
          <MovingText text={"chaff and Dust Alan Walker "} style={styles.title}
          animationThreshold={20}
          />
        {/* <Text style={styles.title}>Mortals x </Text> */}
          <Text style={styles.artist}>Egzod,Neoni, </Text>
      </View>
      <View style={styles.PlayearControlContainer}>
        <GotoPreviousButton  />
        <PlayPauseButtton />
        <GotoNextButton/>
      </View>
    </TouchableOpacity>
 </View>
  )
}
export default FloatingPlayear

const styles = StyleSheet.create({
    coverImage:{
        width:60,
    height: 60,
        resizeMode:"cover"
    },
    Container: {
      flexDirection: "row",
      alignItems:"center"
      
    },
    titleContainer: {
      flex: 1,
      paddingHorizontal: spacing.sm,
      overflow: "hidden",
      marginLeft: spacing.sm,
      marginRight:spacing.lg
     
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
  },
  new: {
    width: 10,
    height:20
  }
  

  })