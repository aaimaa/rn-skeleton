import React,{useState} from 'react'
import { StyleSheet, Image, Pressable, Dimensions } from 'react-native'

import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon ,Button} from 'native-base'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import Dialog, {SlideAnimation, DialogContent, DialogTitle } from 'react-native-popup-dialog';
const cards = [
    {
        text: 'Iron Man',
        name: ' Marverl Avengers',
        image: require('../assets/Ironman.jpg'),
        content:"Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk."
    },

    {
        text: 'Thor',
        name: 'Marverl Avengers',
        image: require('../assets/Thor.jpg'),
        content:"Thor Odinson is a fictional superhero appearing in American comic books published by Marvel Comics. The character, which is based on the Norse deity of the same name, is the Asgardian god of thunder who possesses the enchanted hammer, Mjolnir, which grants him the ability to fly and manipulate weather amongst his other superhuman attributes."
    },
    {
        text: 'Black Panther',
        name: 'Marverl Avengers',
        image: require('../assets/BlackPanther.jpg'),
        content:"Black Panther is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by writer-editor Stan Lee and writer-artist Jack Kirby, first appearing in Fantastic Four #52 (cover-dated July 1966) in the Silver Age of Comic Books. Black Panther's real name is T'Challa, and he is depicted as the king and protector of the fictional African nation of Wakanda. Along with possessing enhanced abilities achieved through ancient Wakandan rituals of drinking the essence of the heart-shaped herb, T'Challa also relies on his proficiency in science, rigorous physical training, hand-to-hand combat skills, and access to wealth and advanced Wakandan technology to combat his enemies."
    },

    {
        text: 'Spider Man',
        name: 'Marverl Avengers',
        image: require('../assets/SpiderMan.jpg'),
        content:"Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (Aug. 1962) in the Silver Age of Comic Books. He appears in American comic books published by Marvel Comics, as well as in a number of movies, television shows, and video game adaptations set in the Marvel Universe. In the stories, Spider-Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker died in a plane crash. "
    },
    {
        text: 'Hulk',
        name: 'Marverl Avengers',
        image: require('../assets/Hulk.jpg'),
        content:"The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist. The two exist as independent dissociative personalities, and resent each other."
    },
    {
        text: 'Doctor Strange',
        name: 'Marverl Avengers',
        image: require('../assets/DoctorStrange.jpg'),
        content:"Doctor Stephen Strange is a fictional character appearing in American comic books published by Marvel Comics. Created by Steve Ditko,[5] the character first appeared in Strange Tales #110 (cover-dated July 1963). Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats. Inspired by stories of black magic and Chandu the Magician, Strange was created during the Silver Age of Comic Books to bring a different kind of character and themes of mysticism to Marvel Comics."
    },
    {
        text: 'Black Widow',
        name: 'Marverl Avengers',
        image: require('../assets/BlackWidow.jpg'),
        content:"Natalia Alianovna Romanova[1] colloquial: Black Widow is a fictional superhero appearing in American comic books published by Marvel Comics. Created by editor and plotter Stan Lee, scripter Don Rico, and artist Don Heck, the character debuted in Tales of Suspense #52 (April 1964). The character was introduced as a Russian spy, an antagonist of the superhero Iron Man. She later defected to the United States, becoming an agent of the fictional spy agency S.H.I.E.L.D. and a member of the superhero team the Avengers."
    },


];






export default HomeScreen= ({navigation}) => {
    const [visible,setVisible]=useState(false);
    return (

    
        <View style={styles.container}>
        <DeckSwiper
        
            dataSource={cards}
            renderItem={item =>
                <Card style={{ elevation: 3 }}>
                    <Pressable onPress={()=>setVisible(true)}>
                    <Dialog
                    dialogTitle={<Text style={{fontWeight:'bold',color:'green',backgroundColor:'white',height:50,fontSize:24,textAlign:'center'}}>{item.text}</Text>}
                    dialogStyle={{backgroundColor:'#202020',borderRadius:12}}
                      dialogAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                      })}
    visible={visible}
    onTouchOutside={() => {
    setVisible(false)

    }}
  >
     
    <DialogContent style={{padding:10}}>

     <Text style={{color:'white'}}>{item.content} </Text>
    </DialogContent>

  </Dialog>
                    <CardItem style={{borderRadius:12}}>
                        <Left>
                            <Thumbnail source={item.image} />
                            <Body>
                                <Text>{item.text}</Text>
                                <Text note>Lets Go</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image style={{ height:400, flex: 1 }} source={item.image} />
                    </CardItem>
                    <CardItem>
                        <Icon name="heart" style={{ color: '#ED4A6A' }} />
                        <Text>{item.name}</Text>
                    </CardItem>
                    </Pressable>
                </Card>
            }
        />
    </View>
    )
}


function InfoScreen  ({navigation})  {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#202020',
    }
})





