import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {IcSearch} from '../../../assets';
import {Color, FontSize, Fonts} from '../../../constants';

const SearchBar = ({placeholder, searchValue, setSearchValue}) => {
  return (
    <View style={styles.searchBox}>
      <IcSearch />
      <TextInput
        style={styles.placeholder}
        placeholder={placeholder}
        value={searchValue}
        onChangeText={setSearchValue}
      />
    </View>
  );
};

export default SearchBar;

// styles
const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: Color.TEXTFIELD,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 12,
    gap: 15,
  },
  placeholder: {
    color: Color.TEXTBOX,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_14,
    width: '80%',
    alignItems: 'center',
  },
});
