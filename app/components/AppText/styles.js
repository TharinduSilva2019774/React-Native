import { StyleSheet,Platform } from 'react-native';

const styles = StyleSheet.create({
    text:{
        color:"tomato",
        fontSize:18,
        
        fontFamily:Platform.OS === "android" ? "Roboto" : "Avernir"

    }
});

export default styles;