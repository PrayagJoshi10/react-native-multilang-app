import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
  title: string;
  news: string;
}

const NewsCard = ({title, news}: Props) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{t(title)}</Text>
        <View style={styles.sepeartor} />
        <Text style={styles.news}>{t(news)}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLable}>{t('readMore')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 16,
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  sepeartor: {
    height: 1,
    width: '100%',
    backgroundColor: '#d9d9d9',
    marginVertical: 5,
  },
  news: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: 10,
  },
  buttonLable: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
});
