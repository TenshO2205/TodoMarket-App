import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Detalles del producto</Text>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})