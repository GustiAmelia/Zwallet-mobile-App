import React from 'react';
import {useDispatch,useSelector} from 'react-redux';

import { View, Text,StatusBar, StyleSheet,ScrollView, TouchableOpacity, Image,Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import globalStyles from '../shared/globalStyles';

import {logOut} from '../redux/actions/auth';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';


const Profile = ({navigation}) => {

  const sheetRef = React.createRef();
  const fall = new Animated.Value(1);

  const renderHeader = ()=>(
    <View style={Styles.headerButton}>
      <View style={Styles.panelHeader}>
        <View style={Styles.panelHandle}/>
      </View>
    </View>
  );

  const takePhotoFromCamera = ()=>{
    console.log('take photo');
  };

  const choosePhotoFromLibrary = ()=>{
    console.log('choose photo');
  };

  const renderInner = ()=>(
    <View style={Styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={Styles.panelTitle}>Upload Photo</Text>
        <Text style={Styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={Styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={Styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={Styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.panelButton}
        onPress={() => sheetRef.current.snapTo(1)}>
        <Text style={Styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const user = useSelector((state)=>state.auth.data);

  const regex = /localhost/;
  const newUrlImage = user.avatar.replace(regex,'192.168.43.73');


  const dispatch = useDispatch();

  const makeSureSingOut = () =>
    Alert.alert(
      'Sing Out',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => navigation.navigate('Profile'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => dispatch(logOut())},
      ],
      { cancelable: false }
    );

  const handleSingOutButton = ()=>{
    return makeSureSingOut();
  };

  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(99, 121, 244, 0.2)" />
      <BottomSheet
      ref = {sheetRef}
      snapPoints = {[330,0]}
      renderContent ={renderInner}
      renderHeader = {renderHeader}
      initialSnap={1}
      callbackNode ={fall}
      enabledGestureInteraction ={true}
      />
      <Animated.View style={Styles.header}>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Home')}
          style={Styles.back}>
          <Feather name="arrow-left" size={30}/>
        </TouchableOpacity>
      </Animated.View>
      <View style={Styles.footer}>
        <ScrollView>
          {user.avatar !== '' ?
            <Image
            style={Styles.image}
            source={{uri:newUrlImage}}/>
            :
            <Feather
            style={Styles.imageNoPict}
            name="user" size={70} color="#6379F4"
            />
          }
          <TouchableOpacity
          onPress={()=>sheetRef.current.snapTo(0)}
          style={Styles.edit}>
            <Feather name="edit-2" size={20} color="#7A7886"/>
            <Text style={Styles.textEdit}>Edit</Text>
          </TouchableOpacity>
          <Text style={Styles.name}>{user.firstname} {user.lastname}</Text>
          <Text style={Styles.phone}>{user.phone}</Text>
          <TouchableOpacity
            onPress={()=>navigation.navigate('PersonalInfo')}
            style={Styles.detailProfile}>
            <Text style={Styles.textDetail}>Personal Information</Text>
            <Feather name="arrow-right" size={25} color="#7E7D84"/>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.detailProfile}>
            <Text style={Styles.textDetail}>Change Password</Text>
            <Feather name="arrow-right" size={25} color="#7E7D84"/>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.detailProfile}>
            <Text style={Styles.textDetail}>Change PIN</Text>
            <Feather name="arrow-right" size={25} color="#7E7D84"/>
          </TouchableOpacity>
          <View style={Styles.detailProfile}>
            <Text style={Styles.textDetail}>Notification</Text>
          </View>
          <TouchableOpacity
            onPress={handleSingOutButton}
            style={Styles.logout}>
            <Text style={Styles.textDetail}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;

const Styles = StyleSheet.create({
  header:{
    flex:1,
    justifyContent:'center',
  },
  back:{
    marginHorizontal:16,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  headerButton: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginVertical:10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#6379F4',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  footer:{
    flex:8,
    paddingTop:10,
  },
  image:{
    width:90,
    height:90,
    borderRadius:10,
    alignSelf:'center',
  },
  imageNoPict:{
    width:90,
    height:90,
    backgroundColor:'#EBEEF2',
    borderRadius:10,
    textAlignVertical:'center',
    alignSelf:'center',
    textAlign:'center',
  },
  edit:{
    marginVertical:15,
    flexDirection:'row',
    justifyContent:'center',
  },
  textEdit:{
    color:'#7A7886',
    fontSize:16,
    marginLeft:10,
  },
  name:{
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold',
    color:'#4D4B57',
    marginVertical:10,
  },
  phone:{
    textAlign:'center',
    fontSize:16,
    color:'#7A7886',
    marginBottom:30,
  },
  detailProfile:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:16,
    marginVertical:10,
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:'#E5E8ED',
    borderRadius:10,
    elevation:2,
  },
  textDetail:{
    color:'#4D4B57',
    fontSize:16,
    fontWeight:'bold',
  },
  logout:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:16,
    marginTop:10,
    marginBottom:40,
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:'#E5E8ED',
    borderRadius:10,
    elevation:2,
  },
});
