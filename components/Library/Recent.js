import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Recent = () => {
  const data = [];

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={{uri: item.img}} style={styles.image} />
        <View style={styles.description}>
          <View style={styles.text}>
            <Text numberOfLines={2} style={{fontSize: 14, fontWeight: '600'}}>
              {item.title}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600', color: 'gray'}}>
              {item.name}
            </Text>
          </View>
          <EntypoIcon
            name="dots-three-vertical"
            style={{position: 'absolute', right: 5, top: 10}}
            size={12}
            color="black"
          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 90,
    resizeMode: 'cover',
  },
  description: {
    marginLeft: 6,
  },
  text: {
    maxWidth: '90%',
  },
  container: {
    marginRight: 2,
    marginLeft: 8,
    width: 170,
    height: 150,
  },
});
