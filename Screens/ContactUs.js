import React,{useState,useEffect} from 'react'
import { Pressable, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import SnackBar from 'react-native-snackbar-component'
import Form from '../Components/Form'

const ContactUs = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
  
    const[visible,setVisible]=useState(false);
const [url,setUrl]=useState('');

useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
 return(
     
        
       <>
        <View style={styles.container}>
            {/* <SnackBar visible={visible} textMessage={url} backgroundColor="green" actionHandler={()=>setVisible(false)} actionText="Cancel"/>
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
          
            <Form/> */}
         
      <Camera style={styles.camera} type={type}
  ref={(ref) => {
    setCameraRef(ref);
  }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={async () => {
                if (cameraRef) {
                  let photo = await cameraRef.takePictureAsync();
                 
                }
              }}>
              <Text>
                  Take Picture
              </Text>
          </TouchableOpacity>
        </View>
      </Camera>
  
            </View>
</>
    )
}


export default ContactUs

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
      },
      button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
        color: 'white',
      },
})




