import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Gap from '../../componentsProject/atomsProject/Gap';
import Button from '../../componentsProject/atomsProject/buttonProject';
import TextInput from '../../componentsProject/moleculsProject/TextInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { showMessage } from 'react-native-flash-message';
import { launchCamera } from 'react-native-image-picker';
import { nullphoto } from '../../assets';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(nullphoto);
  const [base64, setBase64] = useState('');

  const getImage = async () => {
    const result = await launchCamera({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });

    if (result.didCancel) {
      showMessage({
        message: 'Pengambilan foto dibatalkan',
        type: 'danger',
      });
      setPhoto(nullphoto);
    } else {
      const data = result.assets?.[0];
      if (data?.base64 && data?.type) {
        const photoBase64 = `data:${data.type};base64,${data.base64}`;
        setBase64(photoBase64);
        setPhoto({ uri: photoBase64 });
      }
    }
  };

  const handleSignUp = () => {
    if (!username || !email || !password) {
      showMessage({
        message: 'Semua field wajib diisi',
        type: 'danger',
      });
      return;
    }

    const auth = getAuth();
    const db = getDatabase();

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;

        set(ref(db, 'users/' + user.uid), {
          fullName: username,
          email: email,
          photo: base64,
        });

        showMessage({
          message: 'Akun berhasil didaftarkan!',
          type: 'success',
        });

        navigation.navigate('Dashboard', { username });
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Sign Up</Text>
      <Text style={styles.heading}>Registration</Text>

      <Gap height={24} />
      <TouchableOpacity onPress={getImage} activeOpacity={0.7}>
        <View style={styles.avatar}>
          <Image source={photo} style={styles.avatarImage} />
        </View>
      </TouchableOpacity>

      <Gap height={32} />

      <Text style={styles.label}>Full name</Text>
      <TextInput placeholder="Full name" value={username} onChangeText={setUsername} />

      <Gap height={12} />

      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />

      <Gap height={12} />

      <Text style={styles.label}>Password</Text>
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

      <Gap height={20} />

      <Button title="Sign up" onPress={handleSignUp} />
      <Gap height={12} />
      <Button title="Sign in with Google" type="secondary" onPress={() => {}} />

      <Gap height={24} />

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEFC',
    padding: 24,
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: '#000',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginTop: 12,
    textAlign: 'center',
    color: '#000',
  },
  avatar: {
    alignSelf: 'center',
    width: 119,
    height: 119,
    backgroundColor: '#D9D9D9',
    borderRadius: 119 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: 119,
    height: 119,
    borderRadius: 119 / 2,
    resizeMode: 'cover',
  },
  label: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
    color: '#040404',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
    fontFamily: 'Poppins-Medium',
  },
  linkText: {
    color: '#0F62B0',
    fontWeight: 'bold',
  },
});
