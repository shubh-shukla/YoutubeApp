import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Menu from './Menu';

const Home = ({navigation}) => {
  return <Menu />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
  },
});

export default Home;
