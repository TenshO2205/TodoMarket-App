import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../global/colors'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../service/shopService'

const CartScreen = () => {

  const cartItems = useSelector(state=>state.cartReducer.items)
  const total = useSelector(state=>state.cartReducer.total)
  const [triggerPost, result] = usePostOrderMutation()
  
  const confimCart = () => {
    triggerPost({total, cartItems, user: "LoggedUser"})
    navigation.navigate("categories")
  }

  const renderCartItem = ({item}) => (
    <CartItem item={item} />
  )

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
     />
     <View style={styles.cartConfirm}>
      <Text style={styles.totalPrice}>Total: ${total}</Text>
      <TouchableOpacity style={styles.confirmButton} onPress={confimCart}>
        <Text style={styles.textConfirm}>Confirmar</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer:{
    flex:1,
  },
  cartConfirm:{
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice:{
    fontSize: 16,
    fontFamily: 'Karla-Bold'
  },
  confirmButton:{
    backgroundColor: colors.backgroundList,
    padding: 10,
    borderRadius: 10,
  },
  textConfirm:{
    fontFamily: 'Karla-Bold',
    fontSize: 16,
    color: '#000'
  }
})