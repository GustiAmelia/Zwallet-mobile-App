import React from 'react';
import { View, Text,Image, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const CardContacs = ({item}) => {

  const regex = /localhost/;
  const newUrlImage = item.avatar.replace(regex,'192.168.43.73');

  return (
      <View style={Styles.contenCard}>
        <View style={Styles.content}>
          {item.avatar !== '' ?
            <Image
            style={Styles.image}
            source={{uri:newUrlImage}}/>
            :
            <Feather
            style={Styles.imageNoPict}
            name="user" size={40} color="#6379F4"
            />
            }
          <View style={Styles.textContent}>
            <Text style={Styles.textName}>{item.firstname} {item.lastname}</Text>
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
    width:52,
    height:52,
    borderRadius:10,
  },
  imageNoPict:{
    width:52,
    height:52,
    backgroundColor:'#EBEEF2',
    borderRadius:10,
    textAlignVertical:'center',
    textAlign:'center',
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

