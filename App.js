import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Color, FontSize, Fonts} from './src/constants';
import {InputField, ButtonMain, CustomCheckbox} from './src/components';
import {IcEyeClose, IcEyeOpen} from './src/assets/icons';
import RegisterScreen from './src/screens/register';

const App = () => {
  return (
    <View style={styles.mainBody}>
      <RegisterScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignContent: 'flex-start',
    backgroundColor: Color.WHITE,
  },
});
