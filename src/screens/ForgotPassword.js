import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { View, Text,StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from '../shared/globalStyles';
import Feather from 'react-native-vector-icons/Feather';

import {getLogin} from '../redux/actions/auth';


const ForgotPassword = ({navigation}) => {

  const login = useSelector((state)=>state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: null,
    isValidEmail:false,
  });

  const handleEmail = (val)=>{
    if (val.trim().length > 0){
      setForm({
        ...form,
        email:val,
        isValidEmail:true,
      });
    } else {
      setForm({
        ...form,
        email:val,
        isValidEmail:false,
      });
    }
  };


  const handleSignIn = ()=>{
    dispatch(getLogin(form.email,form.password));
  };

  if (login){
    return navigation.navigate('Home');
  }


  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(99, 121, 244, 0.2)" />
      <View style={Styles.header}>
        <Text style={Styles.textHeader}>Zwallet</Text>
      </View>
      <View style={Styles.footer}>
        <Text style={Styles.title}>Reset Password</Text>
        <Text style={Styles.text}>Enter your Zwallet e-mail so we can send you a password reset link.</Text>
        {form.isValidEmail ?
          <View style={Styles.formFilled}>
            <Feather
            style={Styles.icon}
            name="mail" size={20} color="#6379F4"/>
            <TextInput
              style={Styles.textInput}
              placeholder="Enter your e-mail"
              placeholderTextColor="rgba(169, 169, 169, 0.8)"
              autoCapitalize="none"
              onChangeText={handleEmail}
            />
          </View>
        :
          <View style={Styles.formBlank}>
            <Feather
            style={Styles.icon}
            name="mail" size={20} color="rgba(169, 169, 169, 0.6)"/>
            <TextInput
              style={Styles.textInput}
              placeholder="Enter your e-mail"
              placeholderTextColor="rgba(169, 169, 169, 0.8)"
              autoCapitalize="none"
              onChangeText={handleEmail}
            />
          </View>
        }
        {form.isValidEmail ?
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={Styles.buttonLoginFilled}>Confirm</Text>
        </TouchableOpacity>
        :
        <Text style={Styles.buttonLoginBlank}>Confirm</Text>
        }
      </View>
    </View>
  );
};

export default ForgotPassword;

const Styles = StyleSheet.create({
  header:{
    flex:1,
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
    flex:3,
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
  title:{
    marginTop:25,
    textAlign:'center',
    fontWeight:'bold',
    fontStyle:'normal',
    fontFamily:'Nunito Sans',
    fontSize:24,
    color: '#3A3D42',
    lineHeight:33,
  },
  text:{
    marginVertical:12.5,
    fontWeight:'normal',
    fontStyle:'normal',
    fontFamily:'Nunito Sans',
    textAlign:'center',
    marginHorizontal:30,
    fontSize:16,
    lineHeight:23,
    color:'rgba(58, 61, 66, 0.6)',
  },
  formFilled:{
    flexDirection:'row',
    borderBottomWidth:1.5,
    borderBottomColor:'#6379F4',
    marginHorizontal:16,
    marginVertical:8,
  },
  formBlank:{
    flexDirection:'row',
    borderBottomWidth:1.5,
    borderBottomColor:'rgba(169, 169, 169, 0.6)',
    marginHorizontal:16,
    marginVertical:8,
  },
  icon:{
    marginBottom:15,
    textAlignVertical:'bottom',
  },
  textInput:{
    fontSize:16,
    marginLeft:18,
    width:'82%',
  },
  iconSecurity:{
    justifyContent:'center',
  },
  buttonLoginBlank:{
    marginTop:30,
    textAlign:'center',
    fontSize:18,
    color:'#88888f',
    fontWeight:'bold',
    lineHeight:25,
    paddingVertical:10,
    marginHorizontal:20,
    borderRadius:10,
    backgroundColor:'#DADADA',
    shadowColor:'rgba(100, 87, 87, 0.05)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.58,
    shadowRadius: 75,

    elevation:3,
  },
  buttonLoginFilled:{
    marginTop:30,
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

