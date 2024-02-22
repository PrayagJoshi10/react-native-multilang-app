import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LanguageButton from './LanguageButton';
import i18next from '../../services/i18next';

const Header = () => {
  const [visible, setVisible] = useState(false);

  const changeLng = (lng: string) => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };
  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => setVisible(true)}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2889/2889312.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <Modal visible={visible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.centerContainer}>
            <Text style={styles.title}>Select Language</Text>
            <LanguageButton title="English" onPress={() => changeLng('en')} />
            <LanguageButton title="Hindi" onPress={() => changeLng('hi')} />
            <LanguageButton title="Gujarati" onPress={() => changeLng('gu')} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 16,
  },
  logo: {
    width: 150,
    height: 50,
    borderRadius: 16,
  },
  languageButton: {
    padding: 15,
    borderRadius: 8,
  },
  icon: {
    height: 25,
    width: 25,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  centerContainer: {
    gap: 15,
    padding: 10,
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
});
