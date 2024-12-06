import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlayerProgressBar = () => {
  return (
      <View>
          <View style={styles.timeRow}>
              <Text style={styles.timeText}>
                  00:50
              </Text>  
          </View>
    </View>
  )
}

export default PlayerProgressBar

const styles = StyleSheet.create({
  container: {
       
     } 
})