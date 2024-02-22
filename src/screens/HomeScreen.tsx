import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ContentList from '../components/ContentList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ContentList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
  },
});
