import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom, User } from "../../types";
import { useNavigation } from "@react-navigation/native";


import styles from "./style";


export type ListOfUsersProps = {
    user: User;
}

const ListOfUsersItem = (props: ListOfUsersProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onClick = () => {
        

    }
    
    return (
        <TouchableWithoutFeedback onPress={onClick}>
        <View style = {styles.container}>
            <View style={styles.picContainer}>
                <Text style={styles.username}> {user.name}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ListOfUsersItem;