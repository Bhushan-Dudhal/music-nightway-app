import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { FontSize, spacing } from '../constants/dimensions'

import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';


const PlayerProgressBar = () => {

//   const progress = useSharedValue(0.7);
//   const min = useSharedValue(0);
//   const max = useSharedValue(1);
  return (
      <View>
          <View style={styles.timeRow}>
              <Text style={styles.timeText}>00:50</Text>  
        <Text style={styles.timeText}>{"-" }04:0</Text>  

      </View> 
    </View>
  )
}



export default PlayerProgressBar

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop:spacing.sm
    
  },
  timeText: {
    fontSize: FontSize.md,
    color:colors.textPrimary,
    opacity:0.75,
  },
  sliderContainer: {
    marginVertical: spacing.xl,
   
   
  }
})