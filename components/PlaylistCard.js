import React, {useState, useEffect} from 'react';
import {FlatList, Image, StyleSheet, View, Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {selectVideo, setVideo} from '../features/videoSlice';
import formatDuration from '../utilities/TimeFormat';
import formatNumber from '../utilities/NumberFormat';
import VideoDescription from './VideoDescription';

export default function PlaylistCard({item}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          // navigation.navigate('Video');
          // dispatch(
          //   setVideo({
          //     video: item,
          //   }),
          // );
        }}
        key={item.playlist.playlistId}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: item.playlist.thumbnails.at(-1).url,
          }}
        />
        {!item.playlist.isLiveNow && (
          <View style={styles.playlist}>
            <View style={styles.playlistBand}>
              <MaterialCommunityIcons
                style={styles.playlistIcon}
                name="playlist-play"
                size={15}
                color="white"
              />
              <Text style={styles.playlistText}>Playlist</Text>
            </View>
            <Text style={styles.playlistText}>
              {item.playlist.stats.videos} {'videos'}
            </Text>
          </View>
        )}
      </TouchableWithoutFeedback>
      {/* <VideoDescription item={item} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 12,
    color: 'gray',
  },
  parentContainer: {},
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  playlist: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 20,
    width: '100%',
    paddingHorizontal: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  playlistBand: {
    flexDirection: 'row',
  },
  playlistIcon: {
    marginHorizontal: 3,
  },
  playlistText: {
    color: 'white',
    fontSize: 10,
  },
});
