import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';

import { View, Text,StatusBar, StyleSheet ,SectionList, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import globalStyles from '../shared/globalStyles';
import { DateTime } from 'luxon';
import CardAllHistory from '../components/CardAllHistory';

import {incomeCreator,outCreator} from '../redux/actions/transaction';
import { FlatList } from 'react-native-gesture-handler';

const startOfTheWeek = DateTime.local().startOf('week').toISODate();
const endOfTheWeek = DateTime.local()
  .startOf('week')
  .plus({ days: 7 })
  .toISODate();
const startOfTheMonth = DateTime.local().startOf('month').toISODate();
const endOfTheMonth = DateTime.local()
  .startOf('month')
  .plus({ days: 30 })
  .toISODate();

const History = ({navigation}) => {

  const dispatch = useDispatch();

  const loginUser = useSelector((state)=>state.auth.data);
  const allHistory = useSelector((state)=>state.transaction.allHistory);
  const dataIn = useSelector((state)=>state.transaction.income);
  const dataOut = useSelector((state)=>state.transaction.out);
  console.log(dataIn);
  console.log(dataOut);

  const transferIn = allHistory.filter(value=>{return value.receiver_id === loginUser.id;});
  const transferOut = allHistory.filter(value=>{return value.receiver_id !== loginUser.id;});


  // const thisWeek = allHistory.filter((history) => {
  //   return (
  //     DateTime.fromISO(history.date.split(' ')[0]).toISODate() >=
  //       startOfTheWeek &&
  //     DateTime.fromISO(history.date.split(' ')[0]).toISODate() <= endOfTheWeek
  //   );
  // });
  // const thisMonth = allHistory.filter((history) => {
  //   return (
  //     !thisWeek.includes(history) &&
  //     DateTime.fromISO(history.date.split(' ')[0]).toISODate() >=
  //       startOfTheMonth &&
  //     DateTime.fromISO(history.date.split(' ')[0]).toISODate() <= endOfTheMonth
  //   );
  // });

  // const historyData = [
  //   {
  //     date: 'This Week',
  //     data: thisWeek,
  //   },
  //   {
  //     date: 'This Month',
  //     data: thisMonth,
  //   },
  // ];

  const handleArrowDown = ()=>{
    dispatch(incomeCreator(transferIn));
    dispatch(outCreator(null));
  };

  const handleArrowUp = ()=>{
    dispatch(outCreator(transferOut));
    dispatch(incomeCreator(null));
  };

  const handleBack = ()=>{
    navigation.navigate('Home');
    dispatch(outCreator(null));
    dispatch(incomeCreator(null));
  };

  let listHistory;
  if (dataIn === null && dataOut === null){
    const thisWeek = allHistory.filter((history) => {
      return (
        DateTime.fromISO(history.date.split(' ')[0]).toISODate() >=
          startOfTheWeek &&
        DateTime.fromISO(history.date.split(' ')[0]).toISODate() <= endOfTheWeek
      );
    });
    const thisMonth = allHistory.filter((history) => {
      return (
        !thisWeek.includes(history) &&
        DateTime.fromISO(history.date.split(' ')[0]).toISODate() >=
          startOfTheMonth &&
        DateTime.fromISO(history.date.split(' ')[0]).toISODate() <= endOfTheMonth
      );
    });
    const historyData = [
      {
        date: 'This Week',
        data: thisWeek,
      },
      {
        date: 'This Month',
        data: thisMonth,
      },
    ];

    listHistory =
              <SectionList
              style={Styles.sectionList}
              sections={historyData}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <CardAllHistory item={item} />}
              renderSectionHeader={({ section: { date, data } }) =>
                data.length === 0 ? null : (
                  <View>
                    <Text style={Styles.date}>{date}</Text>
                  </View>
                )
              }
              />
  }
  else if (dataIn !== null){
    const thisWeek = dataIn.filter((history) => {
      return (
        DateTime.fromISO(history.date.split(' ')[0]).toISODate() >=
          startOfTheWeek &&
        DateTime.fromISO(history.date.split(' ')[0]).toISODate() <= endOfTheWeek
      );
    });
    const thisMonth = dataIn.filter((history) => {
      return (
        !thisWeek.includes(history) &&
        DateTime.fromISO(history.date.split(' ')[0]).toISODate() >=
          startOfTheMonth &&
        DateTime.fromISO(history.date.split(' ')[0]).toISODate() <= endOfTheMonth
      );
    });
    const historyData = [
      {
        date: 'This Week',
        data: thisWeek,
      },
      {
        date: 'This Month',
        data: thisMonth,
      },
    ];
    listHistory = <SectionList
                  style={Styles.sectionList}
                  sections={historyData}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => <CardAllHistory item={item} />}
                  renderSectionHeader={({ section: { date, data } }) =>
                    data.length === 0 ? null : (
                      <View>
                        <Text style={Styles.date}>{date}</Text>
                      </View>
                    )
                  }
                  />
  }
  else {
    const thisWeek = dataOut.filter((history) => {
      return (
        DateTime.fromISO(history.date.split(' ')[0]).toISODate() >=
          startOfTheWeek &&
        DateTime.fromISO(history.date.split(' ')[0]).toISODate() <= endOfTheWeek
      );
    });
    const thisMonth = dataOut.filter((history) => {
      return (
        !thisWeek.includes(history) &&
        DateTime.fromISO(history.date.split(' ')[0]).toISODate() >=
          startOfTheMonth &&
        DateTime.fromISO(history.date.split(' ')[0]).toISODate() <= endOfTheMonth
      );
    });
    const historyData = [
      {
        date: 'This Week',
        data: thisWeek,
      },
      {
        date: 'This Month',
        data: thisMonth,
      },
    ];
    listHistory = <SectionList
                  style={Styles.sectionList}
                  sections={historyData}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => <CardAllHistory item={item} />}
                  renderSectionHeader={({ section: { date, data } }) =>
                    data.length === 0 ? null : (
                      <View>
                        <Text style={Styles.date}>{date}</Text>
                      </View>
                    )
                  }
                  />
  }

  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#6379F4" />
      <View style={Styles.header}>
        <TouchableOpacity onPress={handleBack} style={Styles.contentHeader}>
          <Feather style={Styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
          <Text style={Styles.textHeader}>History</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.footer}>
        {listHistory}
        <View style={Styles.filterButton}>
          <TouchableOpacity onPress={handleArrowUp}>
            <Feather style={Styles.iconButton} name="arrow-up" size={30} color="#FF5B37"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleArrowDown}>
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
  date: {
    color: '#7A7886',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    padding: 15,
    fontWeight: 'bold',
  },

});
