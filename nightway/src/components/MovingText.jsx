import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { getAnimatedStyle, useAnimatedStyle } from 'react-native-reanimated'

const MovingText = () => {
  const animatedStyle = useAnimatedStyle(() => {
    return (
      
    )
  })
  return (
    <Animated.Text numberOfLines={1} style={[animatedStyle]
    }>
      <Text>text</Text>
      <Text>text</Text>

    </Animated.Text>
  )
}

export default MovingText

const styles = StyleSheet.create({})