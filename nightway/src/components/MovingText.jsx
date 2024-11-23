import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { getAnimatedStyle, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const MovingText = ({}) => {
  const translateX=useSharedValue(0)
  const animatedStyle = useAnimatedStyle(() => {
    return {
        transform:[{translateX:translateX.value}],
      }                                                                      
  })
  return (
    <Animated.Text numberOfLines={1} style={[animatedStyle]
    }>
      <Text style={styles.text}>text</Text>
      
    </Animated.Text>
  )
}

export default MovingText

const styles = StyleSheet.create({

})

