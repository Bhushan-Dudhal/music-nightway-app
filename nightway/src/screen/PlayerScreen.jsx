import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { iconSizes } from '../constants/dimensions'


const PlayerScreen = () => {
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
    </View>
  )
}

export default PlayerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background
  },
  headerContainer: {
    flexBasis:"row"
  },
  headerText: {
    fontSize: 18,
    color:colors.textPrimary
  }
})