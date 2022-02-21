import React from "react";
import { FlatList, View } from "react-native";
import styles from "../components/ChatListItem/style";
import ListOfUsersItem from "../components/ListOfUsersItem";
import DummyUsers from '../dummyData/DummyUsers';
export default function ListOfUsers() {

    return (
        <View style={styles.container}>
            <FlatList
                style={{width: '100%'}}
                data={DummyUsers}
                renderItem={({ item }) => <ListOfUsersItem user={item} />}
                keyExtractor={( item ) => item.id}
            />
        </View>
    );

}