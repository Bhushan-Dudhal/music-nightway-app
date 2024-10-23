import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import FontAwesome from "react-native-vector-icons/Ionicons"
import { iconSizes, spacing } from '../constants/dimensions'

const HomeScreen = () => {
  return (
      <View style={styles.container}>
          <View  style={styles.header}>

          <TouchableOpacity>
         <FontAwesome name={"menu" } color={colors.iconPrimary} size={iconSizes.lg} />
        </TouchableOpacity>
          <TouchableOpacity>
         <FontAwesome name={"search" } color={colors.iconPrimary} size={iconSizes.lg} />
              </TouchableOpacity>
            </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex:1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: spacing.md,
        paddingHorizontal:spacing.lg,
    }
})