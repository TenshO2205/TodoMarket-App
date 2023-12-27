import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'
import { Feather } from '@expo/vector-icons'

const CartItem = ({item}) => {
  return (
    <Card style={styles.cartItemContainer}>
        <Image
            style={styles.imageCartItem}
            resizeMode='cover'
            source={{ uri: item.images[0] }} 
        />
        <View>
            <Text style={styles.cartTitle}>{item.title}</Text>
            <Text style={styles.cartLightText}>{item.brand}</Text>
            <Text style={styles.cartLightText}>${item.price} c/u</Text>
            <Text style={styles.cartTotalPrice}>
                Cantidad: {item.quantity}, Total: ${item.price*item.quantity}
            </Text>
        </View>
        <TouchableOpacity>
            <Feather name='trash' size={24} color='black' style={styles.trashCart}/>
        </TouchableOpacity>
    </Card>
  )
}

export default CartItem

const styles = StyleSheet.create({
    cartItemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    cartContenContainer:{
        flexDirection: 'row',
    },
    imageCartItem:{
        height: 50,
        width: 50,
        marginRight: 10,
    },
    trashCart:{
        marginLeft: 70,
    },
    cartTitle:{
        fontFamily: 'Karla-Bold',
        textTransform: 'capitalize',
        fontSize: 20,
    },
    cartLightText:{
        fontFamily: 'Karla-Regular',
        textTransform: 'capitalize',
        fontSize: 15,
    },
    cartTotalPrice:{
        fontFamily: 'Karla-Bold',
        textTransform: 'capitalize',
        fontSize: 16,
        color: colors.headerColor,
    }
})