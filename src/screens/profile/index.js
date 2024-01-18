import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Color, Fonts} from '../../constants';
import {NotificationIcon} from '../../components';
import {
  IcChangePassword,
  IcChevronRightActive,
  IcInfo,
  IcLanguage,
  IcMapPin,
  IcPermissions,
  IcPrivacyPolicy,
  IcPrivacySecurity,
  IcTermsCondition,
  IconBellNotification,
} from '../../assets/icons';
import SubMenu from '../../components/molecules/submenu';
import {ImgProfile} from '../../assets/images';
import {getUserProfile} from '../../services/profile';

const ProfileScreen = ({}) => {
  const [userData, setUserData] = useState(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setUserData(profileData);
        handleValidationAccount(profileData);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };
    fetchUserProfile();
  }, []);

  const handleValidationAccount = profileData => {
    const statusValidate = profileData.statusValidate;
    setIsValid(statusValidate);
  };

  const LabelValidation = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isValid ? Color.LIGHT_GREEN : Color.LIGHT_RED,
          padding: 4,
          borderRadius: 4,
          alignSelf: 'flex-start',
        }}>
        <View>
          <Text
            style={{
              fontFamily: Fonts.MEDIUM,
              fontSize: 10,
              color: isValid ? Color.GREEN : Color.RED,
            }}>
            {isValid ? 'Akun terverifikasi' : 'Akun belum terverifikasi'}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainBody}>
      {userData ? (
        <View>
          <View style={styles.headerMain}>
            <Text style={styles.headerText}>Profile</Text>
            <NotificationIcon style={{marginLeft: 'auto'}} />
          </View>
          <View style={styles.dividerStyle} />
          <View style={styles.profileSection}>
            <View>
              <Text style={styles.greetings}>Hai, {userData.nama}</Text>
              <LabelValidation />
            </View>
            <View>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                }}>
                <ImgProfile />
              </View>
            </View>
          </View>
          <View style={styles.dividerStyle} />
          <View style={styles.settingsContainer}>
            <Text style={styles.titleSection}>Pengaturan Umum</Text>
            <SubMenu leftIcon={<IcChangePassword />} title={'Ubah Password'} />
            <SubMenu leftIcon={<IcLanguage />} title={'Pengaturan Bahasa'} />
            <SubMenu
              leftIcon={<IconBellNotification />}
              title={'Pengaturan Notifikasi'}
            />
            <SubMenu
              leftIcon={<IcPrivacySecurity />}
              title={'Privasi dan Keamanan'}
            />
            <SubMenu
              leftIcon={<IcPermissions />}
              title={'Perizinan Aplikasi'}
            />
          </View>
          <View style={styles.dividerStyle} />
          <View style={styles.settingsContainer}>
            <Text style={styles.titleSection}>Pengaturan Lainnya</Text>
            <SubMenu leftIcon={<IcInfo />} title={'Tentang Maspin'} />
            <SubMenu
              leftIcon={<IcTermsCondition />}
              title={'Syarat dan Ketentuan'}
            />
            <SubMenu
              leftIcon={<IcPrivacyPolicy />}
              title={'Kebijakan Privasi'}
            />
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default ProfileScreen;
