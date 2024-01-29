import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ImgCar} from '../../../assets/images';
import {
  LabelStatus,
  LabelCategory,
  LikeButton,
  ReportCardMainSkeleton,
} from '../../../components';
import {Color, FontSize, Fonts} from '../../../constants';
import {IcLikes, IcLikesActive} from '../../../assets/icons';
import {ENDPOINT} from '../../../utils/endpoint';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReportCardMain = ({
  imgReport,
  descReport,
  category,
  status,
  onPress,
  uploadDate,
  reportId,
}) => {
  // const handleLike = async () => {
  //   const refreshToken = await AsyncStorage.getItem('refreshToken');
  //   try {
  //     const response = await fetch(
  //       `${ENDPOINT.NGROK.LIKE_REPORT}/${reportId}`,
  //       {
  //         method: 'POST',
  //         headers: {
  //           Authorization: `Bearer ${refreshToken}`,
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );

  //     if (response.ok) {
  //       setIsLiked(!isLiked);
  //     } else {
  //       Alert.alert(
  //         'Error',
  //         'Failed to like the report. Please try again later.',
  //       );
  //     }
  //   } catch (error) {
  //     console.error('Error liking the report:', error);
  //     Alert.alert(
  //       'Error',
  //       'Failed to like the report. Please try again later.',
  //     );
  //   }
  // };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={{position: 'relative'}}>
        <Image
          source={{uri: imgReport}}
          style={{
            width: 100,
            height: 100,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            resizeMode: 'cover',
          }}
        />
        <View style={styles.timeContainer}>
          <Text
            style={{
              fontFamily: Fonts.REGULAR,
              fontSize: 10,
              color: Color.BLACK,
            }}>
            {uploadDate}
          </Text>
        </View>
      </View>
      <View style={styles.contentSection}>
        <View style={styles.header}>
          <View style={styles.category}>
            {category && <View>{category}</View>}
            {status && <View>{status}</View>}
          </View>
          {/* <TouchableOpacity onPress={() => setPressed(!pressed)}>
            {isLiked ? <IcLikesActive /> : <IcLikes />}
          </TouchableOpacity> */}
        </View>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.descText}>
          {descReport}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReportCardMain;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    flexDirection: 'row',
    elevation: 1,
    flex: 1,
    height: 100,
    marginBottom: 16,
  },
  timeContainer: {
    position: 'absolute',
    top: 6,
    right: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.WHITE,
    borderRadius: 100,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  contentSection: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  category: {
    flexDirection: 'row',
    gap: 6,
  },
  descText: {
    color: Color.TEXTSECONDARY,
    fontSize: FontSize.dp_10,
    fontFamily: Fonts.REGULAR,
  },
  imgStyle: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
