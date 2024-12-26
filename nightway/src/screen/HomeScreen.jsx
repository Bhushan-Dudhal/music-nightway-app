import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors } from '../constants/colors'
// import { fontsFamilies } from '../constants/fonts'
import { FontSize, spacing } from '../constants/dimensions'
// import SongCard from '../components/SongCard'
import SongCardWithCategory from '../components/SongCardWithCategory'
import FloatingPlayear from '../components/FloatingPlayear'
// import { fontsFamilies } from '../constants/fonts'



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    

      <FlatList data={[1, 2, 3, 4, 5, 6,7]} renderItem={SongCardWithCategory}
        contentContainerStyle={{
        paddingBottom:200
      }}
      />
      <FloatingPlayear />
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
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
  data: {
    height: 20,
    width:20
  },
  neww: {
    height:20
    window:
  }

  
})