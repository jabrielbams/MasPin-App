import {View, Text} from 'react-native';
import React from 'react';
import {NotificationIcon} from '../../components';
import styles from './styles';

const ActivityScreen = () => {
  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <Text style={styles.headerText}>Aktivitas</Text>
          <NotificationIcon style={{marginLeft: 'auto'}} />
        </View>
        <View style={styles.dividerStyle} />
      </View>
    </View>
  );
};

export default ActivityScreen;
