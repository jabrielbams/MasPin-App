import {BASE_URL_API} from '@env';

export const ENDPOINT = {
  AUTH: {
    LOGIN: `${BASE_URL_API}/api/users/login`,
    REGISTER: `${BASE_URL_API}/api/users/register`,
    VALIDASI: `${BASE_URL_API}/api/users/validate-account`,
  },
  PROFILE: {
    USER: `${BASE_URL_API}/api/users`,
  },
  REPORT: {
    CREATE: `${BASE_URL_API}/api/laporan/add-laporan`,
    LIKE_REPORT: `${BASE_URL_API}/api/laporan/like/`,
    REPORT_ALL: `${BASE_URL_API}/api/laporan/get-laporan/all`,
    REPORT_BY_USER: `${BASE_URL_API}/api/laporan/get-laporan`,
  },
  TAX: {
    CEK_PAJAK: `${BASE_URL_API}/api/pajak/detail-pajak-kendaraan`,
  },
  NEWS: {
    GET_NEWS: `${BASE_URL_API}/api/berita`,
  },
  MARKET: {
    GET_PASAR: `${BASE_URL_API}/api/pasar`,
    GET_DETAIL: `${BASE_URL_API}/api/pasar/detail-pasar`,
  },
};
