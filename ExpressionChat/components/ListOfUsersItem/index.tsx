import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom, User } from "../../types";
import { useNavigation } from "@react-navigation/native";

import { graphqlOperation, API, Auth } from "aws-amplify";
import { createChatRoom, createChatRoomUsers } from '../../src/graphql/mutations'

import styles from "./style";


export type ListOfUsersProps = {
    user: User;
}

const ListOfUsersItem = (props: ListOfUsersProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onClick = async () => {
        try{
            // create a chat room
            const newChatRoomData = await API.graphql(
                graphqlOperation(
                    createChatRoom, { input: {} }
                )
            )
                
            if (!newChatRoomData.data){
                console.log("Error creating chat room");
                return ;
            }
            
            const newChatRoom = newChatRoomData.data.createChatRoom;

            // add user to the chat
            await API.graphql(
                graphqlOperation(
                    createChatRoomUsers,{
                        input:{
                            userID: user.id,
                            chatRoomID: newChatRoom.id
                        }
                        
                    }
                )
            )
            
            // add other user to the chatroom
            const userInfo = await Auth.currentAuthenticatedUser();
            await API.graphql(
                graphqlOperation(
                    createChatRoomUsers, {
                        input:{
                            userID: userInfo.attributes.sub,
                            chatRoomID: newChatRoom.id,
                        }

                    }
                )
            )

            navigation.navigate('ChatRoom', {
                id: newChatRoom.id,
                name: "Visitor",
            })

        }catch (e){
            console.log(e);
        }

    }
    
    return (
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.picContainer}>
                <Image source={{ uri: user.imageUri }} style  = {styles.avatar}/>
                <View style={styles.middleContainer}>
                <Text style={styles.username}> {user.name}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ListOfUsersItem;