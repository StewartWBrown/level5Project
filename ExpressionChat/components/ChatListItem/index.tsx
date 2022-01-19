import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";

import styles from "./style";


export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];
    
    return (
        <View style = {styles.container}>
            <View style={styles.picContainer}>
                <Image source={{ uri: user.imageUri }} style  = {styles.avatar}/>
            

                <View style={styles.middleContainer}>
                <Text style={styles.username}> {user.name}</Text>
                <Text style={styles.messagePreview}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>

            <View style={styles.datecontainer}>
            {/* <Text> {chatRoom.lastMessage.createdAt} </Text> */}
            <Text style={styles.timeRecieved}> Yesterday </Text>
            </View>
        </View>
    )
};

export default ChatListItem;