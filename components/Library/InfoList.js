import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

const InfoList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialIcons name="history" size={28} color="black" />
        <Text style={styles.text}>History</Text>
      </View>
      <View style={styles.icon}>
        <Foundation name="play-video" size={25} color="black" />
        <Text style={styles.text}>Your videos</Text>
      </View>
      <View style={styles.icon}>
        <AntDesign name="download" size={24} color="black" />
        <Text style={styles.text}>Downloads</Text>
      </View>
      <View style={styles.icon}>
        <MaterialIcons name="local-movies" size={24} color="black" />
        <Text style={styles.text}>Your movies</Text>
      </View>
      <View style={styles.icon}>
        <MaterialIcons name="history-toggle-off" size={24} color="black" />
        <Text style={styles.text}>Watch later</Text>
      </View>
    </View>
  );
};

export default InfoList;

const styles = StyleSheet.create({
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  container: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 12,
    borderTopColor: 'lightgray',
    borderTopWidth: 0.5,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
  },
  text: {
    marginLeft: 30,
  },
});
