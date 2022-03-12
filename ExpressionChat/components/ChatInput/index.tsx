import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import {
    API, 
    Auth, 
    graphqlOperation,
} from 'aws-amplify';
import { createMessage, updateChatRoom  } from "../../src/graphql/mutations";


const ChatInput = (props) => {
    const { chatRoomID } = props; 

    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);

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

                        }
                    }
                )
            )
            await updateLastMessage(newMessage.data.createMessage.id)
        } catch (e){
            console.log(e);
        }
        setMessage('');
    }

    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
            <FontAwesome5 name="laugh-beam" size={25} color="grey" />
            <TextInput style={styles.textInput} placeholder={"Type a message..."} multiline numberOfLines={2} onChangeText= {setMessage} />
            <Entypo name="attachment" size={25} color="grey" style={styles.icons}/>
            {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icons}/>}
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