import AsyncStorage from '@react-native-async-storage/async-storage';
import {ENDPOINT} from '../utils/endpoint';
import axios from 'axios';

export const getAllNews = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');

    const response = await axios.get(ENDPOINT.NEWS.GET_NEWS, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    return response.data.data;
  } catch (error) {
    throw error;
  }
};
