import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../../../constants';

export default function MainModal({
  title = 'Login Gagal',
  desc = 'Proses login gagal, silahkan coba lagi beberapa saat',
}) {
  return (
    <Modal style={styles.card}>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 240,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 8,
    elevation: 1,
  },
  title: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: 16,
    color: Color.DANGER,
  },
  desc: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    color: Color.BLACK,
    textAlign: 'center',
    maxWidth: 330,
  },
});
