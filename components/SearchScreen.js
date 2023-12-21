import React, {useState, useEffect} from 'react';
import {
  FlatList,
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Search from './Search';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PlaylistCard from './PlaylistCard';

import dummyData from './response.json';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [isFetching, setIsFetching] = useState(false);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async searchString => {
    try {
      setIsFetching(true);
      // const feedData = await search(searchString);
      // console.log('reached here3', feedData?.contents);
      // const feedData = undefined;
      setVideoList(dummyData?.contents);
      setIsFetching(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MaterialIcons
          name="arrow-back"
          size={24}
          color="black"
          onPress={navigation.goBack}
        />
        <Search fetchData={fetchData} />
        <MaterialIcons
          style={{
            backgroundColor: '#dce0e3',
            borderRadius: 13,
            overflow: 'hidden',
          }}
          name="keyboard-voice"
          size={24}
          color="black"
        />
      </View>
      <View>
        {isFetching ? (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
        ) : (
          <FlatList
            data={videoList}
            // keyExtractor={item => item.video.videoId}
            showsVerticalScrollIndicator={false}
            refreshing={false}
            renderItem={({item}) => <PlaylistCard item={item} />}
            // renderItem={({item}) => (
            //   <View>
            //     <Text style={{backgroundColor: 'red'}}>{item.item}</Text>
            //   </View>
            // )}
            // ListHeaderComponent={MenuItem}
          />
        )}
      </View>
      {/* <View>
        <FlatList
          data={[0, 1, 2, 3]}
          // keyExtractor={item => item.video.videoId}
          showsVerticalScrollIndicator={false}
          refreshing={isFetching}
          onRefresh={onRefresh}
          renderItem={item => {
            return (
              <View>
                <Text style={{backgroundColor: 'red'}}>{item.item}</Text>
              </View>
            );
          }}
          // ListHeaderComponent={MenuItem}
        />
      </View> */}
      {/* <View style={{height: 20}} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  gridContainer: {
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
    fontSize: 13,
    maxWidth: '50%',
  },
  views: {
    color: '#252526',
    fontSize: 13,
  },
  publishedTimeText: {
    color: '#252526',
    fontSize: 13,
  },
  options: {
    marginLeft: 10,
  },
  optionsIcon: {
    padding: 0,
    color: '#000',
  },
});

export default SearchScreen;
