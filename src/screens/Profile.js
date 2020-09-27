import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import { View, Text,StatusBar, StyleSheet,ScrollView, TouchableOpacity, Image,Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import globalStyles from '../shared/globalStyles';

import {logOut} from '../redux/actions/auth';


const Profile = ({navigation}) => {

  const dispatch = useDispatch();

  const makeSureSingOut = () =>
    Alert.alert(
      'Sing Out',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => navigation.navigate('Profile'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => dispatch(logOut())},
      ],
      { cancelable: false }
    );

  const handleSingOutButton = ()=>{
    return makeSureSingOut();
  };

  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(99, 121, 244, 0.2)" />
      <View style={Styles.header}>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Home')}
          style={Styles.back}>
          <Feather name="arrow-left" size={30}/>
        </TouchableOpacity>
      </View>
      <View style={Styles.footer}>
        <ScrollView>
          <Image
            style={Styles.image}
            source={require('../../assets/avatar.png')}/>
          <TouchableOpacity style={Styles.edit}>
            <Feather name="edit-2" size={20} color="#7A7886"/>
            <Text style={Styles.textEdit}>Edit</Text>
          </TouchableOpacity>
          <Text style={Styles.name}>Robert Chandler</Text>
          <Text style={Styles.phone}>+62 813-9387-7946</Text>
          <TouchableOpacity style={Styles.detailProfile}>
            <Text style={Styles.textDetail}>Personal Information</Text>
            <Feather name="arrow-right" size={25} color="#7E7D84"/>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.detailProfile}>
            <Text style={Styles.textDetail}>Change Password</Text>
            <Feather name="arrow-right" size={25} color="#7E7D84"/>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.detailProfile}>
            <Text style={Styles.textDetail}>Change PIN</Text>
            <Feather name="arrow-right" size={25} color="#7E7D84"/>
          </TouchableOpacity>
          <View style={Styles.detailProfile}>
            <Text style={Styles.textDetail}>Notification</Text>
          </View>
          <TouchableOpacity
            onPress={handleSingOutButton}
            style={Styles.logout}>
            <Text style={Styles.textDetail}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;

const Styles = StyleSheet.create({
  header:{
    flex:1,
    justifyContent:'center',
  },
  back:{
    marginHorizontal:16,
  },
  footer:{
    flex:8,
    paddingTop:10,
  },
  image:{
    width:90,
    height:90,
    borderRadius:10,
    alignSelf:'center',
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
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:16,
    marginVertical:10,
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:'#E5E8ED',
    borderRadius:10,
    elevation:2,
  },
  textDetail:{
    color:'#4D4B57',
    fontSize:16,
    fontWeight:'bold',
  },
  logout:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:16,
    marginTop:10,
    marginBottom:40,
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:'#E5E8ED',
    borderRadius:10,
    elevation:2,
  },
});
