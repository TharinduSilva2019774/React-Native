import { StyleSheet, Text, View, SafeAreaView, Image,TouchableWithoutFeedback,Alert,StatusBar, Button,Dimensions,Platform  } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import VeiwImageScreen from './app/screens/VeiwImageScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

export default function App() {

  return (
    <View style={styles.view}>
      <AppButton title={"Login"} onPress={()=>console.log("Custom button works")}></AppButton>
      </View>
  );
}

const styles = StyleSheet.create({
  view:{
    flex:1,
    alignItems:"center",
    justifyContent:'center',
  }
})

