import React from 'react';
import {useSelector} from 'react-redux';

import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import globalStyles from '../shared/globalStyles';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';


const Confirmation = ({route,navigation}) => {

  //data from redux auth
  const loginUser = useSelector((state)=>state.auth.data);

  //data from redux user
  const user = useSelector((state)=>state.user.user);

  //filter data profile from user
  const userProfile = user.filter(value=>{return value.id === loginUser.id;});

  const amount = useSelector((state)=>state.transaction.amount);
  const note = useSelector((state)=>state.transaction.note);
  const date = moment(new Date()).format('MMMM D,YYYY');
  const time = moment(new Date()).format('HH:mm');

  const handleContinue = () => {
    navigation.navigate('PinConfirmation',{item,date:date,time:time});
  };

  const {item} = route.params;
  const regex = /localhost/;
  const newUrlImage = item.avatar.replace(regex,'54.161.84.11');

  return (
    <ScrollView style={globalStyles.container}>
      <StatusBar barStyle="default" backgroundColor="#6379F4"/>
      <View style={Styles.header}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('InputAmount')}
        style={Styles.back}>
          <Feather style={Styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
          <Text style={Styles.text}>Confirmation</Text>
        </TouchableOpacity>
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
              <Text style={Styles.textName}>{item.username}</Text>
              <Text style={Styles.phone}>{item.phone}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={Styles.footer}>
       <View style={Styles.wrapperDetails}>
          <View style={Styles.amount}>
            <Text style={Styles.detailTitle}>Amount</Text>
            <Text style={Styles.total}>{Number(amount).toLocaleString('id',{style:'currency',currency:'IDR'})}</Text>
          </View>
          <View style={Styles.balance}>
            <Text style={Styles.detailTitle}>Balance Left</Text>
            <Text style={Styles.total}>{(userProfile[0].balance - amount).toLocaleString('id',{style:'currency',currency:'IDR'})}</Text>
          </View>
        </View>
        <View style={Styles.wrapperDetails}>
          <View style={Styles.date}>
            <Text style={Styles.detailTitle}>Date</Text>
            <Text style={Styles.total}>{date}</Text>
          </View>
          <View style={Styles.time}>
            <Text style={Styles.detailTitle}>Time</Text>
            <Text style={Styles.total}>{time}</Text>
          </View>
        </View>
        <View style={Styles.note}>
          <Text style={Styles.detailTitle}>Notes</Text>
          <Text style={Styles.total}>{note}</Text>
        </View>
        <TouchableOpacity onPress={handleContinue}>
          <Text style={Styles.buttonFilled}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Confirmation;

const Styles = StyleSheet.create({
  header:{
    flex:2,
    backgroundColor:'#6379F4',
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    justifyContent:'center',
  },
  back:{
    flexDirection:'row',
    marginHorizontal:16,
    marginVertical:20,
  },
  text:{
    color:'#FFFFFF',
    fontSize:20,
    fontWeight:'bold',
  },
  iconBack:{
    textAlignVertical:'center',
    marginRight:15,
  },
  contenCard:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#ffffff',
    marginVertical:10,
    paddingVertical:10,
    borderRadius:10,
    elevation:5,
    marginHorizontal:16,
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
  footer:{
    flex:4,
    paddingTop:20,
  },
  wrapperDetails:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:16,
    marginVertical:10,
  },
  amount:{
    backgroundColor:'#ffffff',
    paddingLeft:16,
    paddingVertical:5,
    borderRadius:10,
    elevation:5,
    width:'50%',
    marginRight:5,
  },
  balance:{
    backgroundColor:'#ffffff',
    paddingLeft:16,
    paddingVertical:5,
    borderRadius:10,
    elevation:5,
    width:'50%',
  },
  date:{
    backgroundColor:'#ffffff',
    paddingLeft:16,
    paddingVertical:5,
    borderRadius:10,
    elevation:5,
    width:'50%',
    marginRight:5,
  },
  time:{
    backgroundColor:'#ffffff',
    paddingLeft:16,
    paddingVertical:5,
    borderRadius:10,
    elevation:5,
    width:'50%',
  },
  detailTitle:{
    color:'#7A7886',
    fontSize:16,
    marginVertical:5,
  },
  total:{
    color:'#514F5B',
    fontSize:18,
    fontWeight:'bold',
    marginVertical:5,
  },
  note:{
    backgroundColor:'#ffffff',
    paddingLeft:16,
    paddingVertical:5,
    borderRadius:10,
    elevation:5,
    marginHorizontal:16,
    marginVertical:10,
  },
  buttonFilled:{
    marginTop:50,
    textAlign:'center',
    fontSize:18,
    color:'#FFFFFF',
    fontWeight:'bold',
    lineHeight:25,
    paddingVertical:10,
    marginHorizontal:20,
    borderRadius:10,
    backgroundColor:'#6379F4',
    shadowColor:'rgba(100, 87, 87, 0.05)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.58,
    shadowRadius: 75,

    elevation:3,
  },
});
