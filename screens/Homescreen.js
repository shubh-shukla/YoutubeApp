import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home';
import {Avatar} from 'react-native-elements';
import Video from '../components/Video';
import Notification from '../components/Notification';
import SearchScreen from '../components/SearchScreen';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Search from '../components/Search';

const Stack = createStackNavigator();

const Homescreen = ({navigation}) => {
  const onNotificationsPress = () => {
    navigation.navigate('Notifications');
  };

  const onSearchPress = () => {
    navigation.navigate('Search');
  };
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: false,
        cardOverlayEnabled: true,
      }}>
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
                onPress={onNotificationsPress}
                name="notifications-outline"
                size={24}
                color="black"
              />
              <EvilIcons
                style={{marginRight: 16}}
                onPress={onSearchPress}
                name="search"
                size={28}
                color="black"
              />
              <Avatar
                rounded
                size={24}
                source={{
                  uri: 'https://lh3.googleusercontent.com/ogw/AGvuzYaoKgW1bJ7XnGu3PeaveC6bqH0BqWlY2rLFeD3kxA=s32-c-mo',
                }}
              />
            </View>
          ),
        }}
        name="HomePage"
        component={Home}
      />
      <Stack.Screen
        name="Video"
        options={{headerShown: false, gestureEnabled: true}}
        component={Video}
      />
      <Stack.Screen
        name="Notifications"
        options={{
          headerRight: () => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 20,
                }}>
                <MaterialIcons
                  style={{marginRight: 20}}
                  name="cast-connected"
                  size={24}
                  color="black"
                />
                <EvilIcons
                  style={{marginRight: 20}}
                  name="search"
                  size={28}
                  color="black"
                />
                <EntypoIcon
                  name="dots-three-vertical"
                  size={16}
                  color="black"
                />
              </View>
            );
          },
        }}
        component={Notification}
      />
      <Stack.Screen
        name="Search"
        options={{
          headerShown: false,
        }}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

export default Homescreen;

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
