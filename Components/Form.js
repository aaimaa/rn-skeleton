


import React from 'react';
 import { Button, TextInput, View,StyleSheet } from 'react-native';
 import { Formik } from 'formik';
 
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
           onChangeText={handleChange('query')}
           onBlur={handleBlur('query')}
           value={values.query}
        placeholder="query"
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
        
         <Button onPress={handleSubmit} title="Submit" style={{padding:12}} />
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