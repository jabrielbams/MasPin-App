import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {HeaderMain} from '../../components';
import {IcMaspin} from '../../assets/icons';
import {Color, FontSize, Fonts} from '../../constants';

const AboutMaspin = props => {
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingVertical: 8}}>
        {/* First */}
        <View style={styles.content(false)}>
          <IcMaspin />
          <View style={styles.maspin}>
            <Text style={styles.title}>Apa itu Maspin</Text>
            <Text style={styles.desc(false)}>
              Maspin adalah sebuah super aplikasi pemerintah yang bertujuan
              untuk menyediakan akses terpadu ke berbagai layanan pemerintah
              dalam satu platform yang mudah diakses oleh masyarakat. Aplikasi
              ini dirancang untuk mengatasi masalah keberagaman dan tumpang
              tindih dalam aplikasi pemerintah yang telah ada sebelumnya.
            </Text>
          </View>
        </View>

        <View style={styles.dividerStyle} />

        {/* Second */}
        <View style={styles.content(true)}>
          <Text style={styles.title}>Fungsi dan Manfaat</Text>

          <View style={{marginBottom: 10}}>
            <Text style={styles.desc(true)}>
              Integrasi Layanan Pemerintah: {''}
              <Text style={styles.desc(false)}>
                Maspin menyatukan berbagai layanan pemerintah, mulai dari
                pembayaran pajak, perizinan, hingga informasi tentang program
                sosial, dalam satu aplikasi yang mudah diakses. Hal ini
                memungkinkan masyarakat untuk mengakses semua layanan tersebut
                tanpa harus beralih antaraplikasi.
              </Text>
            </Text>
          </View>

          <View style={{marginBottom: 10}}>
            <Text style={styles.desc(true)}>
              Peningkatan Efisiensi: {''}
              <Text style={styles.desc(false)}>
                Dengan mengonsolidasikan layanan-layanan pemerintah ke dalam
                satu aplikasi, Maspin membantu dalam meningkatkan efisiensi
                administratif dan pengelolaan data. Ini juga memungkinkan
                pemerintah untuk mengoptimalkan penggunaan sumber daya dan
                mengurangi biaya pengembangan aplikasi yang terpisah.
              </Text>
            </Text>
          </View>

          <View style={{marginBottom: 10}}>
            <Text style={styles.desc(true)}>
              Kemudahan Akses dan Penggunaan: {''}
              <Text style={styles.desc(false)}>
                Maspin dirancang dengan antarmuka pengguna yang ramah pengguna
                dan mudah dipahami. Pengguna dapat dengan mudah menavigasi
                aplikasi untuk menemukan layanan yang mereka butuhkan tanpa
                mengalami kesulitan.
              </Text>
            </Text>
          </View>

          <View style={{marginBottom: 20}}>
            <Text style={styles.desc(true)}>
              Koordinasi dan Komunikasi yang Lebih Baik: {''}
              <Text style={styles.desc(false)}>
                Aplikasi ini juga memfasilitasi komunikasi antara pemerintah dan
                masyarakat. Pengguna dapat menyampaikan masukan, keluhan, atau
                pertanyaan mereka melalui fitur komunikasi yang disediakan dalam
                aplikasi, sehingga memungkinkan pemerintah untuk merespons
                dengan lebih cepat dan efektif.
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutMaspin;
