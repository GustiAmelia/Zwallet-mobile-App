import React,{useState} from 'react';
import {useSelector} from 'react-redux';

import { View, Text,StatusBar, StyleSheet,TextInput, TouchableOpacity,Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import globalStyles from '../shared/globalStyles';
import Axios from 'axios';


const ChangePassword = ({navigation}) => {

  const user = useSelector((state)=>state.auth.data);
  console.log(user.email)

  const [form, setForm] = useState({
    currentPassword:null,
    newPassword: null,
    repeatPassword: null,
    wrongPassword:null,
    isValidCurrent:false,
    isValidNew:false,
    isValidRepeat:false,
  });

  const handleCurrentPassword = (val)=>{
    if (val.trim().length > 0){
      setForm({
        ...form,
        currentPassword:val,
        isValidCurrent:true,
      });
    } else {
      setForm({
        ...form,
        currentPassword:val,
        isValidCurrent:false,
      });
    }
  };

  const handleNewPassword = (val)=>{
    if (val.trim().length > 0){
      setForm({
        ...form,
        newPassword:val,
        isValidNew:true,
      });
    } else {
      setForm({
        ...form,
        newPassword:val,
        isValidNew:false,
      });
    }
  };


  const handleRepeatPassword = (val)=>{
    if (val.trim().length > 0){
      setForm({
        ...form,
        repeatPassword:val,
        isValidRepeat:true,
      });
    } else {
      setForm({
        ...form,
        repeatPassword:val,
        isValidRepeat:false,
      });
    }
  };

  const [data,setData] = useState({
    secureTextEntryCurrent: true,
    secureTextEntryNew: true,
    secureTextEntryRepeat: true,
  });

  const updateSecureTextEntryCurrent = () => {
    setData({
        ...data,
        secureTextEntryCurrent: !data.secureTextEntryCurrent,
    });
  };
  const updateSecureTextEntryNew = () => {
    setData({
        ...data,
        secureTextEntryNew: !data.secureTextEntryNew,
    });
  };
  const updateSecureTextEntryRepeat = () => {
    setData({
        ...data,
        secureTextEntryRepeat: !data.secureTextEntryRepeat,
    });
  };

const alertChangePassword = () =>
  Alert.alert(
    'Success',
    'Password has been changed',
    [{text: 'OK', onPress: () => navigation.navigate('Profile')}],
    {cancelable: false},
  );

  const handleSubmit = () => {
    setForm({...form, wrongPassword: ''});
    const API = 'http://192.168.43.73:5000/auth/password';
    Axios.post(API, {email: user.email, password: form.currentPassword})
      .then((results) => {
        if (results.data.isSuccess === true){
        const ApiUpdatePassword =
        'http://192.168.43.73:5000/auth/changePassword';
        Axios.patch(ApiUpdatePassword, {
          email: user.email,
          password: form.newPassword,
        })
          .then((res) => alertChangePassword())
          .catch((err) => console.log(err));
        } else {
          setForm({...form, wrongPassword: 'Wrong password!'})
        }
      })
      .catch((err) => console.log(err));
  };




  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(99, 121, 244, 0.2)" />
      <View style={Styles.header}>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Profile')}
          style={Styles.back}>
          <Feather name="arrow-left" size={30}/>
          <Text style={Styles.textHeader}>Change Password</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.footer}>
      <Text style={Styles.textFooter}>You must enter your current password and then type your new password twice.</Text>
        {form.isValidCurrent ?
              <View style={Styles.formFilled}>
              <Feather
              style={Styles.icon}
              name="lock" size={20} color="#6379F4"/>
              <TextInput
                style={Styles.textInput}
                placeholder="Current Password"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                autoCapitalize="none"
                secureTextEntry={data.secureTextEntryCurrent ? true : false}
                onChangeText={handleCurrentPassword}
              />
              <View style={Styles.iconSecurity}>
                <TouchableOpacity
                  onPress={updateSecureTextEntryCurrent}>
                    {data.secureTextEntryCurrent ?
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
                placeholder="Current Password"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                autoCapitalize="none"
                secureTextEntry={data.secureTextEntryCurrent ? true : false}
                onChangeText={handleCurrentPassword}
              />
              <View style={Styles.iconSecurity}>
                <TouchableOpacity
                  onPress={updateSecureTextEntryCurrent}>
                    {data.secureTextEntryCurrent ?
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
          {form.wrongPassword === null ? null :
            <Text style={Styles.wrong}>{form.wrongPassword}</Text>}
          {form.isValidNew ?
            <View style={Styles.formFilled}>
            <Feather
            style={Styles.icon}
            name="lock" size={20} color="#6379F4"/>
            <TextInput
              style={Styles.textInput}
              placeholder="New Password"
              placeholderTextColor="rgba(169, 169, 169, 0.8)"
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntryNew ? true : false}
              onChangeText={handleNewPassword}
            />
            <View style={Styles.iconSecurity}>
              <TouchableOpacity
                onPress={updateSecureTextEntryNew}>
                  {data.secureTextEntryNew ?
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
              placeholder="New Password"
              placeholderTextColor="rgba(169, 169, 169, 0.8)"
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntryNew ? true : false}
              onChangeText={handleNewPassword}
            />
            <View style={Styles.iconSecurity}>
              <TouchableOpacity
                onPress={updateSecureTextEntryNew}>
                  {data.secureTextEntryNew ?
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
          {form.isValidRepeat ?
            <View style={Styles.formFilled}>
              <Feather
              style={Styles.icon}
              name="lock" size={20} color="#6379F4"/>
              <TextInput
                style={Styles.textInput}
                placeholder="Repeat Password"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                autoCapitalize="none"
                secureTextEntry={data.secureTextEntryRepeat ? true : false}
                onChangeText={handleRepeatPassword}
              />
              <View style={Styles.iconSecurity}>
                <TouchableOpacity
                  onPress={updateSecureTextEntryRepeat}>
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
              placeholder="Repeat Password"
              placeholderTextColor="rgba(169, 169, 169, 0.8)"
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntryRepeat ? true : false}
              onChangeText={handleRepeatPassword}
            />
            <View style={Styles.iconSecurity}>
              <TouchableOpacity
                onPress={updateSecureTextEntryRepeat}>
                  {data.secureTextEntryRepeat ?
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
        {form.isValidCurrent && form.isValidNew && form.isValidRepeat ?
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={Styles.buttonFilled}>Change Password</Text>
        </TouchableOpacity>
        :
        <Text style={Styles.buttonBlank}>Change Password</Text>
        }
      </View>
    </View>
  );
};

export default ChangePassword;

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
    fontSize:15,
    color:'#7A7886',
    marginHorizontal:16,
    marginBottom:30,
    lineHeight:27,
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
  buttonBlank:{
    marginTop:120,
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
  buttonFilled:{
    marginTop:120,
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
  wrong:{
    color:'red',
    textAlign:'center',
    marginTop:5,
  },
});
