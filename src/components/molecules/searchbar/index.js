import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {IcSearch} from '../../../assets';
import {Color} from '../../../constants';

const SearchBar = ({clicked, searchValue, setSearchValue, setClicked}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <IcSearch weight={24} height={24} />
        <TextInput
          style={styles.input}
          placeholder="Cari Layanan"
          value={searchValue}
          onChangeText={setSearchValue}
          onFocus={() => {
            setClick(true);
          }}
        />
      </View>
      {clicked && (
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            Keyboard.dismiss();
            setClicked(false);
          }}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    padding: 10,
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: Color.BLACK,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 14,
    marginLeft: 16,
    width: '70%',
  },
  cancelButton: {
    marginLeft: 8,
  },
  cancelText: {
    color: Color.BLUE,
  },
});
