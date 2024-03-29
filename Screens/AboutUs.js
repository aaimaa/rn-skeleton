import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { Rating, AirbnbRating } from 'react-native-elements';
import {Button} from 'native-base'
import { useFonts } from 'expo-font';
const AboutUs = () => {
    const [loaded] = useFonts({
        Cairo: require('../assets/fonts/Cairo-SemiBold.ttf'),
      });
      if (!loaded) {
        return null;
      }
    return (

        <View style={styles.container}>
            <View style={{marginTop:20}}>
            <View style={{flexDirection:'row'}}>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/avengers.png"}}  style={styles.image}/>
         
            <Text style={{color:'white',fontSize:24,fontStyle:'italic',fontWeight:'bold'}}>Avengers Corp</Text>
            </View>
            <View style={{alignItems:'center'}}>
            <Text style={{fontFamily:'Cairo',color:'green',fontSize:18,lineHeight:30}}>Founded in 2008 and based in Delhi,India,XYZ is a trusted community and here to help millions of
                people in society.We are team of 500 individuals which are delighted to serve people like you.

                Just some years ago,we became fascinated by idea of discovering the world through someone eyes.We have achieved
                lot and planning to do more in future.
            </Text>
            </View>
            </View>
            <View style={{marginTop:60}}>
                <Text style={{fontSize:24,color:'white',textAlign:'center'}}>Rate Us</Text>
            <Rating type="star" showRating={true} fractions={2}/>
            </View>
            <View style={{margin:20}}>
            <Button style={{backgroundColor:'green',width:100,alignSelf:'center',justifyContent:'center',borderRadius:12}}>
                <Text>Submit</Text>
            </Button>
            </View>
        </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({
    container:{
      
        flex:1,
        backgroundColor:'#202020'
    },
    image:{
width:46,
height:46
    }
})
