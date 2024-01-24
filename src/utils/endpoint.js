import {API_BASE_URL1} from '@env';
import {API_URL_NGROK2} from '@env';

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
    CREATE_REPORT: `${API_URL_NGROK2}/api/laporan/add-laporan`,
    REPORT_ALL: `${API_URL_NGROK2}/api/laporan/get-laporan/all`,
    REPORT_BY_USER: `${API_URL_NGROK2}/api/laporan/get-laporan`,

    LOGIN: `${API_URL_NGROK2}/api/users/login`,
    REGISTER: `${API_URL_NGROK2}/api/users/register`,
    VALIDASI: `${API_URL_NGROK2}/api/users/validate-account`,
    PROFILE: `${API_URL_NGROK2}/api/users`,

    CEK_PAJAK: `${API_URL_NGROK2}/api//api/pajak/detail-pajak-kendaraan/:no_polisi`,
  },
};
