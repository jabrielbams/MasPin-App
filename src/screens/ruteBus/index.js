import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {IcChevronLeft, IcSearch} from '../../assets/icons';
import {BusCard, NotificationIcon} from '../../components';
import styles from './styles';

const RuteBus = props => {
  const {route, navigation} = props;
  const {section} = route.params;

  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <View style={styles.title}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <IcChevronLeft />
            </TouchableOpacity>
            <Text style={styles.headerText}>{section}</Text>
          </View>
          <NotificationIcon style={{marginLeft: 'auto'}} />
        </View>
        <View style={styles.dividerStyle} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.searchBox}>
              <IcSearch />
              <TextInput placeholder="Cari bus" style={styles.placeholder} />
            </View>
            <View style={{marginTop: 24, flexDirection: 'column', gap: 20}}>
              {/* <BusCard /> */}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RuteBus;
