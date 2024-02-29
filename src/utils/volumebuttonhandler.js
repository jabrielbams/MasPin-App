import {NativeEventEmitter, NativeModules} from 'react-native';

const volumeEventEmitter = new NativeEventEmitter(NativeModules.VolumeControl);
let volumeDownCount = 0;

export const startVolumeButtonListener = navigation => {
  const volumeDownSubscription = volumeEventEmitter.addListener(
    'volumeDownButtonPressed',
    () => {
      volumeDownCount++;
      if (volumeDownCount === 3) {
        // Buka menu di sini
        console.log('Buka menu');
        navigation.navigate('Telephone');
        volumeDownCount = 0;
      }
    },
  );
  return volumeDownSubscription;
};

export const stopVolumeButtonListener = subscription => {
  subscription.remove();
};
