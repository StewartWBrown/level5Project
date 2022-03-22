import React from "react";
import { Message } from "../../types";
import { Text, View, Image } from "react-native";
import moment from "moment";
import styles from "./styles";


export type ChatMessageProps = {
    message: Message;
    usersID: string,
    colour: String,
}


const ChatMessage = (props: ChatMessageProps) => {
    
    const { message, usersID } = props; 
    const messageSent = () => {
        return message.user.id === usersID;
    }

    return (
        <View style={styles.container}> 
            
               {message.facialExpression != 'nothing' ? <Image style ={styles.tinyFace} source={require('../../assets/images/' + message.facialExpression + '.png')} />: null}
        
            <View style={[
                styles.messageBox,
                {backgroundColor: message.colour,
                marginLeft: messageSent() ? 120 : 0,
                marginRight: messageSent() ? 0 : 50}
            ]}>
                {!messageSent() && <Text style={styles.name}> {message.user.name} </Text>}

                <Text style={{color: message.colour == "#112ccf" ? "white" : "black"}}> {message.content} </Text> 
                <Text style={styles.timestamp}> {moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
        
    )
}

export default ChatMessage;