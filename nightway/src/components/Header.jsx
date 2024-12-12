import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from "react-native-vector-icons/Ionicons"
import { iconSizes, spacing } from '../constants/dimensions'
import { colors } from '../constants/colors'

const Header = () => {
  return (
  
          <View  style={styles.header}>

          <TouchableOpacity>
         <FontAwesome name={"menu" } color={colors.iconPrimary} size={iconSizes.md} />
        </TouchableOpacity>
          <TouchableOpacity>
         <FontAwesome name={"search" } color={colors.iconPrimary} size={iconSizes.md} />
              </TouchableOpacity>
            </View>

    
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: spacing.sm,
    paddingHorizontal: spacing.lg,
    height:2
    
        
  },
 
  
})