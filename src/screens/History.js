import React, {useState} from 'react';
import { View, Text,StatusBar, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import globalStyles from '../shared/globalStyles';
import CardCategory from '../components/CardCategoryHistory';

const History = ({navigation}) => {

  const category = [{category:'This Week'},{category:'This Month'}];

  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#6379F4" />
      <View style={Styles.header}>
        <TouchableOpacity style={Styles.contentHeader}>
          <Feather style={Styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
          <Text style={Styles.textHeader}>History</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.footer}>
        <FlatList
        data={category}
        renderItem={({item})=>{
          return (
            <CardCategory item={item}/>
          );
        }}
        />
        <View style={Styles.filterButton}>
          <TouchableOpacity>
            <Feather style={Styles.iconButton} name="arrow-up" size={30} color="#FF5B37"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather style={Styles.iconButton} name="arrow-down" size={30} color="#1EC15F"/>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonDate}>
            <Text style={Styles.textButton}>Filter by Date</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default History;

const Styles = StyleSheet.create({
  header:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#6379F4',
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
  },
  contentHeader:{
    marginHorizontal:16,
    flexDirection:'row',
  },
  textHeader:{
    textAlign:'center',
    color:'#FFFFFF',
    fontSize:20,
    fontWeight:'bold',
    textAlignVertical:'center',
    marginLeft:15,
  },
  iconBack:{
    textAlignVertical:'center',
  },
  footer:{
    flex:5,
  },
  filterButton:{
    flexDirection:'row',
    marginVertical:15,
    marginHorizontal:16,
  },
  iconButton:{
    padding:10,
    borderRadius:10,
    backgroundColor:'#FFFFFF',
    marginRight:20,
    elevation:5,
  },
  buttonDate:{
    borderRadius:10,
    justifyContent:'center',
    paddingHorizontal:25,
    marginLeft:25,
    backgroundColor:'#FFFFFF',
    elevation:5,
  },
  textButton:{
    fontSize:18,
    color:'#6379F4',
    fontWeight:'bold',
  },

});
