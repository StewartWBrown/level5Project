import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";
import {
    API, 
    Auth, 
    graphqlOperation,
} from 'aws-amplify';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import { createMessage, updateChatRoom  } from "../../src/graphql/mutations";


const ChatInput = (props) => {
    const { chatRoomID } = props; 

    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);
    var messageColour:string = "white";
    var facialExpression:string = "nothing";

    useEffect(() => {
        const getUser  = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyUserId(userInfo.attributes.sub);
        }
        getUser();
    }, [])

    const updateLastMessage = async (messageId: string) => {
        try{
            await API.graphql(
                graphqlOperation(
                    updateChatRoom, {
                        input: { id: chatRoomID, lastMessageID: messageId,}
                    }
                )
            );
        } catch (e) {
            console.log(e)
        }
        
    }



    const onSendPress = async () => {
        try {
            const newMessage = await API.graphql(
                graphqlOperation(
                    createMessage, {
                        input:{
                            content: message,
                            userID: myUserId,
                            chatID: chatRoomID,
                            colour: messageColour,
                            facialExpression: facialExpression,
                        }
                    }
                )
            )
            await updateLastMessage(newMessage.data.createMessage.id);
            setMessage('');
        } catch (e){
            console.log(e);
        }
        
    }

    const changeMessageColour = (colour) =>{
        messageColour = colour;
        alert("Changed colour to " + colour);
    }
    
    const changeFacialExpression = (face) =>{
        facialExpression = face;
        alert("Changed facial expression to " + face);
    }

    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
            <Menu>
            <MenuTrigger text='DEV' triggerOnLongPress={true}/>
            <MenuOptions>
                <MenuOption onSelect={() => changeFacialExpression(`happy`)} text='happy' />
                <MenuOption onSelect={() => changeFacialExpression(`sad`)} text='sad' />
                <MenuOption onSelect={() => changeFacialExpression(`fear`)} text='fear' />
                <MenuOption onSelect={() => changeFacialExpression(`anger`)} text='anger' />
                <MenuOption onSelect={() => changeFacialExpression(`surprise`)} text='surprise' />
                <MenuOption onSelect={() => changeFacialExpression(`disgust`)} text='disgust' />
                <MenuOption onSelect={() => 
                    changeMessageColour('blue')} >
                <Text style={{color: 'blue'}}>blue</Text>
                </MenuOption>

                <MenuOption onSelect={() => 
                    changeMessageColour('red')} >
                <Text style={{color: 'red'}}>red</Text>
                </MenuOption>
                <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
            </MenuOptions>
            </Menu>
            <FontAwesome5 name="laugh-beam" size={25} color="grey" />
            <TextInput style={styles.textInput} placeholder={"Type a message..."} multiline numberOfLines={2} value = {message} onChangeText= {setMessage} />
            </View>
           <TouchableOpacity onPress={onSendPress}>
           <View style={styles.buttonContainer}>
               <MaterialCommunityIcons name="send" size={24} color="white"/>
           </View>
           </TouchableOpacity>
        </View>
    )
    
}


export default ChatInput;