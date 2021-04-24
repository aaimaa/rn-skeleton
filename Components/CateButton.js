import { useNavigation } from '@react-navigation/core';
import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity, Alert} from 'react-native'
import {getCategories} from '../Service/cropCategories'
const CateButton = (props) => {
    const [data,setData]=useState(null);
    const {color,crop}=props;
useEffect(() => {
   getCategories().then(data=>{
setData(data)
   }),error=>{
       Alert.alert('Something Went Wrong')
   }
}, [])
console.log(data)
    const navigation=useNavigation();
 const onBtnPress=()=>{
      navigation.navigate('CropDetails')
  }
    return (
    <View style={{flex:1,justifyContent:'center'}}>
<TouchableOpacity  onPress={()=>onBtnPress()} style={{width:200,backgroundColor:`${color}`,justifyContent:'center',alignItems:'center',height:50}}>
    <Text>{crop}</Text>
    </TouchableOpacity>


    </View>


    )
}

export default CateButton

const styles = StyleSheet.create({})
