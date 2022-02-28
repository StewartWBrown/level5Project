import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, ImageBackgroundBase, Text } from 'react-native';
import dummyChatData from '../dummyData/DummyChatSample';

import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

import {
    API, 
    Auth, 
    graphqlOperation
} from 'aws-amplify'

import { messagesByChatRoom } from "../src/graphql/queries";

const ChatRoomScreen = () => {
    // Gives each chat an ID
    const route = useRoute() ;
    
    const [messages, setMessages] = useState([]);
    const [myId, setMyID] = useState([]);

    useEffect( () => {
        const getMessages = async () => {
            const messagesData = await API.graphql(
                graphqlOperation(
                    messagesByChatRoom, {
                        chatID: route.params.id,
                        sortDirection: "DESC",
                    }
                )
            )
            setMessages(messagesData.data.messagesByChatRoom.items)
        }
        getMessages();
    }, [])

    useEffect( () => {
        const getMyID = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyID(userInfo.attributes.sub);
        }
        getMyID();
    }, [])

    return (
        <>
        <FlatList 
        data={messages} 
        renderItem={( { item } ) => 
        <ChatMessage usersID = {myId} message={item} />} 
        inverted 
        />
        <ChatInput chatRoomID={route.params.id}/>
        </>
        );

        
      
}

export default ChatRoomScreen;