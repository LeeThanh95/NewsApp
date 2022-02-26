import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import NewItemCompent from '../../component/New/NewItemCompent/index';
import HeaderNewListComponent from '../../component/New/HeaderNewListComponent/index';
import * as rssParser from 'react-native-rss-parser';

const NewScreen: React.FC<{}> = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch('https://vnexpress.net/rss/tin-moi-nhat.rss')
      .then(response => response.text())
      .then(responseData => rssParser.parse(responseData))
      .then(rss => {
        setData(rss.items);
      });
  }, []);
  return (
    <View style={styles.container}>
      <HeaderNewListComponent />
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <NewItemCompent item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewScreen;
