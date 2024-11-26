import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { iconSizes, spacing } from '../constants/dimensions'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


const LikeScreen = () => {
  return (
      <View style={styles.container}>
          <View style={styles.headerContainer}> 
              <TouchableOpacity>
                  <AntDesign name={"arrowleft"} color={colors.iconPrimary}
                  size={iconSizes.md}
                  />
              </TouchableOpacity> 
              <TouchableOpacity>
                  <SimpleLineIcons name={"equalizer"} color={colors.iconPrimary}
                    size={iconSizes.md}
                  />

              </TouchableOpacity>
          </View>
    </View>
  )
}

export default LikeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.background
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing.md,
        paddingHorizontal:spacing.md
    }
})