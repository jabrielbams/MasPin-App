import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import {IcChevronLeft, IcClock} from '../../../assets/icons';
import {
  BusScheduleLine,
  BusScheduleTime,
  HalteBoxCard,
  NotificationIcon,
  TimeBox,
} from '../../../components';
import styles from './styles';
import {ImgMapBus, ImgRute} from '../../../assets/images';
import {Color, FontSize, Fonts} from '../../../constants';
import LineSchedule from '../../../components/atomics/line-schedule';
import BusScheduleCard from '../../../components/molecules/bus-schedule-card';

const DetailRuteBus = props => {
  const {route, navigation} = props;
  const {section} = route.params;
  return (
    <View style={styles.mainBody}>
      <View style={styles.headerMain}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6,
          }}>
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
          <View
            style={{
              width: '100%',
              backgroundColor: Color.LIGHT_GRAY,
              height: 130,
            }}
          />
          <View style={{marginVertical: 20, flexDirection: 'column', gap: 8}}>
            <Text
              style={{
                color: Color.BLACK,
                fontFamily: Fonts.SEMIBOLD,
                fontSize: FontSize.dp_16,
              }}>
              Trans Banyumas 042
            </Text>
            <Text
              style={{
                color: Color.TEXTPRIMARY,
                fontFamily: Fonts.REGULAR,
                fontSize: FontSize.dp_12,
                lineHeight: 20,
              }}>
              Trans banyumas dengan kode 042 memiliki 12 rute perjalanan dengan
              waktu operasi dari jam 9 pagi sampai 5 sore.
            </Text>
          </View>

          <View style={{flexDirection: 'column', gap: 8}}>
            <Text
              style={{
                color: Color.BLACK,
                fontFamily: Fonts.SEMIBOLD,
                fontSize: FontSize.dp_16,
              }}>
              Rute
            </Text>
            <View>
              <BusScheduleLine
                halteName="Ht. Pancurawis"
                timeDeparture="08.04"
                timeArrival="08.10"
                lineActive={true}
                dotActive={true}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailRuteBus;
