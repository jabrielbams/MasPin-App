import React from 'react';
import {View, StyleSheet} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import {Color, Fonts, FontSize} from '../../../constants';

const ReportCardMainSkeleton = () => {
  return (
    <View style={styles.cardContainer}>
      <ShimmerPlaceholder
        style={styles.imageSkeleton}
        shimmerColors={['#D9D9D9', '#D9D9D955', '#D9D9D900']}
        duration={1000} // Adjust duration as needed
      />
      <View style={styles.contentSection}>
        <ShimmerPlaceholder
          style={styles.headerSkeleton}
          shimmerColors={['#D9D9D9', '#D9D9D955', '#D9D9D900']}
          duration={1000} // Adjust duration as needed
        />
        <ShimmerPlaceholder
          style={styles.descTextSkeleton}
          shimmerColors={['#D9D9D9', '#D9D9D955', '#D9D9D900']}
          duration={1000} // Adjust duration as needed
        />
        <ShimmerPlaceholder
          style={styles.descTextSkeleton}
          shimmerColors={['#D9D9D9', '#D9D9D955', '#D9D9D900']}
          duration={1000} // Adjust duration as needed
        />
      </View>
    </View>
  );
};

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
  imageSkeleton: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  contentSection: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerSkeleton: {
    height: 16,
    width: '50%', // Adjust width as needed
    marginBottom: 12,
  },
  descTextSkeleton: {
    height: 10,
    width: '90%', // Adjust width as needed
    marginBottom: 8,
  },
});

export default ReportCardMainSkeleton;
