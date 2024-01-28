import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function LoadingIndicator() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
}
