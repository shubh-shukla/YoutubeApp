import React from 'react';

import {ScrollView, Text, View} from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

type ActionsListData = {
  id: string;
  createdAt: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: number;
  user: {name: string; image: string; subscribers: string};
  views: number;
  tags: string;
  likes: number;
  dislikes: number;
};

export default function ActionsList({props}: {props: ActionsListData}) {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.actionListContainer}>
      <View style={styles.actionListItem}>
        <AntDesignIcon.Button
          iconStyle={styles.actionListItemIcon}
          name="like2"
          size={25}
          style={styles.actionListItemButton}>
          <Text style={styles.actionListItemText}>{props.likes}</Text>
        </AntDesignIcon.Button>
      </View>
      <View style={styles.actionListItem}>
        <AntDesignIcon.Button
          iconStyle={styles.actionListItemIcon}
          name="dislike2"
          size={25}
          style={styles.actionListItemButton}>
          <Text style={styles.actionListItemText}>{props.dislikes}</Text>
        </AntDesignIcon.Button>
      </View>
      <View style={styles.actionListItem}>
        <EntypoIcon.Button
          iconStyle={styles.actionListItemIcon}
          name="chat"
          size={25}
          style={styles.actionListItemButton}>
          <Text style={styles.actionListItemText}>Live chat</Text>
        </EntypoIcon.Button>
      </View>
      <View style={styles.actionListItem}>
        <MaterialCommunityIcons.Button
          iconStyle={styles.actionListItemIcon}
          name="share"
          size={25}
          style={styles.actionListItemButton}>
          <Text style={styles.actionListItemText}>Share</Text>
        </MaterialCommunityIcons.Button>
      </View>
      <View style={styles.actionListItem}>
        <MaterialCommunityIcons.Button
          iconStyle={styles.actionListItemIcon}
          name="arrow-collapse-down"
          size={25}
          style={styles.actionListItemButton}>
          <Text style={styles.actionListItemText}>Download</Text>
        </MaterialCommunityIcons.Button>
      </View>
      <View style={styles.actionListItem}>
        <MaterialCommunityIcons.Button
          iconStyle={styles.actionListItemIcon}
          name="plus-box-multiple-outline"
          size={25}
          style={styles.actionListItemButton}>
          <Text style={styles.actionListItemText}>Save</Text>
        </MaterialCommunityIcons.Button>
      </View>
    </ScrollView>
  );
}
