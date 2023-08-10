import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import formatNumber from '../../utilities/NumberFormat';
import formatDuration from '../../utilities/TimeFormat';

type VideoCardProps = {
  id: string;
  createdAt: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: number;
  user: {
    name: string;
    image: string;
  };
  views: number;
};

export default function VideoCard({props}: {props: VideoCardProps}) {
  return (
    <View style={styles.parentContainer}>
      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri: props.thumbnail,
          }}
        />
        <View style={styles.duration}>
          <Text style={styles.durationText}>
            {formatDuration(props.duration)}
          </Text>
        </View>
      </View>
      <View style={styles.videoDescription}>
        <View style={styles.channel}>
          <Image
            style={styles.avatar}
            source={{
              uri: props.user.image,
            }}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.videoInfo}>
            <Text style={styles.channelName}>{props.user.name}</Text>
            <Icon name="dot-single" size={16} color={'#000'} />
            <Text style={styles.views}>{formatNumber(props.views)} views</Text>
            <Icon name="dot-single" size={16} color={'#000'} />
            <Text style={styles.older}>{props.createdAt}</Text>
          </View>
        </View>
        <View style={styles.options}>
          <Icon.Button
            style={styles.optionsIcon}
            name="dots-three-vertical"
            size={14}
            color={'#000'}
            backgroundColor={'rgba(0, 0, 0, 0)'}
            // onPress={this.loginWithFacebook}
          />
          {/* <Image
            style={styles.optionsIcon}
            source={{
              uri: 'https://icons8.com/icon/21622/menu-vertical',
            }}
          /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    // flex: 1,
    // backgroundColor: '##000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  duration: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 3,
  },
  durationText: {
    color: 'white',
    fontSize: 10,
  },
  videoDescription: {
    // paddingRight: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  channel: {},
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  description: {
    flexDirection: 'column',
    flex: 1,
    // backgroundColor: '#ffd5d5',
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
  },
  videoInfo: {
    flexDirection: 'row',
    marginTop: 3,
  },
  channelName: {
    color: '#252526',
    fontSize: 13,
  },
  views: {
    color: '#252526',
    fontSize: 13,
  },
  older: {
    color: '#252526',
    fontSize: 13,
  },
  options: {
    marginLeft: 10,
    // backgroundColor: '#d5d5',
  },
  optionsIcon: {
    padding: 0,
    color: '#000',
    // height: 40,
  },
});
