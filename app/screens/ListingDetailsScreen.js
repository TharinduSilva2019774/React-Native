import React from 'react';
import { View,Image,StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/jacket.jpg")}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    detailsContainer:{
        padding:20,
    },
    price:{
        fontSize:20,
        color:colors.secondary,
        fontWeight:"bold",
        marginVertical:10,
    },
    title:{
        fontSize:24,
        fontWeight:"500",
    }

})
export default ListingDetailsScreen;