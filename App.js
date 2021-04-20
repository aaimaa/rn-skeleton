import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './Navigators/DrawerNavigation'
export default function App() {
  return (
    <View style={styles.container}>
      <DrawerNavigation/>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
