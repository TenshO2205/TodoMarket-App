import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Header from '../components/Header'
import CategoriesScreen from '../screen/CategoriesScreen'
import ProductByCategoryScreen from '../screen/ProductsByCategoryScreen'
import ProductDetailScreen from '../screen/ProductDetailScreen'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName='Categorias'
        screenOptions={
            ({navigation, route}) => ({
                header: () => <Header tittle={route.name} navigation={navigation}/>
            })
        }
        >
            <Stack.Screen
            name='Categorias'
            component={CategoriesScreen}
            />
            <Stack.Screen
            name='Productos'
            component={ProductByCategoryScreen}
            />
            <Stack.Screen
            name='Detalle'
            component={ProductDetailScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator