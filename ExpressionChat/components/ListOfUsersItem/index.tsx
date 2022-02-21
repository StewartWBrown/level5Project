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
        <View style={styles.picContainer}>
                <Image source={{ uri: user.imageUri }} style  = {styles.avatar}/>
                <View style={styles.middleContainer}>
                <Text style={styles.username}> {user.name}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ListOfUsersItem;