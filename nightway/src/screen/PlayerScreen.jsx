import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { iconSizes } from '../constants/dimensions'


const PlayearScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <TouchableOpacity>
 <AntDesign name={"arrowleft"} color={colors.iconPrimary} 
                  size={iconSizes.md}/>
        </TouchableOpacity>
   </View>
    </View>
  )
}

export default PlayearScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: 2,
    width: 2,
    direction: 'inherit',
    width: 1,
    margin:1
    
  }
})