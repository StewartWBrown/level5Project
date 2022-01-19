import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatListItem from '../components/ChatListItem';
import chatRooms from '../dummyData/DummyChats';


export default function ChatsScreen() {
  return (

    <View style={styles.container}>
      <ChatListItem chatRoom={chatRooms[0]} />
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
