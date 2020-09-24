import React from 'react';
import { View, Text,FlatList,StyleSheet } from 'react-native';
import CardTransaction from './CardTransaction';

const CardCategoryHistory = ({item}) => {

  const data = [
    {name:'Samuel Suhi', description:'Transfer', total:'+Rp50.000'},
    {name:'Samuel Suhi', description:'Transfer', total:'+Rp50.000'},
  ];
  return (
    <View>
      <Text style={Styles.categoryName}>{item.category}</Text>
      <FlatList
      data={data}
      renderItem={({item})=>{
        return (
          <CardTransaction item={item}/>
        );
      }}
      />
    </View>
  );
};

export default CardCategoryHistory;

const Styles = StyleSheet.create({
  categoryName:{
    fontSize:16,
    color:'#7A7886',
    marginVertical:15,
    marginHorizontal:16,
  },
});
