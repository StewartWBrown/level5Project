import React from "react";
import { Text } from 'react-native'


import { useRoute } from "@react-navigation/native";

const ChatRoomScreen = () => {
    // Gives each chat an ID
    const route = useRoute() ;
    
    
    return (
        <Text> Chat Room </Text>
    )
}

export default ChatRoomScreen;