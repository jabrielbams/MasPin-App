import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Color, Fonts} from '../../../constants';

const TabBar = ({tabs, activeTab}) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabItem,
            activeTab === index + 1 ? styles.activeTab : null,
          ]}
          onPress={tab.onPress}>
          <Text
            style={[
              styles.tabText,
              activeTab === index + 1 ? styles.activeTabText : null,
            ]}>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: Color.LIGHT_GRAY,
  },
  activeTab: {
    backgroundColor: Color.PRIMARY,
  },
  tabText: {
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  activeTabText: {
    color: Color.WHITE,
  },
});

export default TabBar;
