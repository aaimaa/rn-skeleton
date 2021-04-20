import React,{useRef,useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Input, Container, Header, Form, Content, Item, Button } from 'native-base'
import LottieView from 'lottie-react-native'
const SignUpComp = () => {
  const animation=React.useRef(null)

  const func=()=>{
    animation.current.play();
  }
const [email,setEmail]=useState('');
const [name,setName]=useState('');
const [password,setPassword]=useState('');



  
   return (
       <>
       
            <View style={{flex:1,justifyContent: 'center', alignItems: 'center' }}>

                {/* Lottie Animation */}
                <LottieView source={require('../assets/signup.json')}  autoPlay={true} loop={true}  ref={animation} style={styles.lottie} 
      />
      
      <View style={{height:250,width:300,justifyContent:'center',alignItems:'center'}}>
        
                <Input placeholder="Full Name"
                 value={name}
                 style={{ color: 'blue', borderWidth: 1, width: '80%', marginTop: 20, borderRadius: 12 }}
                 onChangeText={(text)=>setName(text)}
                  />
                <Input placeholder="Email"
                 value={email} 
                style={{ color: 'blue', borderWidth: 1, width: '80%', marginTop: 10, borderRadius: 12 }}
                onChangeText={(text)=>setEmail(text)}
                 />
                <Input placeholder="Password"
                 value={password}
                  secureTextEntry
                   style={{ color: 'blue', borderWidth: 1, width: '80%', marginTop: 10, borderRadius: 12 }}
                   onChangeText={(text)=>setPassword(text)} />


                <Button success style={{ width: '80%', alignSelf: 'center', marginTop: 20, borderWidth: 12, borderWidth: 0, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: 'white', fontWeight: 'bold', }}>Submit</Text></Button>
                </View>




            </View>
        </>
    )
}

export default SignUpComp

const styles = StyleSheet.create({

  lottie:{
    
  }
})
