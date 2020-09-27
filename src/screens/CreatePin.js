import React, {useState,useEffect,useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {pinInput} from '../redux/actions/auth';

import { View, Text,StatusBar, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from '../shared/globalStyles';

const CreatePin = ({navigation}) => {

  const username = useSelector((state)=>state.auth.data.username);
  const dispatch = useDispatch();

  const [pin,setPin] = useState({
    pin1:null,
    pin2:null,
    pin3:null,
    pin4:null,
    pin5:null,
    pin6:null,
  });

  const pin1ref = useRef(null);
  const pin2ref = useRef(null);
  const pin3ref = useRef(null);
  const pin4ref = useRef(null);
  const pin5ref = useRef(null);
  const pin6ref = useRef(null);

  useEffect(()=>{
    if (pin.pin1 === null){
      return pin1ref.current.focus();
    }
  });

  const createPin = pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;

  const handleConfirm = ()=>{
    dispatch(pinInput(createPin,username));
  };

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="rgba(99, 121, 244, 0.2)" />
        <View style={Styles.header}>
          <Text style={Styles.textHeader}>Zwallet</Text>
        </View>
        <View style={Styles.footer}>
          <Text style={Styles.title}>Create Security PIN</Text>
          <Text style={Styles.text}>Create a PIN that’s contain 6 digits number for security purpose in Zwallet.</Text>
          <View style={Styles.formPin}>
            <TextInput
            style={Styles.inputPin}
            ref={pin1ref}
            maxLength={1}
            placeholder="__"
            keyboardType="numeric"
            onChangeText={(val)=>{setPin({...pin,pin1:val});
            if (val !== null){
              pin2ref.current.focus();
            }}}
            placeholderTextColor="rgba(169, 169, 169, 0.4)"
            value={pin.pin1}
            />
            <TextInput
            style={Styles.inputPin}
            ref={pin2ref}
            maxLength={1}
            placeholder="__"
            keyboardType="numeric"
            onChangeText={(val)=>{setPin({...pin,pin2:val});
            if (val !== null){
              pin3ref.current.focus();
            }}}
            value={pin.pin2}
            placeholderTextColor="rgba(169, 169, 169, 0.4)"
            />
            <TextInput
            style={Styles.inputPin}
            ref={pin3ref}
            maxLength={1}
            placeholder="__"
            keyboardType="numeric"
            onChangeText={(val)=>{setPin({...pin,pin3:val});
            if (val !== null){
              pin4ref.current.focus();
            }}}
            value={pin.pin3}
            placeholderTextColor="rgba(169, 169, 169, 0.4)"
            />
            <TextInput
            style={Styles.inputPin}
            ref={pin4ref}
            maxLength={1}
            placeholder="__"
            keyboardType="numeric"
            onChangeText={(val)=>{setPin({...pin,pin4:val});
            if (val !== null){
              pin5ref.current.focus();
            }}}
            value={pin.pin4}
            placeholderTextColor="rgba(169, 169, 169, 0.4)"
            />
            <TextInput
            style={Styles.inputPin}
            ref={pin5ref}
            maxLength={1}
            placeholder="__"
            keyboardType="numeric"
            onChangeText={(val)=>{setPin({...pin,pin5:val});
            if (val !== null){
              pin6ref.current.focus();
            }}}
            value={pin.pin5}
            placeholderTextColor="rgba(169, 169, 169, 0.4)"
            />
            <TextInput
            style={Styles.inputPin}
            ref={pin6ref}
            maxLength={1}
            placeholder="__"
            keyboardType="numeric"
            onChangeText={(val)=>{setPin({...pin,pin6:val});
            if (val !== null){
              pin1ref.current.focus();
            }}}
            value={pin.pin6}
            placeholderTextColor="rgba(169, 169, 169, 0.4)"
            />
          </View>
          {createPin.length === 6 ?
          <TouchableOpacity onPress={handleConfirm,()=>navigation.navigate('PinSuccess')
          }>
            <Text style={Styles.buttonFilled}>Confirm</Text>
          </TouchableOpacity>
          :
          <Text style={Styles.buttonBlank}>Confirm</Text>
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePin;

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
    marginHorizontal:15,
    fontSize:16,
    lineHeight:23,
    color:'rgba(58, 61, 66, 0.6)',
  },
  formPin:{
    flexDirection:'row',
    justifyContent:'center',
    marginHorizontal:22,
    marginVertical:30,
  },
  inputPin:{
    color:'#3A3D42',
    fontSize:24,
    borderWidth:1,
    borderRadius:10,
    borderColor:'rgba(169, 169, 169, 0.6)',
    marginHorizontal:5,
    paddingHorizontal:10,
    textAlign:'center',
    textAlignVertical:'bottom',
    shadowColor:'rgba(147, 147, 147, 0.1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 75,

  },
  formFilled:{
    flexDirection:'row',
    borderBottomWidth:1.5,
    borderBottomColor:'#6379F4',
    marginHorizontal:16,
    marginVertical:8,
  },
  buttonBlank:{
    marginTop:100,
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
    marginTop:100,
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
