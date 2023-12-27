import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import OrderScreen from '../screen/OrderScreen'

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName= 'Ordenes'
    screenOptions={
        ({navigation, route}) => ({
            header: () => <Header tittle={route.name} navigation={navigation}/>,
        })
    }
    >
        <Stack.Screen
            name='Ordenes'
            component={OrderScreen} 
        />
    </Stack.Navigator>
  )
}

export default OrdersNavigator