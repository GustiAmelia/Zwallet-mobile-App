import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Zwallet</Text>
    </View>
  );
};

export default SplashScreen;

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#6379F4',
    justifyContent:'center',
  },
  text:{
    alignSelf:'center',
    color:'#FFFFFF',
    fontWeight:'bold',
    fontSize:32,
  },
});

