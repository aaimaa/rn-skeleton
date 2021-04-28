


import React from 'react';
 import { Button, TextInput, View,StyleSheet ,TouchableOpacity,Text} from 'react-native';
 import { Formik } from 'formik';
 import { AntDesign } from '@expo/vector-icons';
  const Form = props => (
   <Formik
     initialValues={{ email: '',query:'',name:'',contact:'' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           placeholder="email"
           style={styles.input}
         />
        
         <TextInput
           onChangeText={handleChange('name')}
           onBlur={handleBlur('name')}
           value={values.name}
           placeholder="name"
           style={styles.input}
           
         />
         <TextInput
           onChangeText={handleChange('contact')}
           onBlur={handleBlur('contact')}
           value={values.contact}
           placeholder="contact no"
           style={styles.input}
         />
         <View style={{flexDirection:'row',borderWidth:1,borderColor:'blue',width:200,borderRadius:12}}>
         <AntDesign name="camerao" size={24} color="black" style={{padding:12}}/>
        <TextInput
        onChangeText={handleChange('contact')}
        onBlur={handleBlur('contact')}
        value={values.contact}
        placeholder="Take Picture"
        
        />
        </View>
         


         <TouchableOpacity style={{width:200,margin:12,borderWidth:1,borderColor:'blue',height:40,backgroundColor:'blue',borderRadius:12}}>
           <Text style={{textAlign:'center',fontWeight:'bold'}}>Submit</Text>
         </TouchableOpacity>
       </View>
     )}
   </Formik>
 );


 const styles = StyleSheet.create({
    container:{

    },
    input:{
borderWidth:1,
borderColor:'blue',
width:200,
padding:12,margin:5,
borderRadius:12
    }
})
 export default Form;