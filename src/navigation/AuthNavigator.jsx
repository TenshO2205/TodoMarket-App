import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import SignupScreen from '../screen/SignupScreen'
import LoginScreen from '../screen/LoginScreen'

const Stack = createNativeStackNavigator()

const AuthNavigator = () =>{
    return(
        <Stack.Navigator
        initialRouteName='Login'
        screenOptions={
            ({navigation, route}) => ({
                header: () => <Header tittle={route.name} navigation={navigation}/>
            })
        }
        >
            <Stack.Screen
            name='Signup'
            component={SignupScreen}
            />
            <Stack.Screen
            name='Login'
            component={LoginScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator