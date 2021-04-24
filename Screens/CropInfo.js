import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

import CateButton from '../Components/CateButton'
const CropInfo = ({navigation}) => {
    
    return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#202020'}}>
<CateButton crop="Rabi" color="#4bb543"/>
<CateButton crop="Kharif" color="#F32013"/>

<CateButton crop="Zaid" color="#FFCC00"/>


    </View>

    )
}

export default CropInfo

const styles = StyleSheet.create({})
