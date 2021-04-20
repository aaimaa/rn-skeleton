import React,{useState} from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import SnackBar from 'react-native-snackbar-component'


const ContactUs = () => {
    
    const[visible,setVisible]=useState(false);
const [url,setUrl]=useState('');
    return (
        <View style={styles.container}>
            <SnackBar visible={visible} textMessage={url} backgroundColor="green" actionHandler={()=>setVisible(false)} actionText="Cancel"/>
            <View style={{flexDirection:'row',marginTop:40}}>
                <Pressable onPress={()=>{setVisible(true),()=>setUrl("www.github.com/aaimaa")}}>
            <AntDesign name="github" size={30} color="green" style={styles.icon} />
            </Pressable>
            <Pressable onPress={()=>{setVisible(true),setUrl("www.instagram.com/aaimaa")}}>
            <AntDesign name="instagram" size={30} color="green" style={styles.icon} />
            </Pressable>
            <Pressable onPress={()=>{setVisible(true),setUrl("www.linkedin.com/aaimaa")}}>
            <AntDesign name="linkedin-square" size={30} color="green"  style={styles.icon}/>
            </Pressable>
            </View>
        </View>
    )
}


export default ContactUs

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#202020',
        alignItems:'center'},
        icon:{
            padding:15
        }
})
