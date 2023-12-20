import React from 'react';
import {StyleSheet, Text, Image, View, ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Library/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Avatar} from 'react-native-elements';

const Library = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: null,
          headerLeft: () => (
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/ogw/AGvuzYaoKgW1bJ7XnGu3PeaveC6bqH0BqWlY2rLFeD3kxA=s32-c-mo',
              }}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                marginLeft: 20,
              }}
            />
          ),
          headerRight: () => (
            <View style={styles.right}>
              <MaterialIcons
                style={{marginRight: 20}}
                name="cast-connected"
                size={24}
                color="black"
              />
              <Ionicons
                style={{marginRight: 16}}
                name="notifications-outline"
                size={24}
                color="black"
              />
              <EvilIcons
                style={{marginRight: 16}}
                name="search"
                size={28}
                color="black"
              />
              <Avatar
                rounded
                size={24}
                source={{
                  uri: 'https://lh3.googleusercontent.com/ogw/ADGmqu9qA6SuSp8-plVER9JjMuzlhR233ED1Wy7Sr2UJ=s32-c-mo',
                }}
              />
            </View>
          ),
        }}
        name="HomePage"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default Library;

const styles = StyleSheet.create({
  right: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
});
