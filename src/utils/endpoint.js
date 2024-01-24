import {API_BASE_URL1} from '@env';
import {API_URL_NGROK1} from '@env';

export const ENDPOINT = {
  AUTH: {
    LOGIN: `${API_BASE_URL1}/api/users/login`,
  },
  PROFILE: {
    USER: `${API_BASE_URL1}/api/users`,
  },
  REPORT: {
    CREATE: `${API_BASE_URL1}/api/laporan/add-laporan`,
  },

  NGROK: {
    CREATE: `${API_URL_NGROK1}/api/laporan/add-laporan`,
    GET: `${API_URL_NGROK1}/api/laporan/get-laporan`,

    LOGIN: `${API_URL_NGROK1}/api/users/login`,
    REGISTER: `${API_URL_NGROK1}/api/users/register`,
    VALIDASI: `${API_URL_NGROK1}/api/users/validate-account`,
    PROFILE: `${API_URL_NGROK1}/api/users`,

    CEK_PAJAK: `${API_URL_NGROK1}/api//api/pajak/detail-pajak-kendaraan/:no_polisi`,
  },
};
