import React from 'react';
import {View, Text, Platform} from 'react-native';
import WebView from 'react-native-webview';

const WebViewComponent = ({videoId}) => {
  return (
    <WebView
      source={{
        uri: `https://www.youtube.com/embed/${videoId}?playsinline=1&autoplay=1`,
      }}
      startInLoadingState={true}
      javaScriptEnabled={true}
      allowsInlineMediaPlayback={true}
      mediaPlaybackRequiresUserAction={
        Platform.OS !== 'android' || Platform.Version >= 17 ? false : undefined
      }
      //   allowsFullscreenVideo={ false }
      //   style={{
      // flex: 1,
      // height: '100%',
      // width: '100%',
      // aspectRatio: 16 / 9,
      // resizeMode: 'cover',
      //   }}
    />
  );
};

export default WebViewComponent;
