import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons'
import HomeScreen from '../Screens/Home'
import AboutUs from '../Screens/AboutUs'
import ContactUs from '../Screens/ContactUs'
import SignUp from '../Screens/SignUp'
import CropInfo from '../Screens/CropInfo';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home"  drawerStyle={{backgroundColor:'#202020',}}  drawerContentOptions={{labelStyle:{color:'blue'}}}  screenOptions={{headerShown:true,headerStyle:{backgroundColor:'#202020'},headerTitleStyle:{color:'white'}}}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="About Us" component={ AboutUs} />
                <Drawer.Screen name="Contact Us" component={ ContactUs} />
                <Drawer.Screen name="SignUp" component={ SignUp} />
<Drawer.Screen name="Crops" component={CropInfo}/>

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})
