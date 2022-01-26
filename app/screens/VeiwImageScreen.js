import React from 'react';
import { StyleSheet,View,Image } from 'react-native';

import colors from '../config/colors';

import {MaterialCommunityIcons} from '@expo/vector-icons'


function VeiwImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color={colors.white} size={35}/>
            </View>
            <View style={styles.deleteIcone}>
                <MaterialCommunityIcons name="delete" color={colors.white} size={35}/>
            </View>
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
        position:'absolute',
        top:40,
        left:30,
    },
    Image:{
        width:'100%',
        height:'100%',
        
    },
    deleteIcone:{
        position:'absolute',
        top:40,
        right:30,
    }

})

export default VeiwImageScreen;