import {BASE_URL_FIX} from '@env';

const url_api = process.env['BASE_URL_FIX'];
export const ENDPOINT = {
  AUTH: {
    LOGIN: `${url_api}/api/users/login`,
    REGISTER: `${url_api}/api/users/register`,
    VALIDASI: `${url_api}/api/users/validate-account`,
  },
  PROFILE: {
    USER: `${url_api}/api/users`,
  },
  REPORT: {
    CREATE: `${url_api}/api/laporan/add-laporan`,
    LIKE_REPORT: `${url_api}/api/laporan/like/`,
    REPORT_ALL: `${url_api}/api/laporan/get-laporan/all`,
    REPORT_BY_USER: `${url_api}/api/laporan/get-laporan`,
  },
  TAX: {
    CEK_PAJAK: `${url_api}/api/pajak/detail-pajak-kendaraan`,
  },
  NEWS: {
    GET_NEWS: `${url_api}/api/berita`,
  },
  MARKET: {
    GET_PASAR: `${url_api}/api/pasar`,
    GET_DETAIL: `${url_api}/api/pasar/detail-pasar`,
  },
};
