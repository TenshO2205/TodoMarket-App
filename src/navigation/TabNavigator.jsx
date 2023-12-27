import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { colors } from "../global/colors";
import { Entypo, Feather, Octicons  } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabNavigator = () =>{
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle:styles.tabBar,
            }}
            >
                <Tab.Screen
                 name="ShopStack" 
                 component={ShopNavigator}
                 options={{
                    tabBarIcon:({focused}) => (
                        <Entypo name="shop" size={24} color={focused?"#fff":"#ccc"} />
                    )
                 }} 
                />
                <Tab.Screen
                 name="CartStack"
                 component={CartNavigator}
                 options={{
                    tabBarIcon: ({focused}) => (
                        <Feather name="shopping-cart" size={24} color={focused?"#fff":"#ccc"} />
                    )
                 }} 
                />
                <Tab.Screen
                 name="OrderStack"
                 component={OrdersNavigator}
                 options={{
                    tabBarIcon: ({focused}) => (
                        <Octicons name="list-unordered" size={24} color={focused?"#fff":"#ccc"} />
                    )
                 }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.headerColor,
        shadowColor: "#ccc",
        elevation: 1,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 20,
        height: 90,
    }
})

export default TabNavigator