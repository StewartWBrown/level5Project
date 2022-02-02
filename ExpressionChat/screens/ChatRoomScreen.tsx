import React from "react";
import { FlatList, Text } from 'react-native';
import dummyChatData from '../dummyData/DummyChatSample';

import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";

const ChatRoomScreen = () => {
    // Gives each chat an ID
    const route = useRoute() ;
    
    
    return (
        <FlatList data={dummyChatData.messages} renderItem={( { item } ) => <ChatMessage message={item} />} inverted />

    );
}

export default ChatRoomScreen;