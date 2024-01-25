import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ENDPOINT} from '../utils/endpoint';

export const getUserProfile = async () => {
  try {
    // Mendapatkan refreshToken dari asyncStorage
    const refreshToken = await AsyncStorage.getItem('refreshToken');

    // Melakukan permintaan ke API dengan menggunakan refreshToken
    const response = await axios.get(ENDPOINT.NGROK.PROFILE, {
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
