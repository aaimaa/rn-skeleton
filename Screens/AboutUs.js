import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useFonts } from 'expo-font';
const AboutUs = () => {
    const [loaded] = useFonts({
        DancingScript: require('../assets/fonts/DancingScript-SemiBold.ttf'),
      });
      if (!loaded) {
        return null;
      }
    return (
        <View style={styles.container}>
            <Text style={{fontFamily:'DancingScript',color:'green',fontSize:18,lineHeight:30}}>Founded in 2008 and based in Delhi,India,XYZ is a trusted community and here to help millions of
                people in society.We are team of 500 individuals which are delighted to serve people like you.

                Just some years ago,we became fascinated by idea of discovering the world through someone eyes.We have achieved
                lot and planning to do more in future.
            </Text>
        </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        backgroundColor:'#202020'
    }
})
