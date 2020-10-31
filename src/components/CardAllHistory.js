import React from 'react';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text,Image, StyleSheet} from 'react-native';

const CardAllHistory = ({item}) => {
  const loginUser = useSelector((state)=>state.auth.data);
  const regex = /localhost/;
  let newUrlImage;
  if (item.avatar !== ''){
    newUrlImage = item.avatar.replace(regex,'54.161.84.11');
  }
  return (
    <View style={Styles.contenCard}>
      <View style={Styles.leftContent}>
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
        <View style={Styles.textLeftContent}>
          <Text style={Styles.textName}>{item.username}</Text>
          <Text style={Styles.description}>{item.category}</Text>
        </View>
      </View>
      <View style={Styles.rightContent}>
      {loginUser.id === item.receiver_id
        ?
        <Text style={Styles.nominalIn}>+{item.amount.toLocaleString('id',{style:'currency',currency:'IDR'})}</Text>
        :
        <Text style={Styles.nominalOut}>-{item.amount.toLocaleString('id',{style:'currency',currency:'IDR'})}</Text>
        }
      </View>
    </View>
  );
};

export default CardAllHistory;

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
  leftContent:{
    flexDirection:'row',
    marginLeft:16,
  },
  textLeftContent:{
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
  description:{
    fontSize:14,
    color:'#7A7886',
    marginTop:9,
  },
  rightContent:{
    marginRight:16,
    justifyContent:'center',
  },
  nominalIn:{
    fontSize:18,
    fontWeight:'bold',
    color:'#1EC15F',
  },
  nominalOut:{
    fontSize:18,
    fontWeight:'bold',
    color:'#FF5B37',
  },
});

