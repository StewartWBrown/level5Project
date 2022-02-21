import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatListItem from '../components/ChatListItem';
import chatRooms from '../dummyData/DummyChats';
import ContactsButton from '../components/ContactsButton';

export default function ChatsScreen() {
  return (

    <View style={styles.container}>
      <FlatList style={{ width: '100%'}}
        data={chatRooms}
        renderItem={( { item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={ (item) => item.id}
      />
      <ContactsButton /> 
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
