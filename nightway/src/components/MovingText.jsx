import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { getAnimatedStyle, useAnimatedStyle } from 'react-native-reanimated'

const MovingText = () => {
  const animatedStyle = useAnimatedStyle(() => {
                                                                            
  })
  return (
    <Animated.Text numberOfLines={1} style={[animatedStyle]
    }>
      <Text style={styles.text}>text</Text>
      <Text style={styles.text7}>text</Text>

    </Animated.Text>
  )
}

export default MovingText

const styles = StyleSheet.create({
  text7: {
   
  },

})