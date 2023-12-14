import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from '../global/colors'
import { AntDesign } from '@expo/vector-icons'

const header = ({tittle, returnHomeHandlerEvent}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTittle}>{tittle}</Text>
      <Pressable onPress={returnHomeHandlerEvent}>
      <AntDesign name="home" size={24} color="black" />
      </Pressable>
    </View>
  )
}
export default header

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        alignItems:'flex-end',
        backgroundColor: colors.headerColor,
        paddingHorizontal:20,
        paddingBottom:10,
    },
    headerTittle: {
        fontFamily: 'Karla-Bold',
        fontSize: 17,
    }
})