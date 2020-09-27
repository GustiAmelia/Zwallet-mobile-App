import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getLogin} from '../redux/actions/auth';

import { View, Text,StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import globalStyles from '../shared/globalStyles';
import Feather from 'react-native-vector-icons/Feather';

const PinSuccess = ({navigation}) => {

  const data = useSelector((state)=>state.auth.data);
  console.log(data);
  const dispatch = useDispatch();

  const handleLoginNow = ()=>{
    dispatch(getLogin(data.email,data.password));
  };

  return (
      <View style={globalStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="rgba(99, 121, 244, 0.2)" />
        <View style={Styles.header}>
          <Text style={Styles.textHeader}>Zwallet</Text>
        </View>
        <View style={Styles.footer}>
          <Feather style={Styles.iconCheck} name="check" size={40} color="#ffffff"/>
          <Text style={Styles.description}>PIN Successfully Created</Text>
          <Text style={Styles.msg}>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</Text>
          <TouchableOpacity onPress={handleLoginNow}>
            <Text style={Styles.buttonFilled}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default PinSuccess;

const Styles = StyleSheet.create({
  header:{
    flex:3,
    justifyContent:'center',
  },
  textHeader:{
    textAlign:'center',
    color:'#6379F4',
    fontSize:26,
    fontWeight:'bold',
    fontStyle:'normal',
    fontFamily:'Nunito Sans',
    lineHeight:35,
  },
  footer:{
    flex:5,
    backgroundColor:'#ffffff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    shadowColor:'rgba(155, 155, 155, 0.15)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 75,

    elevation:100,
  },
  iconCheck:{
    marginTop:30,
    alignSelf:'center',
    backgroundColor:'#1EC15F',
    padding:10,
    borderRadius:50,
  },
  description:{
    color:'#3A3D42',
    fontSize:24,
    fontWeight:'bold',
    alignSelf:'center',
    marginTop:20,
  },
  msg:{
    textAlign:'center',
    fontSize:16,
    color:'rgba(58, 61, 66, 0.6)',
    marginVertical:20,
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
