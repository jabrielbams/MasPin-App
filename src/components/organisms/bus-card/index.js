import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import {ImgBusTrans} from '../../../assets/images';
import {Color, FontSize, Fonts} from '../../../constants';
import {InformationBadge} from '../..';
import {IcBus, IcLineOperator} from '../../../assets/icons';

const BusCard = () => {
  return (
    <View>
      <Image source={ImgBusTrans} width={100} height={100} />
      <View>
        <Text style={styles.nameBus}>Trans Banyumas 042</Text>
        <View style={styles.routeSection}>
          <InformationBadge
            icon={IcBus}
            showAddition={false}
            text="Ht. Pancurawis"
          />
          <IcLineOperator />
          <InformationBadge
            icon={IcBus}
            showAddition={false}
            text="Ht. Terminal"
          />
        </View>
      </View>
    </View>
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
});
