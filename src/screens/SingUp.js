import React, {useState} from 'react';
import { useDispatch,useSelector} from 'react-redux';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar,ScrollView,Keyboard,TouchableWithoutFeedback } from 'react-native';
import globalStyles from '../shared/globalStyles';
import Feather from 'react-native-vector-icons/Feather';

import {signup} from '../redux/actions/auth';

const SignUp = ({navigation}) => {

  const isSuccessRegister = useSelector((state)=>state.auth.isSuccessRegister);
  const messageRegister = useSelector((state)=>state.auth.messageRegister);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username:null,
    email: null,
    password: null,
    isValidUsername:false,
    isValidEmail:false,
    isValidPassword:false,
    messageEmail:null,
    messagePassword:null,
  });

  const handleUsername = (val)=>{
    if (val.trim().length >= 4){
      setForm({
        ...form,
        username:val,
        isValidUsername:true,
      });
    } else {
      setForm({
        ...form,
        username:val,
        isValidUsername:false,
      });
    }
  };

  const handleEmail = (val)=>{
    if (val.trim().length > 0){
      setForm({
        ...form,
        email:val,
        isValidEmail:true,
        messageEmail:null,
      });
    } else {
      setForm({
        ...form,
        email:val,
        isValidEmail:false,
      });
    }
  };

  const [data,setData] = useState({
    secureTextEntry: true,
  });

  const handlePassword = (val)=>{
    if (val.trim().length > 0){
      setForm({
        ...form,
        password:val,
        isValidPassword:true,
        messagePassword:null,
      });
    } else {
      setForm({
        ...form,
        password:val,
        isValidPassword:false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleSingUp = ()=>{
    const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
    const checkEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!checkEmail.test(form.email)){
      setForm({
        ...form,
        messageEmail:'Invalid Email',
      });
    }
    else if (!checkPass.test(form.password)){
      setForm({
        ...form,
        messagePassword:'Password must contain at least 1 number, and be longer than 8 charaters.',
      });
    }
    else {
      dispatch(signup(form.username,form.email,form.password));
      setForm({
        ...form,
        messageEmail:null,
        messagePassword:null,
      })
    }
  };

  console.log(form.messageEmail);
  console.log(form.messagePassword);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor="rgba(99, 121, 244, 0.2)" />
        <View style={Styles.header}>
          <Text style={Styles.textHeader}>Zwallet</Text>
        </View>
        <View style={Styles.footer}>
          <ScrollView>
            <Text style={Styles.title}>Sign Up</Text>
            <Text style={Styles.text}>Create your account to access Zwallet.</Text>
            {isSuccessRegister ? null : <Text style={Styles.errorMessage}>{messageRegister}</Text>}
            {form.isValidUsername ?
              <View style={Styles.formFilled}>
                <Feather
                style={Styles.icon}
                name="user" size={20} color="#6379F4"/>
                <TextInput
                  style={Styles.textInput}
                  placeholder="Enter your username"
                  placeholderTextColor="rgba(169, 169, 169, 0.8)"
                  autoCapitalize="none"
                  onChangeText={handleUsername}
                />
              </View>
            :
            <View style={Styles.formBlank}>
              <Feather
              style={Styles.icon}
              name="user" size={20} color="rgba(169, 169, 169, 0.6)"/>
              <TextInput
                style={Styles.textInput}
                placeholder="Enter your username"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                autoCapitalize="none"
                onChangeText={handleUsername}
              />
            </View>
            }
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
            {form.messageEmail === null ?
              null
              :
              <Text style={Styles.errorMessage}>{form.messageEmail}</Text>
            }
            {form.isValidPassword ?
              <View style={Styles.formFilled}>
              <Feather
              style={Styles.icon}
              name="lock" size={20} color="#6379F4"/>
              <TextInput
                style={Styles.textInput}
                placeholder="Create your password"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                autoCapitalize="none"
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={handlePassword}
              />
              <View style={Styles.iconSecurity}>
                <TouchableOpacity
                  onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?
                      <Feather
                          name="eye-off"
                          color="rgba(169, 169, 169, 0.6)"
                          size={20}
                      />
                      :
                      <Feather
                          name="eye"
                          color="rgba(169, 169, 169, 0.6)"
                          size={20}
                      />
                    }
                </TouchableOpacity>
              </View>
            </View>
            :
            <View style={Styles.formBlank}>
              <Feather
              style={Styles.icon}
              name="lock" size={20} color="rgba(169, 169, 169, 0.6)"/>
              <TextInput
                style={Styles.textInput}
                placeholder="Create your password"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                autoCapitalize="none"
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={handlePassword}
              />
              <View style={Styles.iconSecurity}>
                <TouchableOpacity
                  onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?
                      <Feather
                          name="eye-off"
                          color="rgba(169, 169, 169, 0.6)"
                          size={20}
                      />
                      :
                      <Feather
                          name="eye"
                          color="rgba(169, 169, 169, 0.6)"
                          size={20}
                      />
                    }
                </TouchableOpacity>
              </View>
            </View>
            }
            {form.messagePassword === null ?
              null
              :
              <Text style={Styles.errorMessage}>{form.messagePassword}</Text>
            }
            {form.isValidEmail && form.isValidPassword && form.isValidUsername ?
            <TouchableOpacity onPress={handleSingUp}>
              <Text style={Styles.buttonSignUpFilled}>Sign Up</Text>
            </TouchableOpacity>
            :
            <Text style={Styles.buttonSignUpBlank}>Sign Up</Text>
            }
            <View style={Styles.question}>
              <Text style={Styles.textQuestion}>Already have an account? Let’s </Text>
              <TouchableOpacity>
                <Text style={Styles.textLink} onPress={()=>navigation.navigate('Login')}>Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

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
    paddingTop:10,
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
  buttonSignUpBlank:{
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
  buttonSignUpFilled:{
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
  question:{
    marginVertical:25,
    flexDirection:'row',
    marginHorizontal:55,
  },
  textQuestion:{
    fontSize:16,
    color:'#88888F',
  },
  textLink:{
    fontSize:16,
    color:'#6379F4',
    fontWeight:'bold',
  },
  errorMessage:{
    textAlign:'center',
    color:'#FF5B37',
    fontWeight:'bold',
    fontSize:16,
    marginHorizontal:16,
  },
});

