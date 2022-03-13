import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import ContactsButton from '../components/ContactsButton';
import { useEffect, useState } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { getUser } from './queries';

export default function ChatsScreen() {

    const [ chatRooms, setChatRooms ] = useState([]);
    useEffect( () => {
      const fetchChatRooms = async () => {
        try{
          const userInfo = await Auth.currentAuthenticatedUser();
          const userData = await API.graphql(
            graphqlOperation(getUser, {id: userInfo.attributes.sub})
          )
          setChatRooms(userData.data.getUser.chatRooms.items)
        }catch (e) {
          console.log(e)
        }
      }
      fetchChatRooms();
    }, []);


    return (
    <View style={styles.container}>
      <FlatList style={{ width: '100%'}}
        data={chatRooms}
        renderItem={( { item }) => <ChatListItem chatRoom={item.chatRoom} />}
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
