import React from "react";
import { Message } from "../../types";
import { Text, View } from "react-native";
import moment from "moment";
import styles from "./styles";

export type ChatMessageProps = {
    message: Message;
    usersID: string,
}


const ChatMessage = (props: ChatMessageProps) => {
    const { message, usersID } = props; 

    const messageSent = () => {
        return message.user.id === usersID;
    }

    return (
        <View style={styles.container}> 
            <View style={[
                styles.messageBox,
                {backgroundColor: messageSent() ? '#DCF8C5' : 'white',
                marginLeft: messageSent() ? 50 : 0,
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