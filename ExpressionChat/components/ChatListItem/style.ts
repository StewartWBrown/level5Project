import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    avatar: {
        width: 58, 
        height: 58,
        marginRight: 15,
        borderRadius: 60,
    },

    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
    },

    picContainer: {
        flexDirection: 'row'
    },

    middleContainer: {
        justifyContent: 'space-around'
    },

    dateContainer: { 
        flexDirection: 'row'
    },

    username: {
        fontWeight: 'bold',
        fontSize: 17
    },

    messagePreview: {
        fontSize: 16,
        color: 'grey'
    },

    timeRecieved: {
        fontSize:16,
        color: 'grey'
    }
})

export default styles; 