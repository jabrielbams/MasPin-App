import {useState} from 'react';

const useHome = ({navigation}) => {
  const onTaxPressed = () => {
    navigation.navigate('Tax');
  };

  return {
    onTaxPressed,
  };
};

export default useHome;
export {useHome};
