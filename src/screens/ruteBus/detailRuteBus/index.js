import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
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

  const dataBus = [
    {
      id: 1,
      halteName: 'Ht. Gerilya',
      timeDeparture: '08.00',
      timeArrival: '08.04',
      lineActive: true,
      dotActive: true,
    },
    {
      id: 2,
      halteName: 'Ht. Pancurawis',
      timeDeparture: '08.28',
      timeArrival: '08.32',
      lineActive: false,
      dotActive: true,
    },
    {
      id: 3,
      halteName: 'Ht. Ps Manis',
      timeDeparture: '09.40',
      timeArrival: '09.44',
      lineActive: false,
      dotActive: false,
    },
    {
      id: 4,
      halteName: 'Ht. Ps Wage ',
      timeDeparture: '10.20',
      timeArrival: '10.24',
      lineActive: false,
      dotActive: false,
    },
  ];

  return (
    <View style={styles.mainBody}>
      <View style={styles.headerMain}>
        <View style={styles.innerHeader}>
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
              // ...StyleSheet.absoluteFillObject,
            }}>
            {/* <MapView style={styles.map} provider={PROVIDER_GOOGLE}></MapView> */}
          </View>
          <View style={styles.busSection}>
            <Text style={styles.sectionText}>Trans Banyumas 042</Text>
            <Text style={styles.descBus}>
              Trans banyumas dengan kode 042 memiliki 12 rute perjalanan dengan
              waktu operasi dari jam 9 pagi sampai 5 sore.
            </Text>
          </View>

          <View style={{flexDirection: 'column', gap: 8}}>
            <Text style={styles.sectionText}>Rute</Text>
            <View>
              <FlatList
                data={dataBus}
                keyExtractor={item => item._id}
                renderItem={({item}) => (
                  <BusScheduleLine
                    halteName={item.halteName}
                    timeDeparture={item.timeDeparture}
                    timeArrival={item.timeArrival}
                    lineActive={item.lineActive}
                    dotActive={item.dotActive}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailRuteBus;
