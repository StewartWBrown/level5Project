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
        width: 100,
        height: 100,
      },

    name: {
        color: Colors.light.tint,
        fontWeight: "bold",
        marginBottom: 5,
    },

    message: {

    },

    timestamp: {
        alignSelf: "flex-end"
    },
});

export default styles; 

