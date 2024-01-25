import axios from 'axios';
import {MAP_API_KEY} from '@env';

async function getAddress(
  latitude: number,
  longitude: number,
  setLocationName: Function,
) {
  const url = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=en-US&apiKey=${MAP_API_KEY}`;
  const defaultResponse = latitude.toFixed(2) + ', ' + longitude.toFixed(2);

  try {
    const response = await axios.get(url);
    const resJson = response.data;
    if (
      resJson &&
      resJson.items &&
      resJson.items[0].address &&
      resJson.items[0].address.city &&
      resJson.items[0].address.countryName
    ) {
      const locationName =
        resJson.items[0].address.city +
        ', ' +
        resJson.items[0].address.countryName;
      setLocationName(locationName ?? defaultResponse);
    } else {
      setLocationName(defaultResponse);
    }
  } catch (error) {
    setLocationName(defaultResponse);
  }
}

export default getAddress;
