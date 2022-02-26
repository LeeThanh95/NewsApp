import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../../../config/color';

const HeaderNewListComponent: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTime}>WED, OCT 16 </Text>
      <Text style={styles.txtHeader}>World news</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  txtTime: {
    fontSize: 16,
    paddingTop:10,
    fontWeight: 'bold',
  },
  txtHeader: {
    fontSize: 40,
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
});

export default HeaderNewListComponent;
