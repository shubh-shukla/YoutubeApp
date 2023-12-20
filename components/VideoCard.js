import React, {useState, useEffect} from 'react';
import {FlatList, Image, StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {selectVideo, setVideo} from '../features/videoSlice';
import formatDuration from '../utilities/TimeFormat';
import formatNumber from '../utilities/NumberFormat';
import VideoDescription from './VideoDescription';

export default function VideoCard({item}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Video');
          dispatch(
            setVideo({
              video: item,
            }),
          );
        }}
        key={item.video.videoId}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: item.video.thumbnails[0].url,
          }}
        />
        {!item.video.isLiveNow && (
          <View style={styles.duration}>
            <Text style={styles.durationText}>
              {formatDuration(item.video.lengthSeconds)}
            </Text>
          </View>
        )}
      </TouchableWithoutFeedback>
      <VideoDescription item={item} />
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
});
