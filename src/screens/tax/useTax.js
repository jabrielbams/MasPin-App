import React, {useState} from 'react';

const useTax = () => {
  const [type1, setType1] = useState(true);
  const [isPhaseTwo, setIsPhaseTwo] = useState(false);
  const [uiWording, setUiWording] = useState({
    sectionTitle: 'Pajak Kendaraan Roda 2',
    sectionScreen: 'Pajak',
  });

  const onChangeType = () => {
    setType1(!type1);
  };

  const onChangeTitle = () => {
    setUiWording({
      ...uiWording,
      sectionTitle: 'Pajak Kendaraan Roda 4',
    });
  };

  const onChangePhase = () => {
    setIsPhaseTwo(true);
  };

  return {
    uiWording,
    type1,
    isPhaseTwo,
    setUiWording,
    onChangeTitle,
    onChangeType,
    onChangePhase,
  };
};

export default useTax;
export {useTax};
