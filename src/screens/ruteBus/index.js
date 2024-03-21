import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {IcChevronLeft, IcSearch} from '../../assets/icons';
import {
  BusCard,
  HeaderMain,
  NotificationIcon,
  SearchBar,
} from '../../components';
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
      {/* HEADER */}
      <HeaderMain
        sectionTitle={section}
        showLeftButton={true}
        onPressBack={() => navigation.goBack()}
      />

      {/* CONTENT */}
      <View style={styles.content}>
        {/* Search Bar */}
        <SearchBar
          placeholder="Cari bus"
          searchValue={searchBus}
          setSearchValue={text => setSearchBus(text)}
        />

        {/* List Bus */}
        <View style={{marginTop: 24}}>
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
                    busName: dataBus.busName,
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
