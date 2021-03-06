import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';

import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import globalStyles from '../shared/globalStyles';
import Feather from 'react-native-vector-icons/Feather';
import {addAmountNoteCreator} from '../redux/actions/transaction';


const InputAmount = ({route,navigation}) => {

    //data from redux auth
    const loginUser = useSelector((state)=>state.auth.data);

    //data from redux user
    const user = useSelector((state)=>state.user.user);

    //filter data profile from user
    const userProfile = user.filter(value=>{return value.id === loginUser.id;});

  const dispatch = useDispatch();
  const [form,setForm] = useState({
    amount:null,
    note:null,
    isValidNote:false,
    isValidAmount:false,
    zeroBalance : null,
  });

  const handleInputAmount = (val)=>{
    if (val.trim().length > 0){
      setForm({
        ...form,
        amount:val.toLocaleString('id',{style:'currency',currency:'IDR'}),
        isValidAmount:true,
      });
    } else {
      setForm({
        ...form,
        amount:val,
        isValidAmount:false,
      });
    }
  };

  const handleInputNote = (val)=>{
    if (val.trim().length > 0){
      setForm({
        ...form,
        note:val,
        isValidNote:true,
      });
    } else {
      setForm({
        ...form,
        note:val,
        isValidNote:false,
      });
    }
  };

  const handleContinue = () => {
    const data = {
      amount: form.amount,
      note: form.note,
    };
    if (userProfile[0].balance === 0){
      setForm({
        ...form,
        zeroBalance:'sorry your balance is not enough!',
      });
    } else {
      dispatch(addAmountNoteCreator(data));
      navigation.navigate('Confirmation',{item});
    }
  };

  const {item} = route.params;
  const regex = /localhost/;
  const newUrlImage = item.avatar.replace(regex,'192.168.43.233');

  return (
    <ScrollView style={globalStyles.container}>
      <StatusBar barStyle="default" backgroundColor="#6379F4"/>
      <View style={Styles.header}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Search')}
        style={Styles.back}>
          <Feather style={Styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
          <Text style={Styles.text}>Transfer</Text>
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
        {form.zeroBalance === null ? null : <Text style={Styles.noMoney}>{form.zeroBalance}</Text>}
        <TextInput
        style={Styles.inputBlank}
        placeholder="0.00"
        placeholderTextColor="#B5BDCC"
        keyboardType="numeric"
        onChangeText={handleInputAmount}
        />
        <Text style={Styles.description}>{userProfile[0].balance.toLocaleString('id',{style:'currency',currency:'IDR'})} Available</Text>
        {form.isValidNote ?
        <View style={Styles.formNoteFilled}>
          <Feather style={Styles.iconNote} name="edit-2" size={25} color="#6379F4"/>
          <TextInput
          style={Styles.textNote}
          placeholder="Add some notes"
          placeholderTextColor="rgba(169, 169, 169, 0.8)"
          onChangeText={handleInputNote}
          />
        </View>
        :
        <View style={Styles.formNoteBlank}>
          <Feather style={Styles.iconNote} name="edit-2" size={25} color="rgba(169, 169, 169, 0.6)"/>
          <TextInput
          style={Styles.textNote}
          placeholder="Add some notes"
          placeholderTextColor="rgba(169, 169, 169, 0.8)"
          onChangeText={handleInputNote}
          />
        </View>
        }
        {form.isValidAmount ?
        <TouchableOpacity onPress={handleContinue}>
          <Text style={Styles.buttonFilled}>Continue</Text>
        </TouchableOpacity>
        :
        <Text style={Styles.buttonBlank}>Continue</Text>
        }
      </View>
    </ScrollView>
  );
};

export default InputAmount;

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
    paddingBottom:30,
  },
  inputBlank:{
    fontSize:42,
    alignSelf:'center',
    marginVertical:20,
    color:'#6379F4',
  },
  description:{
    color:'#7C7895',
    fontSize:16,
    fontWeight:'bold',
    alignSelf:'center',
  },
  formNoteBlank:{
    flexDirection:'row',
    borderBottomWidth:1.5,
    borderBottomColor:'rgba(169, 169, 169, 0.6)',
    marginHorizontal:16,
    marginTop:60,
  },
  formNoteFilled:{
    flexDirection:'row',
    borderBottomWidth:1.5,
    borderBottomColor:'#6379F4',
    marginHorizontal:16,
    marginTop:60,
  },
  iconNote:{
    textAlignVertical:'center',
    marginRight:10,
  },
  textNote:{
    fontSize:16,
  },
  buttonBlank:{
    marginTop:50,
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
  noMoney:{
    marginTop:15,
    textAlign:'center',
    color:'#FF5B37',
    fontWeight:'bold',
    fontSize:16,
  },
});
