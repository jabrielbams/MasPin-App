import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ReportCard() {
  return (
    <View style={styles.container}>
      <Text>ReportCard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    elevation: 3,
  },
});
