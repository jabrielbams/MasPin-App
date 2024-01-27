import {BASE_URL} from '@env';

export const ENDPOINT = {
  AUTH: {
    LOGIN: `${BASE_URL}/api/users/login`,
    REGISTER: `${BASE_URL}/api/users/register`,
    VALIDASI: `${BASE_URL}/api/users/validate-account`,
  },
  PROFILE: {
    USER: `${BASE_URL}/api/users`,
  },
  REPORT: {
    CREATE: `${BASE_URL}/api/laporan/add-laporan`,
    LIKE_REPORT: `${BASE_URL}/api/laporan/like/`,
    REPORT_ALL: `${BASE_URL}/api/laporan/get-laporan/all`,
    REPORT_BY_USER: `${BASE_URL}/api/laporan/get-laporan`,
  },
  TAX: {
    CEK_PAJAK: `${BASE_URL}/api//api/pajak/detail-pajak-kendaraan/:no_polisi`,
  },
};
