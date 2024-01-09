import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcLikes, IcLikesActive} from '../../../assets/icons';

export default function LikeButton() {
  return (
    <TouchableOpacity>
      <IcLikes />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
