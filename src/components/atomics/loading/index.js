import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0279FC" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
