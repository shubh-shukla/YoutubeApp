import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const BottomSheet = ({setStart}) => {
  const height = useWindowDimensions().height;

  const styles = StyleSheet.create({
    bottomSheet: {
      position: 'absolute',
      backgroundColor: 'white',
      height: height,
      width: '100%',
      zIndex: 1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
      borderBottomColor: 'whitesmoke',
      elevation: 1,
      borderBottomWidth: 2,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      width: '100%',
    },
  });
  const config = {
    stiffness: 100,
    overshootClamping: false,
  };

  return (
    <View>
      <View style={[styles.bottomSheet]}>
        <View style={styles.header}>
          <Text style={{fontSize: 16, fontWeight: '900'}}>Description</Text>
          <Feather
            // onPress={() => setStart(false)}
            name="x"
            size={24}
            color="black"
          />
        </View>
        <Text style={{padding: 10}}>Building Youtube</Text>
      </View>
    </View>
  );
};

export default BottomSheet;
