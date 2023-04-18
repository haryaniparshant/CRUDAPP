import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
  Index: IndexScreen
},
{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = createAppContainer(navigator)
export default () => {
  return <Provider>
    <App/>
  </Provider>
}
