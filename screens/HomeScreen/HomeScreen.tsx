import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';

import VideoCard from '../../components/VideoCard';

import DATA from '../../assets/data/videos.json';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({item}) => <VideoCard key={`${item.id}`} props={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
