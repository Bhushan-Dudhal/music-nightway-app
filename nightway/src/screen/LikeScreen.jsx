import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { FontSize, iconSizes, spacing } from '../constants/dimensions'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import SongCard from '../components/SongCard'
import FloatingPlayear from '../components/FloatingPlayear'
import { baseGestureHandlerWithDetectorProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon'

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
          <FlatList
              ListHeaderComponent={
                  <Text style={styles.headingText}>Liked Songs</Text>
                  
             }
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9,10]} renderItem={() => <SongCard containerStyle={{ width: "47%" }} imageStyle={{
              height: 160,
              width: 160,
          }} />}
              numColumns={2}
              contentContainerStyle={{
                  paddingBottom: 500,
                  paddingHorizontal:spacing.lg
              }}
              columnWrapperStyle={{
                  justifyContent: 'space-between',
                  marginVertical:spacing.lg
              }}
          />
          <FloatingPlayear/>
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
        padding:spacing.md
        // paddingVertical: spacing.md,
        // paddingHorizontal:spacing.md
    },
    headingText: {
        fontSize: FontSize.xl,
        color: colors.textPrimary,
        fontWeight: "700",
        padding: spacing.lg
             
    },

    new: {
        height: 20,
        width: 20,
        borderBottomColor: 20,
        paddingBottom: 20,
        marginBottom:20
        
    }
   
})