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

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={clicked ? styles.searchBarClicked : styles.searchBarUnclicked}>
        {/* search Icon */}
        <IcSearch weight={28} height={28} />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Cari Layanan"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {/* {clicked && (
          // view after clicked
        )} */}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
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
  searchBarUnclicked: {
    padding: 12,
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: Color.BLACK,
    borderWidth: 1,
    alignItems: 'center',
  },
  searchBarClicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Add background color for clicked state
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 14,
    marginLeft: 16,
    width: '70%', // Adjust the width of the input field
  },
  cancelButton: {
    marginLeft: 8,
  },
  cancelText: {
    color: Color.BLUE, // Add your desired color
  },
});
