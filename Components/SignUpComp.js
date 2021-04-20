import React,{useRef} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Input, Container, Header, Form, Content, Item, Button } from 'native-base'

const SignUpComp = () => {

  
   return (
       
            <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: 250,marginTop:200 }}>

                {/* Lottie Animation */}
                <View style={styles.animationContainer}>
        
        <View style={styles.buttonContainer}>
          <Button title="Restart Animation" onPress={this.resetAnimation} />
        </View>
      </View>
                <Input placeholder="Full Name" style={{ color: 'blue', borderWidth: 1, width: '80%', marginTop: 20, borderRadius: 12 }} />
                <Input placeholder="Email" style={{ color: 'blue', borderWidth: 1, width: '80%', marginTop: 10, borderRadius: 12 }} />
                <Input placeholder="Password" secureTextEntry style={{ color: 'blue', borderWidth: 1, width: '80%', marginTop: 10, borderRadius: 12 }} />


                <Button success style={{ width: '80%', alignSelf: 'center', marginTop: 20, borderWidth: 12, borderWidth: 0, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: 'white', fontWeight: 'bold', }}>Submit</Text></Button>





            </View>
        
    )
}

export default SignUpComp

const styles = StyleSheet.create({})
