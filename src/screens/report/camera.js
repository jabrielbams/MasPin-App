import {launchCamera} from 'react-native-image-picker';
import Geolocation from 'react-native-geolocation-service';
import getAddress from '../../services/location';

export const launchCameraAndHandleLocation = async (
  setSelectedImage,
  setLocation,
  setAddress,
  navigation,
) => {
  try {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
        navigation.goBack();
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
        navigation.goBack();
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        getPhotoLocation(setLocation, setAddress);
      }
    });
  } catch (error) {
    console.log('Error launching camera:', error.message);
  }
};

const getPhotoLocation = async (setLocation, setAddress) => {
  try {
    Geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      setLocation({latitude, longitude});
      getAddress(latitude, longitude, setAddress);
    });
  } catch (error) {
    console.log('Error getting photo location:', error.message);
  }
};
