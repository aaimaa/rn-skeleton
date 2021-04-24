import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import CropInfo from '../Screens/CropInfo'
import CropDetails from '../Screens/CropDetails'
import { NavigationContainer } from '@react-navigation/native';
import {useFonts} from 'expo-font'
const Stack = createStackNavigator();

export default function CropStackNavigator() {
  const [loaded] = useFonts({
    Cairo: require('../assets/fonts/Cairo-SemiBold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    
    <Stack.Navigator screenOptions={{headerTitle:'Crop Categories',headerStyle:{backgroundColor:'#202020'},headerTitleStyle:{color:'white',fontWeight:'bold',fontStyle:'italic'}}}>
      <Stack.Screen name="CropInfo" component={CropInfo} />
      <Stack.Screen name="CropDetails" component={CropDetails} />
      
    </Stack.Navigator>
  
  );
}