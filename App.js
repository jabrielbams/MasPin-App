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
import {Color, Fonts} from './src/constants';

const App = () => {
  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          marginTop: 52,
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>{/* SINIH */}</View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    alignContent: 'flex-start',
  },
  SectionStyle: {
    marginHorizontal: 16,
    justifyContent: 'flex-start',
  },
});
