import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView>
        <View style={styles.header}>
            <Text style={styles.headerText}>Curriculum Vitae</Text>
        </View>

        <Image
            style={styles.image}
            source={require('./assets/foto1.jpg')}
        />

        <View style={styles.section}>
            <Text style={styles.sectionName}>Thrilya Eugene Abigail Potalangi</Text>          
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionTitle}>About Me</Text>
            <Text style={styles.text}>Saya adalah mahasiswi Sistem Informasi di Universitas Klabat yang memiliki ketertarikan besar 
                dalam bidang desain antarmuka (UI/UX) dan pengembangan aplikasi. Saya memiliki semangat, motivasi yang tinggi dalam bekerja
                dan mudah beradaptasi dengan lingkungan baru untuk mendapatkan suatu pengalaman
                yang inovatif.
            </Text>
            
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact</Text>
            <Text style={styles.text}>E-mail: thrilyapotalangi@gmail.com</Text>
            <Text style={styles.text}>Phone: 0812-1026-1976 </Text>
            <Text style={styles.text}>Address: Manado, Sulawesi Utara </Text>
        </View>

        <View style={styles.section}>
  <Text style={styles.sectionTitle}>Education</Text>
  <Text style={styles.text}>SMA - Sekolah Lentera Harapan (2020-2023)</Text>
  <Text style={styles.text}>Kuliah - Universitas Klabat (Sekarang)</Text>
  <Image
    style={styles.logoUnklab}
    source={{
      uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/LOGO_UNIVERSITAS_KLABAT.png'
    }}
  />
  <Image
  style={styles.logoUnklab}
  source={{ uri: 'data:image/jpeg;base64,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' }}
/>

</View>


        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Skills</Text>
            <Text style={styles.text}>Creative</Text>
            <Text style={styles.text}>Teamwork</Text>
            <Text style={styles.text}>Communication</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experiences</Text>
            <Text style={styles.text}>- PIC of Editor Division - UVICS (Unklab Virtue in Computer Science)</Text>
            <Text style={styles.text}>- Committee Member - Proxo Coris International Competition 2025</Text>
            <Text style={styles.text}>- Semifinalist - UI/UX Design Competition by UNESSA</Text>
        </View>

    </ScrollView>
  );
};

export default App;
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00809D',
        paddingVertical: 15,
    },
    headerText: {
        fontSize: 40,
        textAlign: 'center',
        color: '#FCECDD',
        fontWeight: 'bold',
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,

    },
    section: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF7601'
    },
    sectionName: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#FF7601',
    },
    text: {
        fontSize: 15,

    },
    logoUnklab: {
        width: 50,
        height: 50,
        marginBottom: 10,
    }
})