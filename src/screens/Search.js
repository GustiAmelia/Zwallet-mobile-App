import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity,FlatList, TextInput } from 'react-native';
import globalStyles from '../shared/globalStyles';
import Feather from 'react-native-vector-icons/Feather';
import CardContacs from '../components/CardContacts';

const Search = () => {

  const data = [
    {name:'Samuel Suhi', phone:'087174014' },
    {name:'Samuel Suhi', phone:'8249895' },
    {name:'Samuel Suhi', phone:'T8327509235'},
  ];
  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="default" backgroundColor="#6379F4"/>
      <View style={Styles.header}>
        <TouchableOpacity style={Styles.back}>
          <Feather style={Styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
          <Text style={Styles.text}>Find Receiver</Text>
        </TouchableOpacity>
        <View style={Styles.formSearch}>
          <TouchableOpacity style={Styles.iconSearch}>
            <Feather name="search" size={25} color="#A9A9A9"/>
          </TouchableOpacity>
          <TextInput
          placeholder="Search receiver here"
          />
        </View>
      </View>
      <View style={Styles.footer}>
        <View style={Styles.titleWrapper}>
          <Text style={Styles.title}>Contacs</Text>
            <Text style={Styles.description}>{data.length} contacs Found</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({item})=>{
            return (
              <CardContacs item={item}/>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Search;

const Styles = StyleSheet.create({
  header:{
    flex:1,
    backgroundColor:'#6379F4',
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    justifyContent:'center',
  },
  back:{
    flexDirection:'row',
    marginHorizontal:16,
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
  formSearch:{
    marginTop:20,
    marginBottom:5,
    flexDirection:'row',
    borderRadius:10,
    marginHorizontal:16,
    backgroundColor:'#FFFFFF',
  },
  iconSearch:{
    justifyContent:'center',
    marginHorizontal:16,
  },
  footer:{
    flex:3,
  },
  titleWrapper:{
    marginLeft:16,
    marginTop:30,
    marginBottom:10,
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    color:'#514F5B',
    marginBottom:10,
  },
  description:{
    fontSize:14,
    color:'#8F8F8F',
  },

});

