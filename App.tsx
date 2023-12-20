/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Provider} from 'react-redux';
import store from './app/store';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Homescreen from './screens/Homescreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import UploadScreen from './screens/UploadScreen';
import Library from './screens/Library';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Home'}
          tabBarOptions={{
            labelStyle: {
              color: 'black',
            },
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <EntypoIcon
                    name="home"
                    style={{textDecorationColor: 'black'}}
                    size={24}
                    color="black"
                  />
                ) : (
                  <SimpleLineIcons name="home" size={20} color="black" />
                ),
            }}
            name="Home"
            component={Homescreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialIcons name="explore" size={24} color="black" />
              ),
            }}
            name="Explore"
            component={Homescreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <AntDesign
                  name="pluscircleo"
                  size={35}
                  color="black"
                />
              ),
              tabBarLabel: () => {
                return null;
              },
            }}
            name="Upload"
            component={UploadScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons
                  name="youtube-subscription"
                  size={24}
                  color="black"
                />
              ),
            }}
            name="Subscription"
            component={SubscriptionScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialIcons name="video-library" size={24} color="black" />
              ),
            }}
            name="Library"
            component={Library}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
