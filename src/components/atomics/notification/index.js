import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcNotification} from '../../../assets';
import {Badge} from 'react-native-elements';
export default function NotificationIcon({
  isNotification,
  onPress,
  notifValue,
}) {
  const iconChange = isNotification ? 'notifications-unread' : 'notifications';
  return (
    <TouchableOpacity style={styles.notification}>
      <IcNotification width={28} height={28} />
      {notifValue && (
        <Badge
          containerStyle={styles.badgeStyle}
          value={notifValue}
          status="error"
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  badgeStyle: {
    position: 'absolute',
    width: 8,
    height: 8,
    top: -2,
    right: 1,
  },
});
