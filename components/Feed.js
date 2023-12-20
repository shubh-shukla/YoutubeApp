import React, {useState, useEffect} from 'react';
import {FlatList, Image, StyleSheet, View, Text} from 'react-native';
import MenuItem from './MenuItem';
import {feed} from '../api/api';
import VideoCard from './VideoCard';

const Feed = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [videoList, setVideoList] = useState([]);

  const onRefresh = () => {
    setIsFetching(true);
    fetchData();
    setIsFetching(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const feedData = await feed();
      setVideoList(feedData?.contents);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View>
      <FlatList
        data={videoList}
        keyExtractor={item => item.video.videoId}
        showsVerticalScrollIndicator={false}
        refreshing={isFetching}
        onRefresh={onRefresh}
        renderItem={({item}) => <VideoCard item={item} />}
        ListHeaderComponent={MenuItem}
      />
    </View>
  );
};

export default Feed;
