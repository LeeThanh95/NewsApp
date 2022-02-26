import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import Colors from '../../../config/color';
const {width: screenWidth} = Dimensions.get('window');

const NewItemCompent: React.FC<{item: any}> = ({item}) => {
  const handlePress = useCallback(async url => {
    await Linking.openURL(url);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBg}
        source={{uri: 'https://appota.com/static/media/home_1.69857406.jpg'}}
      />
      <Image
        style={styles.imageLike}
        source={require('../../../res/icon/like.png')}
      />

      <TouchableOpacity
        onPress={() => handlePress(item.id)}
        style={styles.containerNew}>
        <View style={styles.containerTime}>
          <Text style={styles.txttitle}>TECH</Text>
          <Text>7 minute</Text>
        </View>
        <Text numberOfLines={2} style={styles.txtContent}>
          {item.title}
        </Text>
        <Text style={styles.txtRead}>Read</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 80,
    marginHorizontal: 10,
  },
  imageBg: {
    width: screenWidth - 80,
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 15,
  },
  imageLike: {
    position: 'absolute',
    width: 25,
    right: 20,
    top: 20,
    height: 25,
  },
  containerTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerNew: {
    backgroundColor: Colors.textWhite,
    position: 'absolute',
    marginLeft: 10,
    width: screenWidth - 100,
    height: '25%',
    padding: 10,
    borderRadius: 10,
    bottom: 30,
  },
  txtContent: {
    fontSize: 20,
    flex: 1,
    paddingVertical: 5,
    color: Colors.textBlack,
  },
  txttitle: {
    color: Colors.dodgerblue,
  },
  txtRead: {
    color: Colors.textWhite,
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontWeight: 'bold',
    backgroundColor: Colors.dodgerblue,
    alignSelf: 'flex-end',
  },
});

export default NewItemCompent;
