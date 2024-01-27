import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import {ImgBusTrans, ImgBisTrans} from '../../../assets/images';
import {Color, FontSize, Fonts} from '../../../constants';
import {InformationBadge} from '../..';
import {IcHalte, IcHalteBus, IcLineOperator} from '../../../assets/icons';

const BusCard = ({imgSource, busName, halteName, destinationName, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {imgSource}
      <View>
        <Text style={styles.nameBus}>{busName}</Text>
        <View style={styles.routeSection}>
          <InformationBadge
            icon={<IcHalte />}
            showAddition={false}
            text={halteName}
          />
          <IcLineOperator />
          <InformationBadge
            icon={<IcHalte />}
            showAddition={false}
            text={destinationName}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BusCard;

const styles = StyleSheet.create({
  nameBus: {
    fontFamily: Fonts.SEMIBOLD,
    color: Color.BLACK,
    fontSize: FontSize.dp_14,
  },
  routeSection: {flexDirection: 'row', alignItems: 'center', gap: 7},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 90,
    backgroundColor: Color.WHITE,
    elevation: 2,
    gap: 10,
    marginBottom: 10,
  },
});
