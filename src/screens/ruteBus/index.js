import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {IcChevronLeft, IcSearch} from '../../assets/icons';
import {BusCard, NotificationIcon} from '../../components';
import styles from './styles';
import {ImgBusTrans} from '../../assets/images';
import {FlatList} from 'react-native';

const RuteBus = props => {
  const {route, navigation} = props;
  const {section} = route.params;

  const [searchBus, setSearchBus] = useState('');
  const dataBus = [
    {
      id: 1,
      busName: 'Trans Banyumas 042',
      halteName: 'Ht. SMAN 1 ',
      destinationName: 'Ht. Telkom',
    },
    {
      id: 2,
      busName: 'Trans Banyumas 030',
      halteName: 'Ht. Gerilya',
      destinationName: 'Ht. UMP',
    },
    {
      id: 3,
      busName: 'Trans Banyumas 012',
      halteName: 'Ht. UMP',
      destinationName: 'Ht. Gerilya',
    },
    {
      id: 4,
      busName: 'Trans Banyumas 016',
      halteName: 'Ht. Notog',
      destinationName: 'Ht. RSM',
    },
  ];

  const filteredBusData = dataBus.filter(
    dataBus =>
      dataBus.busName.toLowerCase().includes(searchBus.toLowerCase()) ||
      dataBus.halteName.toLowerCase().includes(searchBus.toLowerCase()) ||
      dataBus.destinationName.toLowerCase().includes(searchBus.toLowerCase()),
  );

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
        </View>
        <View style={styles.dividerStyle} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.searchBox}>
              <IcSearch />
              <TextInput
                placeholder="Cari bus"
                style={styles.placeholder}
                value={searchBus}
                onChangeText={text => setSearchBus(text)}
              />
            </View>
            <View
              style={{marginTop: 24, flexDirection: 'column', gap: 20}}></View>
          </View>
        </ScrollView>
        <View style={{paddingHorizontal: 16, marginTop: 10}}>
          <FlatList
            data={filteredBusData}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <BusCard
                imgSource={<ImgBusTrans />}
                busName={item.busName}
                halteName={item.halteName}
                destinationName={item.destinationName}
                onPress={() => {
                  navigation.navigate('DetailRuteBus', {
                    section: 'Rute Bus',
                  });
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default RuteBus;
