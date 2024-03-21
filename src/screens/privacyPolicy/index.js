import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {HeaderMain} from '../../components';

const PrivacyPolicy = props => {
  const {navigation, route} = props;
  const {section} = route.params;

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderMain
        sectionTitle={section}
        showLeftButton={true}
        onPressBack={() => navigation.goBack()}
      />

      {/* CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Kebijakan Privasi Aplikasi</Text>

          <View>
            <Text style={styles.desc(true)}>
              Keamanan Informasi: {''}
              <Text style={styles.desc(false)}>
                Kami mengambil langkah-langkah keamanan yang wajar untuk
                melindungi informasi pribadi Anda dari akses yang tidak sah,
                penggunaan, atau pengungkapan yang tidak sah. Namun, diingatkan
                bahwa tidak ada metode transmisi data melalui internet atau
                metode penyimpanan elektronik yang 100% aman.
              </Text>
            </Text>
          </View>

          <View>
            <Text style={styles.desc(true)}>
              Pengaturan Privasi: {''}
              <Text style={styles.desc(false)}>
                Anda dapat mengatur preferensi privasi Anda dalam aplikasi
                Maspin, termasuk mengelola izin akses dan mengontrol bagaimana
                informasi pribadi Anda digunakan.
              </Text>
            </Text>
          </View>

          <View>
            <Text style={styles.desc(true)}>
              Pembaruan Kebijakan Privasi: {''}
              <Text style={styles.desc(false)}>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu
                dengan memposting versi yang direvisi di halaman ini. Perubahan
                akan berlaku segera setelah diposting di halaman ini.
              </Text>
            </Text>
          </View>

          <View>
            <Text style={styles.desc(true)}>
              Hak Cipta: {''}
              <Text style={styles.desc(false)}>
                Seluruh konten, desain, dan materi lainnya yang terdapat dalam
                aplikasi Maspin dilindungi oleh hak cipta dan hak kekayaan
                intelektual lainnya. Pengguna dilarang untuk mereproduksi,
                menyalin, atau mendistribusikan konten tersebut tanpa izin
                tertulis dari kami.
              </Text>
            </Text>
          </View>

          <View>
            <Text style={styles.desc(false)}>
              Jika Anda memiliki pertanyaan atau kekhawatiran mengenai kebijakan
              privasi ini, atau jika Anda ingin mengakses, memperbarui, atau
              menghapus informasi pribadi Anda, silakan hubungi kami melalui
              informasi kontak yang disediakan di aplikasi Maspin.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
