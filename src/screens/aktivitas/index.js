import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  LabelCategory,
  LabelStatus,
  NotificationIcon,
  ReportCardMain,
  TabBar,
} from '../../components';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {ENDPOINT} from '../../utils/endpoint';

const ActivityScreen = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        const response = await axios.get(ENDPOINT.NGROK.GET, {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });

        const result = response.data;

        if (result.success) {
          setReportData(result.data);
        } else {
          console.error('Error fetching data:', result.message);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredReportData = reportData.filter(
    report => report.status === activeTab,
  );

  const renderItem = ({item}) => (
    <ReportCardMain
      key={item._id}
      imgReport={item.image_laporan}
      descReport={item.detail_masalah}
      category={<LabelCategory title={item.kategori_masalah} />}
      status={<LabelStatus type={item.status} />}
    />
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
          {/* Tab Bar */}
          <TabBar
            tabs={[
              {title: 'Status 1', onPress: () => setActiveTab(1)},
              {title: 'Status 2', onPress: () => setActiveTab(2)},
              {title: 'Status 3', onPress: () => setActiveTab(3)},
            ]}
            activeTab={activeTab}
          />

          {/* Laporan List */}
          <View style={styles.contentContainer}>
            {loading ? (
              <Text>Loading...</Text>
            ) : (
              <FlatList
                data={
                  filteredReportData
                    ? filteredReportData.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
                      )
                    : []
                }
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
