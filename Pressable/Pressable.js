import {Box, ScrollView, VStack} from 'native-base';
import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  TextBase,
} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import SourceCode from '../components/SourceCode';

const DrawerScreen = () => {
  const [data, setData] = useState();
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  return (
    <>
    <HeaderBack/>
      {/* <ScrollView> */}
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition={drawerPosition}
          renderNavigationView={navigationView}>
          <View style={styles.container}>
            <Text style={styles.paragraph}>
              Swipe from the side or press button below to see it!
            </Text>
            <VStack space={5}>
              <Button
                title="Open drawer"
                onPress={() => drawer.current.openDrawer()}
              />
              <Button
                title="Source Code"
                onPress={() => {
                  {
                    setData('drawer');
                  }
                }}
              />
            </VStack>
          </View>
        </DrawerLayoutAndroid>

        {data === 'drawer' && (
          <Box shadow={7} bgColor={'#fff'} width={'100%'}>
          <SourceCode/>
          
          </Box>
        )}
      {/* </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});
export default DrawerScreen;
