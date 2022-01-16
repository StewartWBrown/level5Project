import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatListItem from '../components/ChatListItem';

export default function ChatsScreen() {
  return (

    <View style={styles.container}>
      <ChatListItem chatRoom={{lastMessage: {content: "Test"}}} />
      <ChatListItem chatRoom={{lastMessage: {content: "Test"}}} />
      <ChatListItem chatRoom={{lastMessage: {content: "Test"}}} />
      <ChatListItem chatRoom={{lastMessage: {content: "Again"}}} />
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
