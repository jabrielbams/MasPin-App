import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Color, FontSize, Fonts} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  FeatureIcon,
  LabelStatus,
  NewsCardMain,
  NotificationIcon,
  SearchBar,
} from '../../components';
import styles from './styles';
import {
  IcChevronRightActive,
  IconBusRoute,
  IconChartPrice,
  IconOthers,
  IconReport,
  IconTax,
} from '../../assets/icons';

const HomeScreen = () => {
  return (
    <View style={styles.mainBody}>
      <ScrollView>
        <View>
          <View style={styles.headerMain}>
            <Text style={styles.headerText}>Beranda</Text>
            <NotificationIcon style={{marginLeft: 'auto'}} />
          </View>
          <View style={styles.dividerStyle} />
          <View style={styles.content}>
            <View
              style={{
                backgroundColor: Color.LIGHT_GRAY,
                borderRadius: 8,
                height: 140,
                width: '100%',
                marginBottom: 24,
                marginTop: 32,
              }}></View>
            <View style={styles.featureList}>
              <FeatureIcon icon={<IconReport />} label="Laporan" />
              <FeatureIcon icon={<IconTax />} label="Pajak" />
              <FeatureIcon icon={<IconBusRoute />} label="Rute" />
              <FeatureIcon icon={<IconChartPrice />} label="Harga" />
              <FeatureIcon icon={<IconOthers />} label="Lainnya" />
            </View>
          </View>
          <View style={styles.dividerStyle} />
          <View style={styles.content}>
            <View style={styles.sectionDivider}>
              <Text style={styles.sectionTitle}>Laporan</Text>
              <TouchableOpacity style={styles.otherStyle}>
                <Text style={styles.otherText}>Lainnya</Text>
                <IcChevronRightActive />
              </TouchableOpacity>
            </View>
            <View>
              <Text>Laporan Section</Text>
            </View>
            <View style={styles.sectionDivider}>
              <Text style={styles.sectionTitle}>Berita Terbaru</Text>
              <TouchableOpacity style={styles.otherStyle}>
                <Text style={styles.otherText}>Lainnya</Text>
                <IcChevronRightActive />
              </TouchableOpacity>
            </View>
            <View>
              <Text>Berita Section</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
