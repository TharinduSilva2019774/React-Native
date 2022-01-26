import React from 'react';
import { ImageBackground,StyleSheet,View,Image } from 'react-native';

import colors from '../config/colors';

function VeiwImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}/>
            <View style={styles.deleteIcone}/>
            <Image resizeMode='contain' style={styles.Image} source={require("../assets/chair.jpg")}/>
        </View>
    );

    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.black,
        flex:1,
    },
    closeIcon:{
        width:50,
        height:50,
        backgroundColor: colors.primary,
        position:'absolute',
        top:40,
        left:30,
    },
    Image:{
        width:'100%',
        height:'100%',
        
    },
    deleteIcone:{
        width:50,
        height:50,
        backgroundColor: colors.secondary,
        position:'absolute',
        top:40,
        right:30,
    }

})

export default VeiwImageScreen;