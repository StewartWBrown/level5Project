import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import styles from "../components/ChatListItem/style";
import ListOfUsersItem from "../components/ListOfUsersItem";
import DummyUsers from '../dummyData/DummyUsers';
import { listUsers } from "../src/graphql/queries";

export default function ListOfUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try{
                const usersData = await API.graphql(
                    graphqlOperation(
                        listUsers
                    )
                )
                setUsers(usersData.data.listUsers.items);
            } catch (e) {
                console.log(e);
            }
        }
        getUsers();
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                style={{width: '100%'}}
                data={users}
                renderItem={({ item }) => <ListOfUsersItem user={item} />}
                keyExtractor={( item ) => item.id}
            />
        </View>
    );

}