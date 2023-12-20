import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectVideo} from '../features/videoSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import VideoReact from './VideoReact';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import BottomSheet from './BottomSheet';

import WebViewComponent from './WebViewComponent';
import formatNumber from '../utilities/NumberFormat';

const Video = () => {
  const {video} = useSelector(selectVideo);
  const navigation = useNavigation();
  const [start, setStart] = useState(false);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Platform.os === 'android' ? StatusBar.currentHeight : 0,
    },
    profile: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5,
      borderTopColor: 'lightgray',
      borderTopWidth: 1,
      borderBottomColor: 'lightgray',
      borderBottomWidth: 1,
      marginLeft: 10,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar />
        <View style={{aspectRatio: 16 / 9, width: '100%', resizeMode: 'cover'}}>
          <WebViewComponent videoId={video.video.videoId} />
        </View>
        <View>
          {start ? <BottomSheet setStart={setStart} /> : null}
          <Pressable onPress={() => setStart(!start)}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingHorizontal: 12,
                  paddingTop: 10,
                  width: 360,
                }}>
                {video.video.title}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                style={{marginLeft: 9}}
                size={29}
                color="black"
              />
            </View>
          </Pressable>
          <View style={{paddingHorizontal: 12, paddingTop: 4}}>
            <Text style={{fontSize: 12, color: 'gray'}}>
              {video.video.isLiveNow
                ? formatNumber(video.video.stats.viewers)
                : formatNumber(video.video.stats.views)}{' '}
              views .{' '}
              {video.video.publishedTimeText
                ? video.video.publishedTimeText
                : ''}
            </Text>
          </View>
          <VideoReact />
          <View style={styles.profile}>
            <Avatar source={{uri: video.video.author.avatar[0].url}} rounded />
            <View style={{marginLeft: 20}}>
              <Text style={{fontSize: 16, fontWeight: '800'}}>
                {video.video.author.title}
              </Text>
              <Text style={{fontSize: 12, color: 'gray'}}>
                900K Subscriber{' '}
              </Text>
            </View>
            <Text
              style={{
                marginLeft: 'auto',
                marginRight: 20,
                color: 'red',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              SUBSCRIBE
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Video;
