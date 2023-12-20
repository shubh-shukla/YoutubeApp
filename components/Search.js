import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

const Search = ({fetchData}) => {
  const [search, setSearch] = React.useState('');
  return (
    <SearchBar
      lightTheme
      clearIcon
      round
      placeholder="Search YouTube"
      onChangeText={setSearch}
      value={search}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      onSubmitEditing={() => fetchData(search)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // height: 100,
    // padding: 0,
    // margin: 0,
    // backgroundColor: 'white',
    // borderWidth: 0,
    // color: 'white',
    // height: 30,
    backgroundColor: 'transparent',
  },
  inputContainerStyle: {
    height: 30,
    padding: 0,
    backgroundColor: '#dce0e3',
  },
  inputStyle: {
    fontSize: 15,
  },
});

export default Search;
