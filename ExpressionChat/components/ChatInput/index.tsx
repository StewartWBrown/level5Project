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
import moment from "moment";


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
            if(message == ''){
                return;
            }
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
            <MenuTrigger text='   ' triggerOnLongPress={true}/>
            <MenuOptions>
                <MenuOption onSelect={() => changeFacialExpression(`happy`)} text='happy' />
                <MenuOption onSelect={() => changeFacialExpression(`sad`)} text='sad' />
                <MenuOption onSelect={() => changeFacialExpression(`fear`)} text='fear' />
                <MenuOption onSelect={() => changeFacialExpression(`anger`)} text='anger' />
                <MenuOption onSelect={() => changeFacialExpression(`surprise`)} text='surprise' />
                <MenuOption onSelect={() => changeFacialExpression(`disgust`)} text='disgust' />
                <MenuOption onSelect={() => 
                    changeMessageColour('#112ccf')} >
                <Text style={{color: '#112ccf'}}>(1) Dark blue</Text>
                </MenuOption>

                <MenuOption onSelect={() => 
                    changeMessageColour('#17dafc')} >
                <Text style={{color: '#17dafc'}}>(2) Light Blue</Text>
                </MenuOption>

                <MenuOption onSelect={() => 
                    changeMessageColour('#e06519')} >
                <Text style={{color: '#e06519'}}>(3) Orange</Text>
                </MenuOption>


                <MenuOption onSelect={() => 
                    changeMessageColour('#ed0707')} >
                <Text style={{color: '#ed0707'}}>(4) Red</Text>
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