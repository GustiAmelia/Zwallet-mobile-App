import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
require('number-to-locale-string-polyfill');

import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity,FlatList } from 'react-native';
import globalStyles from '../shared/globalStyles';
import Feather from 'react-native-vector-icons/Feather';

import CardTransaction from '../components/CardTransaction';
import {getReceiver} from '../redux/actions/receiver';


const Home = ({navigation}) => {

  const user = useSelector((state)=>state.auth.data);
  console.log(user.id);

  const regex = /localhost/;
  const newUrlImage = user.avatar.replace(regex,'192.168.43.73');

  const dispatch = useDispatch();

  const handleButtonTransfer = ()=>{
    dispatch(getReceiver(user.id));
    navigation.navigate('Search');
  };

  const data = [
    {name:'Samuel Suhi', description:'Transfer', total:'+Rp50.000'},
    {name:'Samuel Suhi', description:'Transfer', total:'+Rp50.000'},
    {name:'Samuel Suhi', description:'Transfer', total:'+Rp50.000'},
  ];
  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="default" backgroundColor="#6379F4"/>
      <View style={Styles.header}>
        <View style={Styles.contentHeader}>
          <TouchableOpacity
            onPress={()=>navigation.navigate('Profile')}
            style={Styles.leftContent}>
            {user.avatar !== '' ?
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
              <Text style={Styles.textHeader}>Balance</Text>
              <Text style={Styles.nominalHeader}>{user.balance.toLocaleString('id',{style:'currency',currency:'IDR'})}</Text>
            </View>
          </TouchableOpacity>
          <View style={Styles.rightContent}>
            <TouchableOpacity>
              <Feather name="bell" size={21} color="#FAFAFA"/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={Styles.footer}>
        <View style={Styles.button}>
          <TouchableOpacity onPress={handleButtonTransfer}>
            <Text style={Styles.textButton}><Feather
              name="arrow-up" size={25} color="#608DE2"
            />  Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.textButton}><Feather
              name="plus" size={25} color="#608DE2"
            />  Top Up</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.transaction}>
          <Text style={Styles.title}>Transaction History</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('History')}>
            <Text style={Styles.linkAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={({item})=>{
            return (
              <CardTransaction item={item}/>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const Styles = StyleSheet.create({
  header:{
    flex:1,
    backgroundColor:'#6379F4',
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    justifyContent:'center',
  },
  contentHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:16,
  },
  leftContent:{
    flexDirection:'row',
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
  textHeader:{
    fontSize:14,
    color:'#D0D0D0',
    marginBottom:5,

  },
  nominalHeader:{
    fontSize:24,
    color:'#FFFFFF',
    fontWeight:'bold',
    marginTop:5,
  },
  rightContent:{
    marginRight:4,
    justifyContent:'center',
  },
  footer:{
    flex:3,
  },
  button:{
    flexDirection:'row',
    marginHorizontal:16,
    justifyContent:'space-between',
    marginVertical:30,
  },
  textButton:{
    color:'#514F5B',
    fontSize:18,
    fontWeight:'bold',
    paddingHorizontal:27,
    paddingVertical:10,
    borderRadius:10,
    backgroundColor:'#E5E8ED',
  },
  transaction:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:16,
    marginBottom:20,
  },
  title:{
    color:'#514F5B',
    fontSize:18,
    fontWeight:'bold',
  },
  linkAll:{
    color:'#6379F4',
    fontSize:16,
    fontWeight:'500',
  },
});

