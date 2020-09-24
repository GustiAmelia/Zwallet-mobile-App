import React from 'react';
import { View, Text,Image, StyleSheet} from 'react-native';

const CardContacs = ({item}) => {
  return (
    <View style={Styles.contenCard}>
      <View style={Styles.content}>
        <Image
        style={Styles.image}
        source={require('../../assets/avatar.png')}/>
        <View style={Styles.textContent}>
          <Text style={Styles.textName}>{item.name}</Text>
          <Text style={Styles.phone}>{item.phone}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardContacs;

const Styles = StyleSheet.create({
  contenCard:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#ffffff',
    marginVertical:10,
    paddingVertical:10,
    borderRadius:10,
    elevation:5,

  },
  content:{
    flexDirection:'row',
    marginLeft:16,
  },
  textContent:{
    marginLeft:20,
    justifyContent:'center',
  },
  image:{
    width:56,
    height:56,
    borderRadius:10,
  },
  textName:{
    fontSize:16,
    fontWeight:'bold',
    color:'#4D4B57',
  },
  phone:{
    fontSize:14,
    color:'#7A7886',
    marginTop:9,
  },
});

