import {
  KeyboardAvoidingView,
  SafeAreaView,
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NotificationIcon, SearchBar} from './src/components';
import Logo from './src/assets/icons/ic_notification.svg';

const Home = () => {
  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          marginTop: 32,
        }}>
        <View>
          <SafeAreaView enabled>
            <View style={styles.SectionStyle}>
              <View style={styles.headerMain}>
                <Text
                  style={{
                    fontFamily: Fonts.BOLD,
                    fontSize: 24,
                    color: Color.BLACK,
                    fontWeight: 'bold',
                  }}>
                  Beranda
                </Text>
                <NotificationIcon style={{marginLeft: 'auto'}} />
              </View>
            </View>
            <View style={styles.dividerStyle} />
            <View style={styles.SectionStyle}></View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dividerStyle: {
    marginTop: 16,
    marginBottom: 32,
    height: 4,
    width: '100%',
    backgroundColor: Color.LIGHT_GRAY,
  },
});
