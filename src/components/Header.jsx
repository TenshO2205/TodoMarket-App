import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {colors} from '../global/colors'
import { AntDesign } from '@expo/vector-icons'

const header = ({ tittle, navigation }) => {
  return (
    <View style={styles.container}>
      {
        navigation.canGoBack()
        &&
        (<TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        )}
        {
          !navigation.canGoBack() && <View />
        }
      <Text style={styles.headerTittle}>{tittle}</Text>
    </View>
  )
}
export default header

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: colors.headerColor,
        paddingHorizontal:20,
        paddingBottom:10,
    },
    headerTittle: {
        fontFamily: 'Karla-Bold',
        fontSize: 17,
        marginLeft: 'auto',
        marginRight:'auto'
    }
})