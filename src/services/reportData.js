import axios from 'axios';
import {ENDPOINT} from '../utils/endpoint';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAllReport = async () => {
  try {
    // Mendapatkan refreshToken dari asyncStorage
    const refreshToken = await AsyncStorage.getItem('refreshToken');

    // Melakukan permintaan ke API dengan menggunakan refreshToken
    const response = await axios.get(ENDPOINT.REPORT.REPORT_ALL, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    return response.data.data;
  } catch (error) {
    // Menangani kesalahan jika permintaan gagal
    throw error;
  }
};

export const getReportByUserId = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');

    // Melakukan permintaan ke API dengan menggunakan refreshToken
    const response = await axios.get(ENDPOINT.REPORT.REPORT_BY_USER, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    return response.data.data;
  } catch (error) {
    throw error;
  }
};
