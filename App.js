import { StyleSheet, Text, View, SafeAreaView, Image,TouchableWithoutFeedback,Alert,StatusBar, Button,Dimensions,Platform  } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import VeiwImageScreen from './app/screens/VeiwImageScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {

  return <VeiwImageScreen/>;
}

const styles = StyleSheet.create({
  view:{
    flex:1,
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:"#000"
  }
})

