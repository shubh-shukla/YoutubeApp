import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  // ScrollView,
  FlatList,
} from 'react-native';

import Video from 'react-native-video';
import BottomSheet from '@gorhom/bottom-sheet';

import EntypoIcon from 'react-native-vector-icons/Entypo';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ActionsList from './ActionsList';
import VideoCard from '../../components/VideoCard';

import formatNumber from '../../utilities/NumberFormat';

import video from '../../assets/data/video.json';
import videos from '../../assets/data/videos.json';

import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const VideoScreen = () => {
  // const bottomSheetRef = useRef<BottomSheet>(null);

  // const snapPoints = useMemo(() => ['25%', '50%'], []);

  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(-1);

  const handleClick = () => {
    setIsBottomSheetOpen(0);
  };

  return (
    <SafeAreaView>
      <Video
        source={{
          uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
        }}
        controls={true}
        paused={true}
        style={styles.video}
      />
      {/* <Video
        source={{uri: video.videoUrl}} // Can be a URL or a local file.
        paused={false}
        // ref={(ref: any) => {
        //   this.player = ref;
        // }} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        style={styles.video}
      /> */}
      {/* <Image
        style={styles.thumbnail}
        source={{
          uri: video.thumbnail,
        }}
      /> */}
      <View style={styles.videoDescription}>
        <View style={styles.description}>
          <Text style={styles.tags}>{video.tags}</Text>
          <Text style={styles.title}>{video.title}</Text>
          <View style={styles.videoInfo}>
            <Text style={styles.views}>{formatNumber(video.views)} views</Text>
            <EntypoIcon name="dot-single" size={16} color={'#000'} />
            <Text style={styles.older}>{video.createdAt}</Text>
          </View>
        </View>
        <View style={styles.collapseButton}>
          <EntypoIcon.Button
            style={styles.collapseIcon}
            name="chevron-small-down"
            // size={14}
            color={'#000'}
            // backgroundColor={'rgba(0, 0, 0, 0)'}
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
      <ActionsList props={video} />
      <View style={styles.channel}>
        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image,
          }}
        />
        <View style={styles.channelInfo}>
          <Text style={styles.channelName}>{video.user.name}</Text>
          <Text style={styles.subscriberCount}>
            {video.user.subscribers} subscribers
          </Text>
        </View>
        <Text style={styles.subscribeButton}>SUBSCRIBE</Text>
      </View>
      <TouchableOpacity onPress={handleClick} style={styles.commentsContainer}>
        <View style={styles.commentsHeader}>
          <Text style={styles.commentTitle}>Comments</Text>
          <Text style={styles.commentCount}>234</Text>
        </View>
        <View style={styles.commentsContainerCollapsed}>
          <Image
            style={styles.commentatorImage}
            source={{uri: video.user.image}}
          />
          <View>
            <Text style={styles.comment}>{'Nice Video'}</Text>
          </View>
        </View>
        <BottomSheet
          index={isBottomSheetOpen}
          snapPoints={['70%']}
          onClose={() => setIsBottomSheetOpen(-1)}>
          <View>
            <Text>This is the bottom sheet content</Text>
          </View>
        </BottomSheet>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const VideoScreenWithRecommendation = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={videos}
        renderItem={({item}) => <VideoCard key={`${item.id}`} props={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={VideoScreen}
      />
    </SafeAreaView>
  );
};

export default VideoScreenWithRecommendation;
