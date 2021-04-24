import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button} from 'native-base'
import { NavigationHelpersContext } from '@react-navigation/core'
const CateButton = (props,navigation) => {
    const {crop,color}=props
    return (
    <View style={{flex:1,justifyContent:'center'}}>
<Button onPress={()=>navigation.navigate('CropInfo') } style={{justifyContent:'center',alignItems:'center',width:200,backgroundColor:`${color}`}}>
    <Text>{crop}</Text>
</Button>
    </View>
    

    )
}

export default CateButton

const styles = StyleSheet.create({})
