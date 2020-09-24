/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import Login from './src/screens/Login';
// import SignUp from './src/screens/SingUp';
// import SplashScreen from './src/screens/SplashScreen';
// import Home from './src/screens/Home';
// import CreatePin from './src/screens/CreatePin';
// import History from './src/screens/History';
// import Search from './src/screens/Search';
import InputAmount from './src/screens/InputAmount';


const App = () => {
  return (
      <NavigationContainer>
        {/* <SplashScreen/> */}
        {/* <Login/> */}
        {/* <SignUp/> */}
        {/* <CreatePin/> */}
        {/* <Home/> */}
        {/* <History/> */}
        {/* <Search/> */}
        <InputAmount/>
      </NavigationContainer>
  );
};


export default App;
