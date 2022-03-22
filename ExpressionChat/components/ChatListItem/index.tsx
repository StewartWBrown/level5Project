import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import { useNavigation } from "@react-navigation/native";


import styles from "./style";


export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    //const user = chatRoom.chatUsers.items[1];

    const user = chatRoom.chatUsers.items[0].user;

    const navigation = useNavigation();


    const onClick = () => {
        navigation.navigate(`ChatRoom`, { 
        id: chatRoom.id,
        name: user.name })
        
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
        <View style = {styles.container}>
            <View style={styles.picContainer}>
                <Image source={{ uri: user.imageUri }} style  = {styles.avatar}/>
            

                <View style={styles.middleContainer}>
                <Text style={styles.username}> {user.name}</Text>
                <Text numberOfLines={1} style={styles.messagePreview}>{chatRoom.lastMessage  ? chatRoom.lastMessage.content : ""}</Text>
                </View>
            </View>

            <View style={styles.dateContainer}>
            <Text style={styles.timeRecieved}> 
            {chatRoom.lastMessage &&  moment(chatRoom.lastMessage.timestamp).format("DD/MM/YYYY")} 
            </Text>  

            </View>
        </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItem;