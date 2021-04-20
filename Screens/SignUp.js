import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SignUpComp from '../Components/SignUpComp'
const SignUp = () => {
    return (
        <View style={styles.container}>
            <SignUpComp/>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#202020'
    }
})
