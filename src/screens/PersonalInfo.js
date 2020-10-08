import React from 'react';
import {useSelector} from 'react-redux';

import { View, Text,StatusBar, StyleSheet,ScrollView, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import globalStyles from '../shared/globalStyles';


const PersonalInfo = ({navigation}) => {

  const user = useSelector((state)=>state.auth.data);

  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(99, 121, 244, 0.2)" />
      <View style={Styles.header}>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Profile')}
          style={Styles.back}>
          <Feather name="arrow-left" size={30}/>
          <Text style={Styles.textHeader}>Personal Information</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.footer}>
        <ScrollView>
          <Text style={Styles.textFooter}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</Text>
          <View style={Styles.detailProfile}>
            <Text style={Styles.detailTitle}>First Name</Text>
            <Text style={Styles.info}>{user.username.split(' ')[0]}</Text>
          </View>
          <TouchableOpacity style={Styles.detailProfile}>
            <Text style={Styles.detailTitle}>Last Name</Text>
            <Text style={Styles.info}>{user.username.split(' ')[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.detailProfile}>
            <Text style={Styles.detailTitle}>Verified E-mail</Text>
            <Text style={Styles.info}>{user.email}</Text>
          </TouchableOpacity>
          <View style={Styles.detailProfilePhone}>
            <View>
              <Text style={Styles.detailTitle}>Phone Number</Text>
              <Text style={Styles.info}>{user.phone}</Text>
            </View>
            <TouchableOpacity style={Styles.textPhoneWrapper}>
              <Text style={Styles.textPhone}>Manage</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PersonalInfo;

const Styles = StyleSheet.create({
  header:{
    flex:2,
    justifyContent:'center',
  },
  back:{
    marginHorizontal:16,
    flexDirection:'row',
  },
  textHeader:{
    color:'#4D4B57',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:20,
  },
  footer:{
    flex:12,
    paddingTop:10,
  },
  textFooter:{
    fontSize:16,
    color:'#7A7886',
    marginHorizontal:16,
    width:'95%',
  },
  edit:{
    marginVertical:15,
    flexDirection:'row',
    justifyContent:'center',
  },
  textEdit:{
    color:'#7A7886',
    fontSize:16,
    marginLeft:10,
  },
  name:{
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold',
    color:'#4D4B57',
    marginVertical:10,
  },
  phone:{
    textAlign:'center',
    fontSize:16,
    color:'#7A7886',
    marginBottom:30,
  },
  detailProfile:{
    marginHorizontal:16,
    marginVertical:10,
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:'#E5E8ED',
    borderRadius:10,
    elevation:2,
  },
  detailTitle:{
    color:'#4D4B57',
    fontSize:16,
    fontWeight:'normal',
    marginVertical:5,
  },
  info:{
    fontSize:22,
    fontWeight:'bold',
    color:'#514F5B',
    marginVertical:5,
  },
  detailProfilePhone:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginHorizontal:16,
    marginVertical:10,
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:'#E5E8ED',
    borderRadius:10,
    elevation:2,
  },
  textPhoneWrapper:{
    justifyContent:'center',
  },
  textPhone:{
    fontSize:14,
    color:'#6379F4',
  },
});
