 import React from 'react';
 import { ImageBackground,StyleSheet,View,Image, Text} from 'react-native';
import AppButton from '../components/AppButton';

 
 import colors from '../config/colors';
 function WelcomeScreen(props) {
     return (
        <ImageBackground 
        blurRadius={10}
        style={styles.background}
        source={require("../assets/background.jpg")}>
            <View style={styles.logoContainter}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}></Image>
                <Text style={styles.tagline}>Sell What Do You Dont Need</Text>
            </View>
            <View style={styles.buttonContainter}>
                <AppButton title={"Login"}/>
                <AppButton title={"Register"} color='secondary'/>
            </View>
        </ImageBackground>
     );
 } 
 
 const styles = StyleSheet.create({
     background:{
         flex:1,
         justifyContent:"flex-end",
         alignItems:"center",
     },
     buttonContainter:{
         width:"100%",
         padding:20,
     },
     logo:{
         height:100,
         width:100,
        
     },
     logoContainter:{
        position:"absolute",
        top:70,
        alignItems:"center"
     },
     tagline:{
         fontSize:25,
         fontWeight:"600",
         paddingVertical:20
     },
 })
 export default WelcomeScreen;