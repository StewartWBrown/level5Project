import React from 'react'; 
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const ContactsButton = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('ListOfUsers')

    }


    return (<View style={styles.container}> 
        <TouchableOpacity onPress={onPress}>
        <Ionicons name="person-circle" size={28} color="white" />  
        </TouchableOpacity>
        </View>
    )
}


export default ContactsButton;