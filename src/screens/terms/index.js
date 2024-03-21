import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {HeaderMain} from '../../components';
import styles from './styles';

const Terms = props => {
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
          <Text style={styles.title}>Syarat & Ketentuan Aplikasi</Text>

          <View>
            <Text style={styles.desc(true)}>
              Penggunaan Aplikasi: {''}
              <Text style={styles.desc(false)}>
                Aplikasi Maspin disediakan untuk digunakan secara pribadi oleh
                pengguna yang memenuhi persyaratan yang ditetapkan. Pengguna
                dilarang menggunakan aplikasi ini untuk tujuan yang melanggar
                hukum atau untuk kegiatan yang melanggar hak atau privasi pihak
                lain.
              </Text>
            </Text>
          </View>

          <View>
            <Text style={styles.desc(true)}>
              Akun Pengguna: {''}
              <Text style={styles.desc(false)}>
                Untuk menggunakan sebagian besar fitur aplikasi Maspin, pengguna
                dapat diminta untuk membuat akun pengguna. Pengguna bertanggung
                jawab atas keamanan dan kerahasiaan informasi akun mereka.
                Setiap aktivitas yang terjadi di bawah akun pengguna adalah
                tanggung jawab pengguna.
              </Text>
            </Text>
          </View>

          <View>
            <Text style={styles.desc(true)}>
              Konten Pengguna: {''}
              <Text style={styles.desc(false)}>
                Dengan menggunakan aplikasi Maspin, pengguna mungkin memiliki
                akses untuk menyampaikan konten, termasuk tetapi tidak terbatas
                pada umpan balik, komentar, atau materi lainnya. Pengguna dengan
                ini menyetujui bahwa mereka bertanggung jawab sepenuhnya atas
                konten yang mereka buat atau bagikan, dan bahwa konten tersebut
                tidak melanggar hak atau privasi pihak lain.
              </Text>
            </Text>
          </View>

          <View>
            <Text style={styles.desc(true)}>
              Pembatasan Tanggung Jawab: {''}
              <Text style={styles.desc(false)}>
                Penggunaan aplikasi Maspin adalah risiko pengguna sendiri. Kami
                tidak bertanggung jawab atas kerugian atau kerusakan yang timbul
                dari penggunaan atau ketidakmampuan menggunakan aplikasi ini.
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
        </View>
      </ScrollView>
    </View>
  );
};

export default Terms;
