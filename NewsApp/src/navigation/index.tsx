import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NewScreen from '../screen/NewScreen/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
const BottomTab = createBottomTabNavigator();

const RootNavigation: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (
                <Image
                  style={styles.icTab}
                  source={require('../res/icon/world.png')}
                />
              );
            },
          }}
          name="WorldNew"
          component={NewScreen}
        />
        {/* <BottomTab.Screen name="Saved" component={NewScreen} /> */}
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icTab: {
    width: 25,
    height: 25,
  },
});
export default RootNavigation;
