import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import i18next from './services/i18next';
import {useTranslation} from 'react-i18next';

const App = () => {
  const {t} = useTranslation();

  const changeLng = (lng: string) => {
    i18next.changeLanguage(lng);
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={styles.title}>{t('welcome')}</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => changeLng('en')}>
          <Text style={styles.buttonLabel}>English</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => changeLng('hi')}>
          <Text style={styles.buttonLabel}>Hindi</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => changeLng('gu')}>
          <Text style={styles.buttonLabel}>Gujarati</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34abeb',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 25,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#d14e0d',
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 16,
  },
});
