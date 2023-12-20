import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Item from './Item';

const ItemList = () => {
  return (
    <View>
      <Text>ItemList</Text>
    </View>
  )
};

export default ItemList;

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
});
