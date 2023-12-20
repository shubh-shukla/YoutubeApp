import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const NotificationDetail = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}>
      <Avatar
        rounded
        source={{
          uri: 'https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj',
        }}
        containerStyle={{marginRight: 10, marginTop: -20}}
      />
      <View>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={{width: 210, fontSize: 12}}>
          Building Youtube
        </Text>
        <Text style={{fontSize: 12, color: 'gray'}}>30 minutes ago</Text>
      </View>
      <Image
        source={{
          uri: 'https://i.ytimg.com/vi/QiTq5WrWoJw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-J3nWP0aGwfUPQAKoz8T7R0absg',
        }}
        style={styles.image}
      />
      <EntypoIcon
        name="dots-three-vertical"
        style={{position: 'absolute', right: 5}}
        size={12}
        color="black"
      />
    </View>
  );
};

export default NotificationDetail;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 10,
  },
});
