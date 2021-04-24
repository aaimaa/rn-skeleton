import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'

const CateButton = (props) => {
    const {color,crop}=props;
    
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
