import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  videoDescription: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
  },
  description: {
    // paddingRight: 20,
  },
  tags: {
    color: '#2081e3',
  },
  title: {
    fontSize: 16,
  },
  videoInfo: {
    flexDirection: 'row',
  },
  views: {},
  older: {},
  collapseButton: {
    // marginLeft: 0,
  },
  collapseIcon: {
    padding: 0,
  },
  actionListContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  actionListItem: {
    width: 70,
  },
  actionListItemButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    padding: 5,
    backgroundColor: '#fff',
  },
  actionListItemIcon: {
    justifyContent: 'center',
    marginHorizontal: 10,
    color: '#000',
  },
  actionListItemText: {
    fontSize: 12,
  },
  channel: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
    borderTopColor: '#c1c1c1',
    borderTopWidth: 1,
    borderBottomColor: '#c1c1c1',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  channelInfo: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  channelName: {
    fontSize: 15,
    fontWeight: '500',
  },
  subscriberCount: {
    fontSize: 12,
  },
  subscribeButton: {
    color: '#D82E2F',
    marginHorizontal: 10,
    fontWeight: '600',
    justifyContent: 'center',
  },
  commentsContainer: {
    marginHorizontal: 10,
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  commentsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: 30,
  },
  commentTitle: {
    fontWeight: '600',
    marginRight: 5,
  },
  commentCount: {
    color: '#4b4b4b',
    fontSize: 10,
  },
  commentsContainerCollapsed: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    // marginVertical: 10,
  },
  commentatorImage: {width: 25, height: 25, borderRadius: 20},
  commentatorName: {
    marginLeft: 10,
  },
  comment: {
    marginLeft: 10,
  },
});
