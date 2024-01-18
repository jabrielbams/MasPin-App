import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Linking,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {MAP_API_KEY} from '@env';
import Geolocation from 'react-native-geolocation-service';
import Geocoding from 'react-native-geocoding';
import getAddress from '../../services/location';
import {Color, Fonts} from '../../constants';
import {BackButton, HeaderNavigation} from '../../components';

function ReportScreen() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState('');

  const getPhotoLocation = () => {
    Geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      setLocation({latitude, longitude});
      getAddress(latitude, longitude, setAddress);
    });
  };

  useEffect(() => {
    async function getPermission() {
      const cameraPermission = await Camera.requestCameraPermission();
      // const cameraPermission = await Camera.getCameraPermissionStatus();
      if (cameraPermission === 'denied') await Linking.openSettings();
      const locationPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Akses Lokasi Diperlukan',
          message: 'Aplikasi ini memerlukan akses lokasi',
        },
      );
      console.log(cameraPermission, locationPermission);
    }
    getPermission();
    console.log('alamat', address);
    console.log('device', device);
    console.log('camera', camera);

    // Geocoding.init(MAP_KEY);
  }, [address]);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto();
      setImageSource(photo.path);
      setShowCamera(false);
      getPhotoLocation();
      console.log(photo.path);
      console.log(address);
    } else {
      console.log('kamera error');
    }
  };
  // useEffect(() => {
  //   // console.log('Devices:', devices);
  // }, [devices]);

  return (
    <View style={styles.container}>
      {showCamera ? (
        <>
          {device ? (
            <Camera
              ref={camera}
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={showCamera}
              photo={true}
            />
          ) : (
            <Text>No camera available</Text>
          )}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.camButton}
              onPress={() => capturePhoto()}
            />
          </View>
        </>
      ) : (
        <>
          {imageSource === '' ? (
            <View style={styles.mainBody}>
              <HeaderNavigation
                onPress={() => {
                  console.log('kembali');
                }}
                title={'Laporan'}
              />
              <Image
                style={styles.image}
                source={{
                  uri: `file://'${imageSource}`,
                }}
              />
            </View>
          ) : null}

          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: '#fff',
                  paddingHorizontal: 28,
                  paddingVertical: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                  marginRight: 6,
                }}
                onPress={() => setShowCamera(true)}>
                <Text style={{color: Color.PRIMARY, fontWeight: '500'}}>
                  Ulangi
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: Color.PRIMARY,
                  paddingHorizontal: 28,
                  paddingVertical: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                  marginLeft: 6,
                }}
                onPress={() => setShowCamera(false)}>
                <Text
                  style={{
                    color: Color.WHITE,
                    fontWeight: '500',
                    fontSize: 16,
                  }}>
                  Gunakan
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 32,
  },

  mainBody: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },

  button: {
    backgroundColor: 'gray',
  },

  buttonContainer: {
    backgroundColor: '#00000070',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  buttons: {
    alignContent: 'stretch',
    alignItems: 'strech',
    flexDirection: 'row',
    width: '100%',
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
    backgroundColor: '#B2BEB5',

    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  image: {
    marginTop: 16,
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
});

export default ReportScreen;
