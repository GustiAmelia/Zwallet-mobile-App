import React, {useState} from 'react';
import { View, Text,StatusBar, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import globalStyles from '../shared/globalStyles';

const Failed = ({navigation}) => {


  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#6379F4" />
      <View style={Styles.header}>
        <Text style={Styles.textHeader}>Transfer Details</Text>
      </View>
      <View style={Styles.footer}>
        <ScrollView>
          <Feather style={Styles.iconCheck} name="x" size={40} color="#ffffff"/>
          <Text style={Styles.description}>Transfer Failed</Text>
          <Text style={Styles.descriptionDetails}>We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</Text>
          <View style={Styles.wrapperDetails}>
            <View style={Styles.amount}>
              <Text style={Styles.detailTitle}>Amount</Text>
              <Text style={Styles.total}>Rp100.000</Text>
            </View>
            <View style={Styles.balance}>
              <Text style={Styles.detailTitle}>Balance Left</Text>
              <Text style={Styles.total}>Rp70.000</Text>
            </View>
          </View>
          <View style={Styles.wrapperDetails}>
            <View style={Styles.date}>
              <Text style={Styles.detailTitle}>Date</Text>
              <Text style={Styles.total}>May 11, 2020</Text>
            </View>
            <View style={Styles.time}>
              <Text style={Styles.detailTitle}>Time</Text>
              <Text style={Styles.total}>12.20</Text>
            </View>
          </View>
          <View style={Styles.note}>
            <Text style={Styles.detailTitle}>Notes</Text>
            <Text style={Styles.total}>For buying some socks</Text>
          </View>
          <Text style={Styles.text}>From</Text>
          <View style={Styles.contenCard}>
            <View style={Styles.content}>
              <Image
              style={Styles.image}
              source={require('../../assets/avatar.png')}/>
              <View style={Styles.textContent}>
                <Text style={Styles.textName}>Samuel Suhi</Text>
                <Text style={Styles.phone}>7928750293580</Text>
              </View>
            </View>
          </View>
          <Text style={Styles.text}>To</Text>
          <View style={Styles.contenCard}>
            <View style={Styles.content}>
              <Image
              style={Styles.image}
              source={require('../../assets/avatar.png')}/>
              <View style={Styles.textContent}>
                <Text style={Styles.textName}>Samuel Suhi</Text>
                <Text style={Styles.phone}>7928750293580</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={Styles.button}>Try Again</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Failed;

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
    backgroundColor:'#FF5B37',
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
  descriptionDetails:{
    marginHorizontal:20,
    textAlign:'center',
    fontSize:16,
    color:'#7A7886',
    marginVertical:15,
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
    width:56,
    height:56,
    borderRadius:10,
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
