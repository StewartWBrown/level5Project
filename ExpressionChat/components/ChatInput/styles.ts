import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10, 
        borderRadius: 40,
        flex:1,
        alignItems: 'center'

    },

    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 40, 
        height: 40, 
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },

    textInput: {
        flex: 1,
        marginLeft: 10,
        marginRight: 5,
    },

    icons: {
        marginHorizontal: 4
    }


})


export default styles; 