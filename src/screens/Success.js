import React  from 'react';
import {useSelector,useDispatch} from 'react-redux';

import { View, Text,StatusBar, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import globalStyles from '../shared/globalStyles';
import moment from 'moment';

import {backToHome} from '../redux/actions/auth';

const Success = ({route,navigation}) => {

  const dispatch = useDispatch();
  const handleBackHome = ()=>{
    dispatch(backToHome());
    navigation.navigate('Home');
  };

  const sender = useSelector((state)=>state.auth.data);
  const amount = useSelector((state)=>state.transaction.amount);
  const note = useSelector((state)=>state.transaction.note);
  const date = moment(new Date()).format('MMMM D,YYYY');
  const time = moment(new Date()).format('HH:mm');

  const {item} = route.params;
  const regex = /localhost/;
  const newUrlImageSender = sender.avatar.replace(regex,'192.168.43.73');
  const newUrlImageReceiver = item.avatar.replace(regex,'192.168.43.73');

  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#6379F4" />
      <View style={Styles.header}>
        <Text style={Styles.textHeader}>Transfer Details</Text>
      </View>
      <View style={Styles.footer}>
        <ScrollView>
          <Feather style={Styles.iconCheck} name="check" size={40} color="#ffffff"/>
          <Text style={Styles.description}>Transfer Success</Text>
          <View style={Styles.wrapperDetails}>
            <View style={Styles.amount}>
              <Text style={Styles.detailTitle}>Amount</Text>
              <Text style={Styles.total}>{amount}</Text>
            </View>
            <View style={Styles.balance}>
              <Text style={Styles.detailTitle}>Balance Left</Text>
              <Text style={Styles.total}>{sender.balance - amount}</Text>
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
          <Text style={Styles.text}>From</Text>
          <View style={Styles.contenCard}>
            <View style={Styles.content}>
            {sender.avatar !== '' ?
              <Image
              style={Styles.image}
              source={{uri:newUrlImageSender}}/>
              :
              <Feather
              style={Styles.imageNoPict}
              name="user" size={40} color="#6379F4"
              />
              }
              <View style={Styles.textContent}>
                <Text style={Styles.textName}>{sender.firstname} {sender.lastname}</Text>
                <Text style={Styles.phone}>{sender.phone}</Text>
              </View>
            </View>
          </View>
          <Text style={Styles.text}>To</Text>
          <View style={Styles.contenCard}>
            <View style={Styles.content}>
              {item.avatar !== '' ?
              <Image
              style={Styles.image}
              source={{uri:newUrlImageReceiver}}/>
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
          <TouchableOpacity onPress={handleBackHome}>
            <Text style={Styles.button}>Back to Home</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Success;

const Styles = StyleSheet.create({
  header:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#6379F4',
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
  },
  textHeader:{
    textAlign:'center',
    color:'#FFFFFF',
    fontSize:20,
    fontWeight:'bold',
  },
  footer:{
    flex:5,
  },
  iconCheck:{
    marginTop:30,
    alignSelf:'center',
    backgroundColor:'#1EC15F',
    padding:10,
    borderRadius:50,
  },
  description:{
    color:'#4D4B57',
    fontSize:22,
    fontWeight:'bold',
    alignSelf:'center',
    marginTop:20,
  },
  wrapperDetails:{
    flexDirection:'row',
    justifyContent:'space-between',
    // justifyContent:'space-around',
    marginHorizontal:16,
    marginVertical:10,
  },
  amount:{
    backgroundColor:'#ffffff',
    paddingLeft:16,
    paddingVertical:5,
    borderRadius:10,
    borderWidth:1,
    width:'45%',
    marginRight:5,
  },
  balance:{
    backgroundColor:'#ffffff',
    paddingLeft:16,
    paddingVertical:5,
    borderRadius:10,
    borderWidth:1,
    width:'45%',
  },
  date:{
    backgroundColor:'#ffffff',
    paddingLeft:16,
    paddingVertical:5,
    borderRadius:10,
    borderWidth:1,
    width:'45%',
    marginRight:5,
  },
  time:{
    backgroundColor:'#ffffff',
    paddingLeft:16,
    paddingVertical:5,
    borderRadius:10,
    borderWidth:1,
    width:'45%',
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
    borderWidth:1,
    marginHorizontal:16,
    marginVertical:10,
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
  text:{
    color:'#514F5B',
    fontSize:18,
    fontWeight:'bold',
    marginHorizontal:16,
    marginVertical:10,
  },
  button:{
    marginVertical:30,
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
