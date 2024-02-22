import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import NewsCard from './NewsCard';
import {NewsList} from '../assets/NewsList';

const ContentList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={NewsList}
        renderItem={({item}) => (
          <NewsCard title={item.title} news={item.news} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ContentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
