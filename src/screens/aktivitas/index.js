import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  LabelCategory,
  LabelStatus,
  NotificationIcon,
  ReportCardMain,
  TabBar,
} from '../../components';
import {ENDPOINT} from '../../utils/endpoint';
import {getReportByUserId} from '../../services/reportData';
import styles from './styles';

const ActivityScreen = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  const fetchReportData = async () => {
    setLoading(true);
    try {
      const data = await getReportByUserId();
      setReportData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReportData();
  }, []);

  const renderItem = ({item}) => (
    <ReportCardMain
      key={item._id}
      imgReport={item.image_laporan}
      descReport={item.detail_masalah}
      category={<LabelCategory title={item.kategori_masalah} />}
      status={<LabelStatus type={item.status} />}
    />
  );

  const filteredReportData = reportData.filter(
    report => report.status === activeTab,
  );

  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <Text style={styles.headerText}>Aktivitas</Text>
          <NotificationIcon style={{marginLeft: 'auto'}} />
        </View>
        <View style={styles.dividerStyle} />
        <View style={{marginHorizontal: 16}}>
          <TabBar
            tabs={[
              {title: 'Menunggu', onPress: () => setActiveTab(1)},
              {title: 'Proses', onPress: () => setActiveTab(2)},
              {title: 'Selesai', onPress: () => setActiveTab(3)},
            ]}
            activeTab={activeTab}
          />
          <View style={styles.contentContainer}>
            {loading ? (
              <Text>Loading...</Text>
            ) : (
              <FlatList
                data={filteredReportData}
                keyExtractor={item => item._id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActivityScreen;
