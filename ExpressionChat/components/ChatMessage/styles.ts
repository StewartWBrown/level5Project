import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    messageBox: {
        padding: 10,
        borderRadius: 5,
    
    },

    tinyFace: {
        width: 50,
        height: 50,
      },

    name: {
        color: Colors.light.tint,
        fontWeight: "bold",
        marginBottom: 5,
    },
    faceContainer: {

        backgroundColor: '#2f549e',
        borderRadius: 50,
        width: 40, 
        height: 60, 
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10

    },

    message: {

    },

    timestamp: {
        alignSelf: "flex-end"
    },
});

export default styles; 

