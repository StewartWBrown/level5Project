import React from "react";
import { Message } from "../../types";
import { Text, View, Image } from "react-native";
import moment from "moment";
import styles from "./styles";
import { anger, disgust, fear, happy, sad, surprise} from "../../assets/images"
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
            <View style={styles.faceContainer}>
               <Image style ={styles.tinyFace} source={require('../../assets/images/' + message.facialExpression + '.png')} />
            </View>
            <View style={[
                styles.messageBox,
                {backgroundColor: message.colour,
                marginLeft: messageSent() ? 80 : 0,
                marginRight: messageSent() ? 0 : 50}
            ]}>
                {!messageSent() && <Text style={styles.name}> {message.user.name} </Text>}
                <Text style={styles.message}> {message.content} </Text>
                <Text style={styles.timestamp}> {moment(message.timestamp).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;