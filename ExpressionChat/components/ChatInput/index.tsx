import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";



const ChatInput = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('Microphone')
    }

    const onSendPress = () => {

        console.warn('Sending message!')
        setMessage('');
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
        }
   
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
            <FontAwesome5 name="laugh-beam" size={25} color="grey" />
            <TextInput style={styles.textInput} placeholder={"Type a message..."} multiline numberOfLines={2} onChangeText= {setMessage} />
            <Entypo name="attachment" size={25} color="grey" style={styles.icons}/>
            {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icons}/>}
            </View>
           <TouchableOpacity onPress={onPress}>
           <View style={styles.buttonContainer}>
               {message ? 
               <MaterialCommunityIcons name="send" size={24} color="white"/>
                : <MaterialCommunityIcons name="microphone" size={24} color="white"/>
               }
           </View>
           </TouchableOpacity>
        </View>
    )
}


export default ChatInput;