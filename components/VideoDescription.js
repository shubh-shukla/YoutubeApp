import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import formatNumber from '../utilities/NumberFormat';

export default function VideoDescription({item}) {
  return (
    <View style={styles.videoDescription}>
      <View style={styles.channel}>
        <Image
          style={styles.avatar}
          source={{
            uri: item.video.author.avatar[0].url,
          }}
        />
      </View>
      <View style={styles.description}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {item.video.title}
        </Text>
        <View style={styles.videoInfo}>
          <Text style={styles.channelName}>{item.video.author.title}</Text>
          <EntypoIcon name="dot-single" size={14} color={'#000'} />
          <Text style={styles.views}>
            {item.video.isLiveNow
              ? `${formatNumber(item.video.stats.viewers)} watching`
              : `${formatNumber(item.video.stats.views)} views`}
          </Text>
          {!item.video.isLiveNow && (
            <>
              <EntypoIcon name="dot-single" size={14} color={'#000'} />
              <Text style={styles.publishedTimeText}>
                {item.video.publishedTimeText}
              </Text>
            </>
          )}
        </View>
      </View>
      <View style={styles.options}>
        <EntypoIcon.Button
          style={styles.optionsIcon}
          name="dots-three-vertical"
          size={14}
          color={'#000'}
          backgroundColor={'rgba(0, 0, 0, 0)'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  videoDescription: {
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
    fontSize: 11,
    maxWidth: '50%',
  },
  views: {
    color: '#252526',
    fontSize: 11,
  },
  publishedTimeText: {
    color: '#252526',
    fontSize: 11,
  },
  options: {
    marginLeft: 10,
  },
  optionsIcon: {
    padding: 0,
    color: '#000',
  },
});
