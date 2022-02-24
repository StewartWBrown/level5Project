import React from "react";
import { FlatList, ImageBackground, ImageBackgroundBase, Text } from 'react-native';
import dummyChatData from '../dummyData/DummyChatSample';

import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

const ChatRoomScreen = () => {
    // Gives each chat an ID
    const route = useRoute() ;
    
    
    
    return (
        <>
        <FlatList 
        data={dummyChatData.messages} 
        renderItem={( { item } ) => 
        <ChatMessage message={item} />} 
        inverted 
        />
        <ChatInput chatRoomID={route.params.id}/>
        </>
        );

        
      
}

export default ChatRoomScreen;