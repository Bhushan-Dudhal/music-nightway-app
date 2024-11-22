import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongCard from './SongCard'
import { FontSize, spacing } from '../constants/dimensions'
import { colors } from '../constants/colors'

const SongCardWithCategory = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.hedingText}>Recommended for your </Text>
      <FlatList data={[1, 2, 3, 4, 5]}
       renderItem={SongCard} horizontal={true}
        ItemSeparatorComponent={<View style={{ marginHorizontal: spacing.sm }} />}
        contentContainerStyle={{
          paddingHorizontal:spacing.lg
        }}
      />

    </View>
  )
}

export default SongCardWithCategory

const styles = StyleSheet.create({
    container: {
      flex:1
  },
  hedingText: {
    fontSize: FontSize.xl,
    color: colors.textPrimary,
    fontFamily: "Gilroy-Light",
    fontWeight: "900",
    marginVertical: spacing.lg,
    paddingHorizontal:spacing.lg
  },
  
     
})